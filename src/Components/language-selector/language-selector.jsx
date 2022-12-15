import { useContext } from "react";
import { languageOptions } from "../../languages/language-frame";
import { LanguageContext } from "../../contexts/language-context/language-context";
import Dropdown from "../Dropdown/dropdown";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const languages = Object.entries(languageOptions);

  const handleLanguageChange = lang => {
    userLanguageChange(lang);
  };

  return (
    <Dropdown
      selected={userLanguage}
      setSelected={handleLanguageChange}
      optionsToSelect={languages}
    />
  );
}
