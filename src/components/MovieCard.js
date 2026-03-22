import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSelectedMovieID } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, title, id }) => {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

if (!posterPath) return null;

const handleMovieClick = () => {
  dispatch(addSelectedMovieID(id));
  navigate(`/movietrailer/${id}`);
}

  return (
    <div onClick={handleMovieClick} className="flex-shrink-0 w-28 sm:w-32 md:w-40 lg:w-44 cursor-pointer transform transition-all duration-300 ease-out hover:scale-105 hover:z-10 group rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
      {/* Poster */}
    
      <div className="relative">
        <img
          className="w-full object-cover rounded-t-lg"
          src={IMG_CDN + posterPath}
          alt={title || "movie-card"}
        />
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
      </div>

      {/* Title — always visible below poster */}
      {title && (
        <div className="bg-gray-900 rounded-b-lg px-2 py-1.5">
          <p className="text-white text-xs font-semibold line-clamp-2 leading-snug text-center">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;