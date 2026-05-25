import { createSlice } from "@reduxjs/toolkit";

// Supported language codes
export type LanguageCode = "en" | "hi" | "ne" | "zh" | "es";

const initialState: { lang: LanguageCode } = {
  lang: "en",
};

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = appConfigSlice.actions;
export default appConfigSlice.reducer;
