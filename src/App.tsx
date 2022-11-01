import React, { useState } from "react";
import "./App.css";
import { Keyboard } from "./components/keyboard/keyboard";

function App() {
  const [value, setValue] = useState("");
  const [solved, setSolved] = useState(false);

  const solution = "96235";

  const handleButtonClick = (selectedNumber: string) => {
    const code = `${value}${selectedNumber}`;
    setValue(code);

    if (code === solution) {
      // do something
      setSolved(true);
      return;
    }

    setSolved(false);

    if (code.length > solution.length) {
      setValue(selectedNumber);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="code">{value}</div>
          <div className={`indicator ${solved ? "correct" : "false"}`}></div>
        </div>
        <Keyboard handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
