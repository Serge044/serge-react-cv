import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage(state) {
      state.language = state.language === "en" ? "uk" : "en";
      localStorage.setItem("language", state.language);
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.language;

export default languageSlice.reducer;
