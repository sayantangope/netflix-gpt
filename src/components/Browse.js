import React from "react";
import Head from "./Head";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryMaintainer from "./SecondaryMaintainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Head />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryMaintainer />{" "}
        </>
      )}

      {/*  
        Main Container
          -VideoBackground
          - VideoTitle
        Secondary Container
          - MovieList*n
            - cards *n
        */}
    </div>
  );
};

export default Browse;
