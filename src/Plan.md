🎬 Plan: Movie Trailer Embed Container
Step 1 — Add the Route in your Router
In your App.js (or wherever your createBrowserRouter / Routes are defined), add a new route:

path: "/movietrailer"
element: <MovieTrailer />
Step 2 — Create the MovieTrailer.js Component
This component will:

Read the movieId from the URL query param using useSearchParams()
Call useMovieTrailer(movieId) (you already have this hook!) to fetch the YouTube trailer key
Render an embedded <iframe> with the YouTube URL using the trailer key
Show a Close / Back button to go back to the previous page
Step 3 — Make Movie Cards Clickable
In your MovieCard.js component:

Wrap the card (or the poster image) with a <Link> or use useNavigate() from React Router
Navigate to: /movietrailer?movieId={id} where id is the movie's TMDB ID
Step 4 — Style the Embed Container
In MovieTrailer.js:

Show a semi-transparent dark overlay behind the embed container (like a modal backdrop)
Center the <iframe> on screen (fixed position, or a dedicated page)
Add a ✕ Close button in the top-right corner that calls navigate(-1) to go back
The iframe URL format is:
https://www.youtube.com/embed/{trailerKey}?autoplay=1
Step 5 — Handle the "No Trailer" Case
If useMovieTrailer returns no trailer key for a given movie, show a fallback message like "Trailer not available" instead of a broken iframe.

Summary Flow
User clicks Movie Card
      ↓
Navigate to /movietrailer?movieId=12345
      ↓
MovieTrailer component reads movieId from URL
      ↓
useMovieTrailer(movieId) fetches YouTube trailer key
      ↓
Renders YouTube <iframe> embed
      ↓
User clicks Close → navigate(-1) → back to Browse/Search
Let me know when you want me to write the code for any of these steps! 🚀

