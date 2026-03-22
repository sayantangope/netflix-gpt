import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import Groq from "groq-sdk";
import { OPENAI_API_KEY } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { gptMovieResults } from "../utils/gptSlice";

const groq = new Groq({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;

    // this will return the promises not the actual data because of the map function and async await
  };

  const handleGPTSearchClick = async () => {
    const query = searchtext.current.value;
    console.log("Search Query:", query);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      query +
      ". Only give names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, GolMaal, Koi Mil Gaya";

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "openai/gpt-oss-120b",
        temperature: 1,
        max_completion_tokens: 8192,
        top_p: 1,
        stream: false,
        reasoning_effort: "medium",
        stop: null,
      });

      const result = chatCompletion.choices[0]?.message?.content;
      const getMovies = result.split(",");
      const data = await Promise.all(getMovies.map((movie) => searchMovieInTMDB(movie)));
      dispatch(gptMovieResults({ movieNames: getMovies, movieResults: data }));

    } catch (error) {
      console.error("Groq API Error:", error);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    handleGPTSearchClick();
  };

  return (
    <div className="flex justify-center items-start pt-24 sm:pt-28 px-4 pb-6">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-0 shadow-2xl rounded-xl overflow-hidden"
      >
        <input
          ref={searchtext}
          type="text"
          className="flex-1 p-3 sm:p-4 bg-white text-black placeholder-gray-500 text-sm sm:text-base focus:outline-none sm:rounded-l-xl"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        />
        <button
          className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 sm:rounded-r-xl rounded-xl sm:rounded-l-none"
          type="submit"
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
