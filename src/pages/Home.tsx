import "../App.css";
import "../theme/semantic/typography-semantic.css";
import "../theme/light.css";
import "../theme/dark.css";
import "../theme/typography.css";
import { FloaterArea } from "../components/floater-area";
import { Button } from "../components/button";

export function Home() {
  return (
    <div className="App" data-theme={localStorage.getItem("data-theme")}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;700&display=swap');
      </style>
      <main>
        <div className="flex-vertical gap-8">
          <span className="hero">
            I'm a designer <br /> not afraid to code.
          </span>
          <div className="flex-vertical gap-8">
            <p className="body-2 line-height-1">
              I specialize in
              <FloaterArea id="dpd" label=" UX/UI Design " />
              and <FloaterArea id="ds" label=" Design Systems" />. <br />I also
              build prototypes, figma plugins and snow dragons.
            </p>
          </div>
          <Button label="Get in touch" to="/getintouch" />
        </div>
      </main>
    </div>
  );
}
