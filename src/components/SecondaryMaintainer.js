import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMaintainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black -mt-16 sm:-mt-24 md:-mt-36 relative z-20 pt-4 pb-12"
      style={{ background: "linear-gradient(to bottom, transparent 0%, #141414 6%, #141414 100%)" }}>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryMaintainer;
