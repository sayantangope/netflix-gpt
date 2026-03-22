import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, userLogo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Head = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ..
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // unsubsribed when componenet unmounts
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))

  }
  return (
    <div className="fixed top-0 w-full flex flex-row justify-between items-center px-4 sm:px-6 md:px-12 py-3 md:py-4 bg-gradient-to-b from-black/95 via-black/60 to-transparent z-50">
      {/* Netflix Logo */}
      <img
        className="w-20 sm:w-28 md:w-36 cursor-pointer flex-shrink-0"
        src={LOGO}
        alt="netflix logo"
      />

      {user && (
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap justify-end">
          <select
            className="p-1.5 sm:p-2 bg-gray-900 text-white rounded-lg text-xs sm:text-sm"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-1.5 px-3 sm:py-2 sm:px-4 bg-purple-800 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-700 transition-all duration-200"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <span className="hidden lg:block text-gray-300 text-sm truncate max-w-[120px]">
            {user.displayName}
          </span>
          <img
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded cursor-pointer hover:opacity-80 transition"
            src={userLogo}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="text-white text-xs sm:text-sm font-medium bg-red-600 hover:bg-red-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded transition-all duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Head;
