# Netflix GPT

## Tech Stack:

Frontend: TypeScript, React.js, Vite.js, Tailwind CSS
Routing: React Router, React Router DOM
Build Tool: Vite.js (Rollup under the hood for production builds)
Backend: Firebase Authentication, OpenAI API

### Features:

- Authentication with Firebase
- Form Handling
- Routing with React Router
- GPT Integration (OpenAI API)

1. Authentication with Firebase: Users can sign up and log in using their email and password. Firebase Authentication provides a secure and easy way to manage user authentication. Protected routes ensure that only authenticated users can access certain parts of the application.
2. Form Handling: The application includes forms for user registration and login. Form validation is implemented to ensure that users provide valid input before submitting the forms. This enhances the user experience and helps prevent errors.
3. GPT Integration: The application integrates with the OpenAI API to provide seamless interaction with the GPT model, allowing users to ask questions and receive intelligent responses.

## Application Structure:

- User Authentication:
  - Sign-up and login forms
  - Firebase Authentication integration
  - Protected routes for authenticated users
  - redirect to login page if user is not authenticated
  - redirect to home page after successful login
- Browse page (home page) after authentication
  - Header with logo and navigation links
  - Hero Section with a main movie banner and a call-to-action button
    - Trailer in background with overlay (e.g., "Watch Now" button)
    - Title and description of the movie
    - Call-to-action button (e.g., "Watch Now")
  - Movie Categories (e.g., "Trending Now", "Top Rated", "Action Movies")
    - Each category displays a horizontal scrollable list of movies
    - Each movie item includes a poster image, title, and rating
  - Movie Details Page
    - When a user clicks on a movie item, they are taken to a details page
    - The details page includes a larger poster image, title, description, release date, and rating
    - A "Watch Trailer" button that opens a modal with the movie trailer - GPT Integration
    - A section for user reviews and ratings
  - GPT Integration
    - search bar for users to ask questions about movies, actors, or genres
    - movie recommendations based on user queries
    - A chat interface where users can ask questions about movies, actors, or genres
    - The GPT model provides intelligent responses based on the user's queries
    - Example queries: "What are some good action movies?", "Who stars in Inception?", "What is the plot of The Matrix?"

### Development Setup:

- create project using vite.js with React and TypeScript template
- install Tailwind CSS and configure it with Vite.js
- set up React Router for routing
- create form components for user authentication (sign-up and login)

## Notes

### Table of Contents

- [Vite.js](#vitejs)
- [Tailwind CSS](#tailwind-css)
- [Routing with React Router](#routing-with-react-router)

### Vite.js

- https://vitejs.dev/guide/

> created project using Vite.js,

    ```npm create vite@latest netflix-gpt -- -- template react-ts```

- a build tool that provides a fast development environment for modern web projects.
- has a dev server that supports hot module replacement (HMR) for a smooth development experience.
- has a build command that optimizes the application for production.
- build command bundles the application using Rollup, which is a powerful module bundler that can handle various types of assets and dependencies.
- npm dependency resolving and pre-bundling for faster development builds.
- HMR (Hot Module Replacement) for instant updates during development without a full page reload.
- supports TypeScript out of the box, making it easier to build type-safe applications.

### Tailwind CSS

- https://tailwindcss.com/docs/installation/using-vite

  ```
  npm install tailwindcss @tailwindcss/vite

  // Then, add Tailwind CSS to your Vite configuration file (vite.config.ts):
  import tailwindcss from "@tailwindcss/vite";

  export default defineConfig({
    plugins: [react(), tailwindcss()],
  });

  // import Tailwind CSS in your main CSS file (e.g., index.css): @import "tailwindcss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- used for styling, offering a utility-first approach to design.

[Back to top](#Table-of-Contents)

### Routing with React Router

- https://reactrouter.com/en/main

  `npm install react-router-dom`

- React Router is used for client-side routing, allowing for a seamless navigation experience without full page reloads. It provides a declarative way to define routes and manage navigation within the application.

Firebase Authentication is implemented for user management, and the OpenAI API is integrated to enable GPT functionality within the application.
