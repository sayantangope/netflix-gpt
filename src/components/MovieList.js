import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 md:px-12 py-4 md:py-6">
      {/* Title */}
      <h2 className="text-white text-base md:text-xl font-semibold mb-2 md:mb-3 tracking-wide flex items-center gap-2">
        <span className="inline-block w-1 h-5 bg-red-600 rounded-full"></span>
        {title}
      </h2>

      {/* Scroll Container */}
      <div
        className="flex overflow-x-auto space-x-2 md:space-x-3 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;