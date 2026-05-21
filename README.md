# Netflix GPT

## Tech Stack:

- Frontend: TypeScript, React.js, Vite.js, Tailwind CSS, Shadcn UI
- Routing: React Router, React Router DOM
- State Management: React-Redux, Redux Toolkit (RTK)
- Build Tool: Vite.js (Rollup under the hood for production builds)
- Movie Data: TMDB API
- Backend: Firebase Authentication, OpenAI API

### Features:

- Authentication with Firebase
- Form Handling with useRef (uncontrolled components)
- Regex for form validation
- Routing with React Router
- Nullish Coalescing Operator (??) for handling default values
- Firebase Hosting for development and production
- Redux Toolkit for state management
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

- create project using vite.js with React and TypeScript template ✔️
- install Tailwind CSS and configure it with Vite.js ✔️
- set up React Router for routing ✔️
- create form components for user authentication (sign-up and login) ✔️
- form validation for authentication forms using regex ✔️
- useRef for form handling (uncontrolled components) to improve performance ✔️
- set up Firebase Authentication for user management ✔️
- firebase hosting for development and production ✔️
- set up Redux Toolkit for state management ✔️
- route protection with React Router to restrict access to certain routes based on authentication status ✔️

## Routes & API Endpoints:

| Route     | Component | Description                                                                 |
| --------- | --------- | --------------------------------------------------------------------------- |
| `/`       | `Login`   | if user is not authenticated, redirect to login page.........               |
| `/login`  | `Login`   | The login page for user authentication.                                     |
| `/signup` | `Signup`  | The sign-up page for new users to create an account.                        |
| `/browse` | `Browse`  | The main page, displays movie categories and allows users to browse movies. |

## Notes

### Table of Contents

- [Vite.js](#vitejs)
- [Tailwind CSS](#tailwind-css)
- [Routing with React Router](#routing-with-react-router)
- [Regex for form validation](#regex-for-form-validation)
- [useRef for form handling (uncontrolled components)](#useref-for-form-handling-uncontrolled-components)
- [Firebase Authentication](#firebase-authentication)
- [Nullish Coalescing Operator (??)](#nullish-coalescing-operator)
- [React-Redux and Redux Toolkit](#react-redux-and-redux-toolkit)

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

- Different Form Handling Approaches:
  - Controlled Components: In this approach, form data is managed by React state. Each input field is associated with a state variable, and the component re-renders every time the user types something in the input field. This allows for real-time validation and dynamic updates based on user input.
  - Uncontrolled Components: In this approach, form data is managed by the DOM itself. Instead of using state to manage the input values, we can use refs to access the current value of the input fields when needed (e.g., on form submission). This can improve performance, especially in cases where there are many input fields or when the component is complex, as it avoids unnecessary re-renders.

- When to use which approach:
  - Use controlled components when the UI needs to react to input changes, such as live validation, dynamic form fields, or when you want to reset the input value after submission.
  - Use uncontrolled components when you want to access the current value of an input field without causing re-renders, or when you want to manage focus or other DOM-related tasks.

- In this project, we use `useRef` for form handling in the authentication forms to improve performance and avoid unnecessary re-renders while still allowing us to access the current values of the input fields when the user submits the form.

- Libraries like Formik and React Hook Form can also be used for form handling in React applications. These libraries provide additional features and abstractions for managing form state, validation, and submission, making it easier to build complex forms with less boilerplate code.

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
> https://firebase.google.com/docs/auth/web/password-auth#web

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

### Nullish Coalescing Operator (??)

The nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is often used to provide default values for variables that may be null or undefined.

```
const value = someVariable ?? "default value";
```

### React-Redux and Redux Toolkit

- https://react-redux.js.org/
- https://redux-toolkit.js.org/introduction/getting-started
- https://redux-toolkit.js.org/tutorials/typescript

React-Redux is the official React binding for Redux, a predictable state container for JavaScript applications. It provides a way to connect React components to the Redux store, allowing components to access and update the application state.
Redux Toolkit is a set of tools and utilities that simplify the process of writing Redux logic. It provides a standardized way to write Redux code, including actions, reducers, and store configuration. Redux Toolkit includes features like createSlice for creating reducers and actions in a single step, configureStore for setting up the Redux store with good defaults, and createAsyncThunk for handling asynchronous logic in Redux.

- Set up React-Redux and Redux Toolkit in the project to manage application state, such as user authentication status and movie data. This involves creating a Redux store, defining slices for different parts of the state, and connecting React components to the Redux store using the `useSelector` and `useDispatch` hooks provided by React-Redux.
  - Install the necessary dependencies for React-Redux and Redux Toolkit:
    ```
    npm install react-redux @reduxjs/toolkit
    // if using TypeScript, also install the type definitions for React-Redux
    npm install @types/react-redux
    ```
  - Create a Redux store using `configureStore` from Redux Toolkit to manage the application state. This store will hold the state for user authentication, movie data, and any other relevant information.

  ```js
  import { configureStore } from "@reduxjs/toolkit";

  const store = configureStore({
    reducer: {
      // add your reducers here
    },
  });
  // root state means the entire state of the Redux store, which is the combination of all the individual slices of state managed by different reducers. By using ReturnType<typeof store.getState>, we can infer the type of the root state based on the structure of the reducers we have defined in our store configuration. This allows us to have type safety when accessing the state in our React components, ensuring that we are accessing the correct properties and types from the Redux store.
  export type RootState = ReturnType<typeof store.getState>; // Type for the root state of the Redux store
  // AppDispatch is the type for the dispatch function of the Redux store, which is used to dispatch actions to update the state. By using typeof store.dispatch, we can infer the type of the dispatch function based on the configuration of our Redux store. This allows us to have type safety when dispatching actions in our React components, ensuring that we are dispatching the correct actions with the correct payloads.
  export type AppDispatch = typeof store.dispatch; // Type for the dispatch function of the Redux store
  export default store;
  ```

  - Create a `hooks.ts` file to define typed versions of the `useDispatch` and `useSelector` hooks for use throughout the application. This ensures type safety when dispatching actions and selecting state from the Redux store in React components.

  ```js
  import { useDispatch, useSelector } from "react-redux";
  import type { AppDispatch, RootState } from "./store";
  export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  export const useAppSelector = useSelector.withTypes<RootState>();
  ```

  - Define slices of state using `createSlice` from Redux Toolkit to manage specific parts of the application state, such as user authentication and movie data. Each slice will include its own reducer logic and actions for updating that slice of state.

  ```js
  import { createSlice } from "@reduxjs/toolkit";
  import type { PayloadAction } from "@reduxjs/toolkit";

  const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        addUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload; // Update the user state with the payload from the dispatched action
        },
        removeUser: (state) => {
            state.user = null; // Clear the user state when removing the user
        },
      },
    });

    export const {addUser, removeUser} = userSlice.actions; // Export the generated action creators for use in components
    export default userSlice.reducer; // Export the generated reducer function for use in the Redux store
  ```

  - Add the reducers from the slices to the Redux store configuration to combine them into a single root reducer.

  ```js
  import { configureStore } from "@reduxjs/toolkit";
  import userReducer from "./reducer-actions/userSlice"; // Import the user slice reducer

  const store = configureStore({
    reducer: {
      user: userReducer, // Add the user slice reducer to the root reducer
    },
  });

  export default store;
  ```

  - Provide the Redux store to the React application using the `Provider` component from React-Redux. This allows any component in the application to access the Redux store and dispatch actions.

  ```js
  import { Provider } from "react-redux";
  import store from "./utils/store"; // Import the configured Redux store
  function App() {
    return (
      <Provider store={store}>
        {/* Your application components go here */}
      </Provider>
    );
  }
  ```

  - Connect React components to the Redux store using the `useSelector` hook to access state and the `useDispatch` hook to dispatch actions. This allows components to read data from the Redux store and update the state in response to user interactions or other events.

  ```js
  import { useAppSelector, useAppDispatch } from "../utils/hooks";
  import { addUser, removeUser } from "../reducer-actions/userSlice";
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user); // Access the user state from the Redux store
  // To update the user state, you can dispatch the addUser
  dispatch(addUser({ name: "John Doe", email: "john.doe@example.com" }));
  ```

  - Adding user after successful login and removing user after logout to manage authentication state across the application.

  ```js
  import { useAppSelector, useAppDispatch } from "../utils/hooks";
  import { addUser, removeUser } from "../reducer-actions/userSlice";
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    // validate user
    const res = validateUser(email, password);
    if (res.success) {
      dispatch(addUser(res.user)); // Add user to the Redux store after successful login
    } else {
      dispatch(removeUser()); // Remove user from the Redux store on logout or failed login
    }
  };
  ```

[Back to top](#Table-of-Contents)

### Protected Routes with React Router

- when user is not authenticated, redirect to login page
- when user is authenticated, allow access to protected routes (e.g., browse page)
- after successful login or signup & once user is redirected to browse page, if user hits / or /login or /signup, redirect to browse page since user is already authenticated

### Best Practices

- Unsubscribing listeners in useEffect cleanup to prevent memory leaks and unintended side effects when components unmount or dependencies change.
