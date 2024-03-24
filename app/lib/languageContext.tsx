import React from "react";
import { i18n } from "./i18n";

type Language = "ru" | "en";
type State = {
  language: Language;
  i18n: any;
};

type LanguageContext = {
  state: State;
  changeLanguage: () => {};
};

const LanguageContext = React.createContext(undefined);

const selectLanguage = (leng: string) => {
  return leng === "ru" ? "en" : "ru";
};

const change = (
  state: State,
  setState: React.Dispatch<React.SetStateAction<State>>
) => {
  return setState({ ...state, language: selectLanguage(state.language) });
};

const initialState: State = {
  language: "ru",
  i18n: i18n,
};

export const ProviderLanguageContext = ({ children }) => {
  const [state, setLanguage] = React.useState(initialState);

  const changeLanguage = () => {
    change(state, setLanguage);
  };

  i18n.locale = state.language;

  return (
    <LanguageContext.Provider value={{ state, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguageContext() {
  const state = React.useContext(LanguageContext);

  if (state === undefined) {
    throw new Error("useLanguageContext must be used with a LanguageContext");
  }

  return state;
}
