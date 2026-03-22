import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const MovieTrailer = () => {
  const movieId = useSelector((store) => store.movies.selectedMovieID);
  useMovieTrailer({ movieID: movieId });
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Iframe container — true full screen */}
      <div className="relative w-full h-full">
        {trailerVideo?.key ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=0&controls=1&loop=1&playlist=${trailerVideo?.key}&rel=0&modestbranding=1&fs=1`}
            title="YouTube video player"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ border: "none" }}
          />
        ) : (
          /* Loading state */
          <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-white text-lg font-semibold tracking-wide">Loading Trailer...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieTrailer