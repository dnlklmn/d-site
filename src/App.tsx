import "./App.css";

import React from "react";
import { Toggle } from "./components/toggle";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { GetInTouch } from "./pages/GetInTouch";
import { DSite } from "./pages/DSite";

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { Works } from "./pages/Works";

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
  // const [, rerenderSwitch] = React.useState("");
  const [toggleDirection, setToggleDirection] = React.useState(
    localStorage.getItem("data-theme") === "light" ? 16 : 0
  );

  const [selectedNav, setSelectedNav] = React.useState("");

  const toggleOn = () => {
    setToggleDirection(toggleDirection === 16 ? 0 : 16);
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      setTheme("light");
      // rerenderSwitch("light");
    } else {
      setTheme("dark");
      // rerenderSwitch("dark");
    }
  };

  const toggle = (
    <div className="toggle-container">
      <div className="body-1">
        {localStorage.getItem("data-theme") === "light" ? (
          <IoSunny fill="var(--fg-contrast)" />
        ) : (
          <IoMoon fill="var(--fg-contrast)" />
        )}
      </div>
      <Toggle onTap={toggleOn} toggleDirection={toggleDirection} />
    </div>
  );

  return (
    <div
      className="App flex flex-col gap-28 "
      data-theme={localStorage.getItem("data-theme")}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Inter:wght@400;500;700&display=swap');
      </style>

      <div className="h-screen w-screen overflow-scroll bg-gradient-to-tr from-[color:var(--bg-gradient-1)] to-[color:var(--bg-gradient-2)]">
        <Router>
          <div className="flex justify-between px-16 py-4 absolute w-full items-center">
            <Link
              className="subtitle link"
              to="/"
              onClick={() => setSelectedNav("home")}
            >
              • Donnie's Awesome Website
            </Link>
            <div className="flex gap-10">
              <div className="flex flex-row body-2 text-[color:var(--fg-contrast)] font-semibold bg-transparent items-center ">
                <Link
                  className={`body-1 px-3 py-2 rounded-md ${
                    selectedNav === "works"
                      ? `bg-[color:rgba(0,0,0,0.1)]`
                      : null
                  }`}
                  to="/works"
                  onClick={() => setSelectedNav("works")}
                >
                  Works
                </Link>
                <Link
                  className={`body-1 px-3 py-2 rounded-md ${
                    selectedNav === "thisSite"
                      ? `bg-[color:rgba(0,0,0,0.1)]`
                      : null
                  }`}
                  to="/works/this-site"
                  onClick={() => setSelectedNav("thisSite")}
                >
                  This Site
                </Link>
                <Link
                  className={`body-1 px-3 py-2 rounded-md ${
                    selectedNav === "getInTouch"
                      ? `bg-[color:rgba(0,0,0,0.1)]`
                      : null
                  }`}
                  to="/getintouch"
                  onClick={() => setSelectedNav("getInTouch")}
                >
                  Get in touch
                </Link>
              </div>
              {toggle}
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getintouch" element={<GetInTouch />} />
            <Route path="/works/this-site" element={<DSite />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
