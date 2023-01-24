import "./App.css";
import "./theme/light.css";
import "./theme/dark.css";
import React from "react";
import { Toggle } from "./components/toggle";

function setTheme(themeName: string) {
  localStorage.setItem("data-theme", themeName);
  document.documentElement.setAttribute("data-theme", themeName);
}

(function () {
  if (localStorage.getItem("data-theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
})();

function App() {
  const [, rerenderSwitch] = React.useState("");

  const [toggleDirection, setToggleDirection] = React.useState(20);
  const toggleOn = () => {
    setToggleDirection(toggleDirection === 20 ? 0 : 20);
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      setTheme("light");
      rerenderSwitch("light");
    } else {
      setTheme("dark");
      rerenderSwitch("dark");
    }
  };
  return (
    <div className="App" data-theme={localStorage.getItem("data-theme")}>
      <header className="App-header">
        Donnie's Site
        <div className="toggle-container">
          <span className="label">
            {localStorage.getItem("data-theme") === "light" ? "Day" : "Night"}
          </span>
          <Toggle onTap={toggleOn} toggleDirection={toggleDirection} />
        </div>
      </header>
      <main>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
