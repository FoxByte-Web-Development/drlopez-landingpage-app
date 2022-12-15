import { useContext } from "react";
import { LanguageContext } from "../../contexts/language-context/language-context";
import LanguageDropdown from "../LangDropdown/lang-dropdown";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = lang => {
    userLanguageChange(lang);
  };

  return (
    <LanguageDropdown
      language={userLanguage}
      setLanguage={handleLanguageChange}
    />
  );
}
