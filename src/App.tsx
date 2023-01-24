import "./App.css";
import "./theme/light.css";
import "./theme/dark.css";
import React from "react";
import { Toggle } from "./components/toggle";
import { FloatingThumbnail } from "./components/floating-thumbnail";
import { FloaterArea } from "./components/floater-area";

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

  const [mouseX, setMouseX] = React.useState({});
  const [mouseY, setMouseY] = React.useState({});
  React.useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMouseX(String(event.clientX));
      setMouseY(String(event.clientY));
    };

    console.log(mouseX, mouseY);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App" data-theme={localStorage.getItem("data-theme")}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@400;500;700&display=swap');
      </style>
      <header className="App-header">
        <span className="h5">Donnie's Site</span>
        <div className="toggle-container">
          <span className="label">
            {localStorage.getItem("data-theme") === "light" ? "Day" : "Night"}
          </span>
          <Toggle onTap={toggleOn} toggleDirection={toggleDirection} />
        </div>
      </header>
      <main>
        <div className="flex-vertical gap-24">
          <span className="hero">I'm a designer who codes.</span>
          <div className="flex-vertical gap-8">
            <p className="body">
              <span>I specialize in</span>
              <FloaterArea label="hey" />
              <span>
                , Design Systems, and Design Tooling. I also build prototypes,
                figma plugins and snow dragons.
              </span>
            </p>
          </div>
          <FloatingThumbnail left={`${mouseX}px`} top={`${mouseY}px`} />
        </div>
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
