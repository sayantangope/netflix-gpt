import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieID }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer({ movieID });

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      {trailerVideo?.key && (
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[177.77vh] min-h-[56.25vw] pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=99&playlist=${trailerVideo?.key}`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackGround;
