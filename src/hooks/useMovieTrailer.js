import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = ({movieID})=> {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
          API_OPTIONS,
        );
        const json = await data.json();
    
        // 🔥 filter trailer
        const filterData = json.results.filter((video) => video.type === "Trailer");
    
        const trailer = filterData.length ? filterData[0] : json.results[0];
    
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        if(movieID) getMovieVideos();
      }, [movieID]);
    
}
export default useMovieTrailer