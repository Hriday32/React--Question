import { useContext, useState } from "react";
import { createContext } from "react";

const localizationContext = createContext();

export const useLocalization = () => {
  return useContext(localizationContext);
};

export function LocalizationProvider({ children }) {
  const [locale, setlocale] = useState("en");

  const localization = {
    en: {
      greeting: "Hello World!",
      Welcome: "Welcome to my app.",
    },
    es: {
      greeting: "Hola mundo",
      Welcome: "Bienvenido a mi aplicación",
    },
  };

  const translate = (key) => {
    return localization[locale][key];
  };

  return (
    <localizationContext.Provider value={{ setlocale, locale, translate }}>
      {children}
    </localizationContext.Provider>
  );
}
