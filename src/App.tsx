import "./App.css";

import React from "react";
import { Toggle } from "./components/toggle";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { GetInTouch } from "./pages/GetInTouch";
import { DSite } from "./pages/DSite";
import { Navbar } from "./components/navbar";

// icons: https://react-icons.github.io/react-icons/icons?name=io5

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
    localStorage.getItem("data-theme") === "light" ? 16 : 0
  );

  const toggleOn = () => {
    setToggleDirection(toggleDirection === 16 ? 0 : 16);
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      setTheme("light");
      rerenderSwitch("light");
    } else {
      setTheme("dark");
      rerenderSwitch("dark");
    }
  };

  const toggle = (
    <div className="toggle-container">
      <span className="label">
        {localStorage.getItem("data-theme") === "light"
          ? "Lights On"
          : "Lights Off"}
      </span>
      <Toggle onTap={toggleOn} toggleDirection={toggleDirection} />
    </div>
  );

  return (
    <div
      className="App flex flex-col gap-28"
      data-theme={localStorage.getItem("data-theme")}
    >
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
                  <div className="flex flex-row gap-10">
                    <Navbar />
                    {toggle}
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
                  {toggle}
                </header>
                <GetInTouch />
              </>
            }
          />
          <Route
            path="/work/this-site"
            element={
              <>
                <header className="App-header">
                  <Link className="h5 link" to="/">
                    <span>{`\u2190`} Back</span>
                  </Link>
                  {toggle}
                </header>
                <DSite />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
