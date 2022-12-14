import { useContext } from "react";
import { languageOptions } from "../../languages/language-frame";
import { LanguageContext } from "../../contexts/language-context/language-context";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectUnstyled from "@mui/material/Select";
import English from "../../Images/english.png";
import Spanish from "../../Images/spanish.png";
import "./language-selector.css";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = e => {
    userLanguageChange(e.target.value);
  };

  return (
    <SelectUnstyled
      sx={{ borderColor: "white", color: "white" }}
      id="select-nav"
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      <MenuItem value="es">
        <img src={Spanish} alt="" />
      </MenuItem>
      <MenuItem value="en">
        <img src={English} alt="" />
      </MenuItem>
    </SelectUnstyled>
  );
}
