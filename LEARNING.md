# Development Steps

   ## Create React App
 - Initialize the project using create-react-app to set up the basic React environment and folder structure.

   ## Setup Routing (Login / Browse)
Use React Router to create different pages in the application.

   ## / → Login Page

   ## /browse → Browse Page (after authentication)

   ## Header Component

   Create a reusable header component.

      - Contains:

         Netflix Logo

         User profile icon

         Sign Out button

         Login Form

   ## Create a login form UI.

      Inputs:

      Email

      Password

   ## Sign In / Sign Up Form Toggle

         Implement a toggle feature to switch between Sign In and Sign Up forms.

         Use the useState hook to manage the toggle state.

            Example logic:

               const [isSignInForm, setIsSignInForm] = useState(true);

               If true → show Sign In

               If false → show Sign Up

   ## Form Validation

         Use useRef hook to access input values.

      Create Regex patterns to validate:

      Email format

      Password strength

      Use e.preventDefault() to stop the page from refreshing when submitting the form.

   ## Firebase Setup

      Create a Firebase project.

      Enable Firebase Authentication.

      Install Firebase SDK:

      npm install firebase

      Create Authentication
      Use Firebase authentication functions:

      createUserWithEmailAndPassword() → for Sign Up

      signInWithEmailAndPassword() → for Sign In

      signOut() → for logout

   ## Redux Store
      Create a global store to manage user data.

      Steps:

      Install Redux Toolkit

      Create userSlice

      Store:

      uid

      email

      displayName

      photoURL

            onAuthStateChanged API (Firebase)
            Use Firebase's auth state listener to detect login/logout automatically.

               Purpose:

               If user is logged in → redirect to /browse

               If user logs out → redirect to /

               This keeps the UI synced with Firebase authentication state.

               Deployment
               Deploy the project to a hosting platform (Firebase Hosting / Vercel / Netlify).z
   ## Update Profile & Bug Fix
      Bug Fix : Sign up user displayname and profile picture update
### Problem
Users should only access pages based on their authentication state.

- If the user is **not logged in** and tries to access `/browse`, they should be redirected to `/`.
- If the user **is logged in** and tries to access `/`, they should be redirected to `/browse`.

---

### Root Cause
Initially, the `onAuthStateChanged` listener was placed inside the **Body** component.

However, navigation using `useNavigate()` caused an error because:

- `useNavigate()` **only works inside components rendered within a Router context**.
- In our app, the router is created inside `Body` using `RouterProvider`.

Because of this, calling `useNavigate()` directly in `Body` resulted in an error.

---

### Solution
Move the `onAuthStateChanged` logic into the **Header component**.

Reason:
- `Header` is rendered **inside the RouterProvider tree**
- Therefore, `useNavigate()` can be safely used there.

This allows us to redirect users depending on their authentication state.

---

### Router Configuration

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
````

---

### Key Concept

`useNavigate()` can **only be used inside components that are rendered within `RouterProvider`.**

So navigation logic should always be placed in components that are part of the router tree (like `Header`, `Login`, `Browse`, etc.).

---

### Result

* Unauthorized users trying to access `/browse` are redirected to `/`.
* Logged-in users trying to access `/` are redirected to `/browse`.

This ensures proper route protection based on authentication state.

```

---

   ## Fetch from TMDB Movies
      - Register TMDB API & cretae an app & get access token
      - Get Data from TMDB now playing movies list api
      - Add api results to our redux store
   ## Create Custom Hooks
      for nowPlayingMovies
      update the store and movies Data
      Planning for MainnConrainer and secondary Container
      Update tStorw ith Trailer Video Data
      Embedded the Youtube video and make it autoplay and mute
      tailwind classes to make it look good
      -Build the Seciondary COntainer
      Build Movie List
      Build Moive Card
      TMDB IMage CDN URL 
      MAde the Broase page amazin with Tailwind CSS
      created gt eeah page
      gpt search bar
      multii langae feature in our app
   - GPt SEarch API Integration
   - fetched gpt movie suggestions from TMDB
   - Reused MovieCard and MovieList components to make movie sugge
   - Memoization
   add .env file
   add .env file to gitignore
### Start from 1:41:14 Building the core

# FEATURES

- Login/Sign Up
  - Sign In/Sign Up Form
  - redirect to Browse Page
  -

- Browse(after authentication)
  - Header
  - Main Movie
    - Trailer in BackGround
    - Title % Description
    - MovieSuggestions
      -MovieLists \* N

# QUERY

- Clear React Routing Concepts
- Z index
- CSS positon
- Redux Store
- Why create Layout and push Head to it
