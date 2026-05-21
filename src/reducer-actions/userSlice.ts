import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a concrete User type to avoid using `any`.
// Extend as needed to match your actual user shape.
export interface User {
  id?: string;
  name?: string | null;
  email?: string | null;

  // allow additional properties while keeping types safe
  [key: string]: unknown;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null, // Initial state with no user
};

const userSlice = createSlice({
  // The name of the slice, used as a prefix for generated action types
  name: "user",
  // The initial state of the slice
  initialState,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    // A reducer to add a user to the state. The action payload should contain the user data.
    addUser: (state, action: PayloadAction<User | null>) => {
      // Update the state's user property with the new user data
      state.user = action.payload;
    },
    // A reducer to remove the user from the state, effectively logging them out.
    removeUser: (state) => {
      // Reset the state's user property to null, indicating no user is logged in
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions; // Export the generated action creators for use in components
export default userSlice.reducer; // Export the generated reducer function for use in the Redux store
