import { useState } from "react";
import Button from "./Components/Button/button-componet";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world with tailwind!{" "}
      </h1>
      <Button>Button fill</Button>
      <Button variant="secondary">Button with border</Button>
    </div>
  );
}

export default App;
