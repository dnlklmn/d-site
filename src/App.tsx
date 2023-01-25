import "./App.css";
import "./theme/semantic/typography-semantic.css";
import "./theme/semantic/components.css";

import "./theme/light.css";
import "./theme/dark.css";
import "./theme/typography.css";
import React from "react";
import { Toggle } from "./components/toggle";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { GetInTouch } from "./pages/GetInTouch";

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
  const [toggleDirection, setToggleDirection] = React.useState(
    localStorage.getItem("data-theme") === "light" ? 20 : 0
  );

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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;700&display=swap');
      </style>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="App-header">
                  <span className="h5">Donnie's Awesome Website</span>

                  <div className="toggle-container">
                    <span className="label">
                      {localStorage.getItem("data-theme") === "light"
                        ? "Lights On"
                        : "Lights Off"}
                    </span>
                    <Toggle
                      onTap={toggleOn}
                      toggleDirection={toggleDirection}
                    />
                  </div>
                </header>
                <Home />
              </>
            }
          />
          <Route
            path="/getintouch"
            element={
              <>
                <header className="App-header">
                  <Link className="h5 link" to="/">
                    <span>{`\u2190`} Back</span>
                  </Link>
                  <div className="toggle-container">
                    <span className="label">
                      {localStorage.getItem("data-theme") === "light"
                        ? "Lights On"
                        : "Lights Off"}
                    </span>
                    <Toggle
                      onTap={toggleOn}
                      toggleDirection={toggleDirection}
                    />
                  </div>
                </header>
                <GetInTouch />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
