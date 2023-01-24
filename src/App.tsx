import "./App.css";
import "./theme/light.css";
import "./theme/dark.css";

let theme: any;
theme = localStorage.getItem("data-theme");
console.log("theme 1st: ", theme);

function App() {
  return (
    <div className="App" data-theme="dark">
      <header className="App-header">
        <input
          type="checkbox"
          id="switch"
          onChange={() => {
            console.log("theme 2nd: ", theme);

            theme = localStorage.getItem("data-theme");
            if (theme === "dark") {
              document.documentElement.setAttribute("data-theme", "light"); //set theme to light
              localStorage.setItem("data-theme", "light"); // save theme to local storage
              theme = "light";
            } else {
              document.documentElement.setAttribute("data-theme", "dark"); //set theme to light
              localStorage.setItem("data-theme", "dark"); // save theme to local storage
              theme = "dark";
            }
          }}
        />
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
      </header>
    </div>
  );
}

export default App;
