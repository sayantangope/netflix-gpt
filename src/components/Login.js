import React, { useRef, useState } from "react";
import Head from "./Head";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userLogo, wallpapers } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: userLogo,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );

            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };
  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <Head />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={wallpapers}
          alt="bg-img"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      {/* Form Card */}
      <div className="relative z-10 flex items-center justify-center flex-grow px-4 py-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-sm md:max-w-md bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-md text-white shadow-2xl"
        >
          <h1 className="font-bold text-2xl md:text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 md:p-4 mb-4 bg-gray-700/80 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 md:p-4 mb-4 bg-gray-700/80 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 md:p-4 mb-2 bg-gray-700/80 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm font-medium mb-3 bg-red-900/20 px-3 py-2 rounded">
              {errorMessage}
            </p>
          )}

          <button
            className="w-full py-3 md:py-4 mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded text-sm md:text-base transition-all duration-200"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={toggleSignInForm}
            className="mt-5 text-gray-400 text-sm cursor-pointer hover:underline text-center"
          >
            {isSignInForm
              ? "New to Netflix? "
              : "Already have an account? "}
            <span className="text-white font-medium">
              {isSignInForm ? "Sign up now." : "Sign in."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
