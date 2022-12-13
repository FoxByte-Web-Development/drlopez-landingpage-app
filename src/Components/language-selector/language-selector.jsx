import { useContext } from "react";
import { languageOptions } from "../../languages/language-frame";
import { LanguageContext } from "../../contexts/language-context/language-context";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = e => {
    userLanguageChange(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
