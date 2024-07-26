//Create a localization system using use context to provide translation for the entire App.

import React from "react";
import { useLocalization } from "./LocalizationContext";

const Question26 = () => {
  const { setlocale, locale, translate } = useLocalization();
  console.log(locale);

  const handleLocalChange = (newLocale) => {
    setlocale(newLocale);
  };

  return (
    <div>
      <h1>{translate("greeting")}</h1>
      <h1>{translate("Welcome")}</h1>

      <button onClick={() => handleLocalChange("en")}>English</button>
      <button onClick={() => handleLocalChange("es")}>Espanol</button>
    </div>
  );
};

export default Question26;
