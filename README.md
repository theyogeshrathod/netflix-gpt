# Netflix GPT

- Created empty react app
- Configured TailwindCSS
- Added Header component
- Added routing to the app
- Added Login form
- Added Sign Up form
- Added form validations
- Added useRef hook
- Did firebase setup
- Deployed app to production - (somehow it is not working due to security issues)
- Added Sign up user account flow
- Implemented sign in user API
- Created user redux store with user slice
- Shown user dp on header
- Handled logged in and logged out user scenario
- Unsubscribed to the onAuthStateChanged callback when header unmounts
- Added hard coded values to the constant file
- Registered for TMDB API
- Added Get data from TMDB Now Playing movies API
- Created custom hook for now playing movies
- Created movie slice
- Updated store with movies data
- Created UI for main container and secondary container
- Updated store with trailer video data
- Embedded YouTube video and made it autoplay and mute
- Added tailwind classes to make the main container look awesome
- Built movie list
- Built movie card
- Added TMDB CDN urls
- Added hooks to fetch trending and top rated movie data
- Added secondary container with now playing, trending and top rated movie cards

# Features

- Login / Sigh Up
  - Sign in / Sign up form
  - Redirect to browse page
- Browse
  - Header
  - Main movie
    - Trailer playing in background
    - Title & description
    - Movie suggestions
      - MovieLists \* N
- NetflixGpt
  - Search bar
  - Movie suggestions
