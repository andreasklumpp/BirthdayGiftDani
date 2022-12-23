import React, { useState } from "react";
import "./App.scss";
import { Fireworks } from "./components/fireworks/fireworks";
import { Keyboard } from "./components/keyboard/keyboard";
import escape_room_logo from "./assets/escape_room_logo.jpeg";

function App() {
  const [value, setValue] = useState("_ _ _ _");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [solved, setSolved] = useState(false);

  const solution = "2412";

  const handleButtonClick = (selectedNumber: string) => {
    const code = `${value}${selectedNumber}`;
    setValue(code);

    if (code === solution) {
      // do something
      setSolved(true);
      setIsFadingOut(true);
      return;
    }

    setSolved(false);

    if (code.length === solution.length && code !== solution) {
      setValue("_ _ _ _");
    }

    if (code.length > solution.length) {
      setValue(selectedNumber);
    }
  };

  return (
    <div className="App">
      {solved ? <Fireworks /> : null}
      {solved ? (
        <img
          className="exitGamesLogo"
          src={escape_room_logo}
          alt="Logo exit games stuttgart"
        />
      ) : (
        <div className={`wrapper ${isFadingOut ? "fadeOut" : ""}`}>
          <div className="header">
            <div className="code">{value}</div>
            <div className={`indicator ${solved ? "correct" : "false"}`}></div>
          </div>
          <Keyboard handleButtonClick={handleButtonClick} />
        </div>
      )}
    </div>
  );
}

export default App;
