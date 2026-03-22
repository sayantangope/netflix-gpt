import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames || !movieResults) return null;

  return (
    <div className="bg-black/80 backdrop-blur-sm rounded-xl mx-4 my-6 pb-4">
      {/* Header */}
      <div className="px-6 pt-5 pb-2">
        <h2 className="text-white text-2xl font-bold tracking-wide">
          🎬 GPT Movie Suggestions
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Here are your personalised picks
        </p>
      </div>

      <hr className="border-gray-700 mx-6 mb-2" />

      {/* One MovieList row per GPT-suggested movie name */}
      {movieNames.map((name, index) => (
        <MovieList
          key={name}
          title={name.trim()}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;