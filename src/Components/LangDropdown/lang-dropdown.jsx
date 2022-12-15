import { useState } from "react";
import esImg from "../../Images/es.png";
import enImg from "../../Images/en.png";
import "./lang-dropdown.css";

const LanguageDropdown = ({ language, setLanguage }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const selectedImg =
    language == "es" ? <img src={esImg} /> : <img src={enImg} />;

  const handleOptionClick = option => {
    setLanguage(option);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const englishOption = (
    <div className="dropdown-item" onClick={() => handleOptionClick("en")}>
      <img src={enImg} />
    </div>
  );

  const spanishOption = (
    <div className="dropdown-item" onClick={() => handleOptionClick("es")}>
      <img src={esImg} />
    </div>
  );

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        {selectedImg}
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          {language == "es" ? englishOption : spanishOption}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
