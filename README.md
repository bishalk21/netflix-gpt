# Netflix GPT

## Tech Stack:

Frontend: TypeScript, React.js, Vite.js, Tailwind CSS, Shadcn UI
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
  - Sign-up and login forms ✔️
  - Firebase Authentication integration ✔️
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
- form validation for authentication forms
- useRef for form handling (uncontrolled components) to improve performance
- set up Firebase Authentication for user management
- firebase hosting for development and production

## Notes

### Table of Contents

- [Vite.js](#vitejs)
- [Tailwind CSS](#tailwind-css)
- [Routing with React Router](#routing-with-react-router)
- [Regex for form validation](#regex-for-form-validation)
- [useRef for form handling (uncontrolled components)](#useref-for-form-handling-uncontrolled-components)
- [Firebase Authentication](#firebase-authentication)

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
- `createBrowserRouter` is used to define the application's routes, and `RouterProvider` is used to provide the routing context to the application. This setup allows for easy navigation between different pages, such as the login page, home page, and movie details page.

### Regex for form validation

- Regular expressions (regex) are used for form validation to ensure that user input meets specific criteria. For example, regex can be used to validate email addresses, passwords, and other form fields. This helps improve the user experience by providing immediate feedback on invalid input and preventing form submission until the input is valid.
  ```
  // Example regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Example regex for password validation (at least 8 characters, one uppercase letter, one lowercase letter, and one number)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  ```

### useRef for form handling (uncontrolled components)

- https://react.dev/reference/react/useRef
- We can manage the input values in react either by using state or by using refs.
- If useState is used, then input field is controlled component and every time the user types something in the input field, the component will re-render, which can lead to performance issues if there are many input fields or if the component is complex.
- If useRef is used, then it creates reference to the input field and we can access the current value of the input field without causing a re-render. This can improve performance, especially in cases where there are many input fields or when the component is complex.
- The `useRef` hook is a powerful tool for managing mutable values that persist across renders without causing re-renders when they change. In the context of form handling, `useRef` can be used to create references to form elements, allowing us to access their current values directly from the DOM. This is particularly useful for handling uncontrolled components, where the form data is not managed by React state but instead accessed directly from the DOM elements. By using `useRef`, we can efficiently manage form inputs and handle form submissions without unnecessary re-renders, improving performance and user experience.
- use useState when UI depends on the input value, need live validation, or want to reset the input value after submission or need reactive updates based on input changes.
- use useRef when you want to access the current value of an input field without causing re-renders, or when you want to manage focus or other DOM-related tasks.

  ```
  const nameRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value ?? "";
    console.log(name);
    // ref.current gives us access to the DOM element, and .value gives us the current value of the input field. The nullish coalescing operator (??) is used to provide a default value of an empty string if nameRef.current is null or undefined.
    // handle authentication logic here
  };

  <input
    type="text"
    id="name"
    name="name"
    ref={nameRef}
  />
  ```

### Firebase Authentication

> https://firebase.google.com/docs/auth/web/start

Firebase Authentication is a service provided by Firebase that allows developers to easily add authentication and user management features to their applications. It supports various authentication methods, including email/password, phone number, and third-party providers like Google, Facebook, and Twitter. Firebase Authentication provides a secure and scalable way to manage user authentication and can be easily integrated with other Firebase services.

- Setup Firebase Authentication in the project and create a new project in the Firebase console.
- Add Google Analytics to the project for tracking user interactions and behavior within the application.
- choose web as the platform and follow the instructions to register the app and add Firebase to the project.
- set firebase hosting to localhost:5173 for development and deploy to Firebase Hosting for production. this will allow us to serve our React application from Firebase's hosting service, which provides fast and secure hosting for web applications. During development, we can use the local development server provided by Vite.js, and when we're ready to deploy, we can build the application and deploy it to Firebase Hosting for production use.
- install Firebase SDK and set up authentication in the React application. This involves initializing Firebase in the project, creating authentication functions for signing up and logging in users, and protecting routes that require authentication.
  ```
  npm install firebase
  ```
- create a firebaseConfig.ts file to store the Firebase configuration and initialize Firebase in the project.
- enable authentication methods in the Firebase console, such as email/password authentication, and configure the necessary settings for each method.
  ```
  > go to Authentication > Sign-in method in the Firebase console
  > enable Email/Password authentication
  > save changes
  ```
- can add additional authentication methods like Google, Facebook, etc. by enabling them in the Firebase console and following the setup instructions for each provider.
- install Firebase CLI globally to manage Firebase projects and deploy the application to Firebase Hosting.
  ```
  npm install -g firebase-tools
  ```
- run `firebase login` to log in to your Firebase account and `firebase init` to initialize Firebase in your project. During the initialization process, select the features you want to use (e.g., Hosting, Authentication) and follow the prompts to set up your project.
- to deploy the application to Firebase Hosting, run `firebase deploy`. This will build the application and upload it to Firebase Hosting, making it accessible to users via the provided URL.

  ```
  firebase login
  // if problems with login, try firebase login --reauth
  firebase init
  // select Hosting and Authentication features
  Setup deployment for static web apps
  // select the project you created in the Firebase console
  What do you want to use as your public directory? dist // this is the output directory for Vite.js builds and build if using create-react-app
  Configure as a single-page app (rewrite all urls to /index.html)? no (since we are using React Router for routing)
  Set up automatic builds and deploys with GitHub? no (optional, can set up later if needed)
  Would you like to install agent skills for Firebase? no (optional, can set up later if needed) Yes (optional, can set up later if needed)

  // before deploying, make sure to build the application for production using Vite.js
  npm run build
  ```

- After initializing Firebase, you can run `firebase serve` to start a local development server that serves your application from Firebase Hosting. This allows you to test your application in an environment that closely resembles production.

[Back to top](#Table-of-Contents)
