import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { wallpapers } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image — fixed so it covers entire screen */}
      <div className="fixed inset-0 -z-10">
        <img
          src={wallpapers}
          alt="bg-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch