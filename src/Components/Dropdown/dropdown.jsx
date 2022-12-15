import { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ selected, setSelected, optionsToSelect }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = option => {
    setSelected(option);
    setIsActive(false);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={toggleActive}>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {optionsToSelect.map(([langId, name]) => (
            <div
              key={langId}
              onClick={() => handleOptionClick(langId)}
              className="dropdown-item"
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
