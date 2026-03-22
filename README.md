# 🎬 Netflix GPT

A Netflix-inspired streaming UI supercharged with **AI-powered movie recommendations** using Groq LLM and the TMDB API. Built with React, Redux Toolkit, Firebase, and Tailwind CSS.

<p align="center">
  <img src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg" alt="Netflix GPT Banner" width="100%" />
</p>

---

## ✨ Features

- 🔐 **Firebase Authentication** — Sign up, log in, and log out securely
- 🎥 **Movie Browsing** — Now Playing, Popular, Top Rated, and Upcoming movies via TMDB
- 🤖 **GPT-Powered Search** — Ask in natural language and get AI-curated movie recommendations
- 🌐 **Multi-language Support** — UI available in English, Hindi, and Spanish
- 📱 **Fully Responsive** — Mobile-first design that looks great on all screen sizes
- 🎞️ **Video Backgrounds** — Auto-playing trailers on the browse page
- 🗂️ **Redux State Management** — Centralized store for movies, user, GPT results & language config

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 19, React Router v7 |
| Styling | Tailwind CSS v3, Lucide Icons |
| State Management | Redux Toolkit, React Redux |
| AI / LLM | Groq SDK (`openai/gpt-oss-120b`) |
| Movie Data | TMDB (The Movie Database) API |
| Auth & Backend | Firebase (Auth + Analytics) |
| Deployment | Firebase Hosting |

---

## 📁 Project Structure

```
netflix-gpt/
├── public/
├── src/
│   ├── components/
│   │   ├── Body.js               # Root router setup
│   │   ├── Browse.js             # Main browse page with movie lists
│   │   ├── Head.js               # Navbar with language switcher & sign out
│   │   ├── Login.js              # Sign in / Sign up form
│   │   ├── MainContainer.js      # Hero section with video background
│   │   ├── VideoTitle.js         # Movie title & CTA overlay
│   │   ├── VideoBackGround.js    # YouTube trailer embed
│   │   ├── SecondaryMaintainer.js# Secondary movie list rows
│   │   ├── MovieList.js          # Horizontal scrollable movie list
│   │   ├── MovieCard.js          # Individual movie card with poster
│   │   ├── GptSearch.js          # GPT search page wrapper
│   │   ├── GptSearchBar.js       # AI-powered search input & handler
│   │   └── GptMovieSuggestions.js# Renders AI-recommended movies
│   ├── hooks/
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   ├── useUpcomingMovies.js
│   │   └── useMovieTrailer.js
│   └── utils/
│       ├── appStore.js           # Redux store
│       ├── moviesSlice.js        # Movies state slice
│       ├── userSlice.js          # User auth state slice
│       ├── gptSlice.js           # GPT results state slice
│       ├── configSlice.js        # Language config slice
│       ├── constants.js          # API keys, CDN URLs, supported languages
│       ├── languageConstants.js  # i18n strings
│       ├── openai.js             # Groq client setup
│       ├── firebase.js           # Firebase initialization
│       └── Validate.js           # Form validation helpers
├── tailwind.config.js
├── firebase.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- A [TMDB API](https://www.themoviedb.org/documentation/api) account and Bearer token
- A [Groq](https://console.groq.com/) API key
- A [Firebase](https://console.firebase.google.com/) project

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt

# 2. Install dependencies
npm install

# 3. Configure your environment
#    Update src/utils/constants.js with your TMDB Bearer token & Groq API key
#    Update src/utils/firebase.js with your Firebase project config

# 4. Start the development server
npm start
```

The app will be available at `http://localhost:3000`.

---

## ⚙️ Configuration

All API credentials are stored in `src/utils/constants.js` and `src/utils/firebase.js`.

> **⚠️ Security Warning:** Never commit real API keys to a public repository. Move credentials to environment variables using a `.env` file.

```env
# .env (recommended approach)
REACT_APP_TMDB_TOKEN=your_tmdb_bearer_token
REACT_APP_GROQ_API_KEY=your_groq_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
```

---

## 🌐 Multi-language Support

The app supports switching the UI language between:

| Language | Identifier |
|---|---|
| English | `en` |
| Hindi | `hindi` |
| Spanish | `spanish` |

Language strings are managed in `src/utils/languageConstants.js`.

---

## 🤖 How GPT Search Works

1. User types a natural language query (e.g., *"romantic movies set in Paris"*)
2. The query is sent to Groq's LLM (`openai/gpt-oss-120b`) wrapped in a movie recommendation prompt
3. The model returns 5 movie names as a comma-separated list
4. Each movie is searched on TMDB to fetch poster, rating, and metadata
5. Results are stored in Redux and displayed as scrollable movie rows

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App |

---

## 🔥 Deployment

This project is configured for **Firebase Hosting**.

```bash
# Build the production bundle
npm run build

# Deploy to Firebase
firebase deploy
```

---

## 📄 License

This project is for educational purposes. Movie data is provided by [TMDB](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.

---

<p align="center">Made with ❤️ using React & Groq AI</p>
