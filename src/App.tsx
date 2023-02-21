import "./App.css";

import React from "react";
import { Toggle } from "./components/toggle";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { GetInTouch } from "./pages/GetInTouch";
import { DSite } from "./pages/DSite";

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

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
      <div className="body-1">
        {localStorage.getItem("data-theme") === "light" ? (
          <IoSunny />
        ) : (
          <IoMoon />
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
          <div className="flex justify-between px-16 py-4 absolute w-full">
            <Link className="subtitle link" to="/">
              • Donnie's Awesome Website
            </Link>
            <div className="flex gap-10">
              <div className="flex flex-row gap-4 body-2 font-semibold bg-transparent items-center">
                <Link className="body-1" to="/">
                  Home
                </Link>
                <Link className="body-1" to="/getintouch">
                  Get in touch
                </Link>
                <Link className="body-1" to="/work/this-site">
                  This Site
                </Link>
              </div>
              {toggle}
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getintouch" element={<GetInTouch />} />
            <Route path="/work/this-site" element={<DSite />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
