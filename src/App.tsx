import React, { useState } from "react";
import "./App.scss";
import { Fireworks } from "./components/fireworks/fireworks";
import { Keyboard } from "./components/keyboard/keyboard";

function App() {
  const [value, setValue] = useState("_ _ _ _ _");
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

    if (code.length === solution.length && code !== solution) {
      setValue("_ _ _ _ _");
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
          src="https://www.exitgames-stuttgart.de/wp-content/uploads/2018/07/181030_ExitGames_Stuttgart_Logo_Umgewandelt_CMYK_Kontur.svg"
          alt="Logo exit games stuttgart"
        />
      ) : (
        <div className="wrapper">
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
