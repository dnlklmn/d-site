import "../theme/light.css";
import "../theme/dark.css";
import "../theme/typography.css";
import "../theme/semantic/typography-semantic.css";

import { FloaterArea } from "../components/floater-area";
import { Button } from "../components/button";
import { Navbar } from "../components/navbar";

export function Home() {
  return (
    <div
      className="flex flex-col text-start"
      data-theme={localStorage.getItem("data-theme")}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;700&display=swap');
      </style>
      <div className="px-36">
        <Navbar />
        <div className="flex flex-col gap-6">
          <span className="hero text-[color:var(--fg-contrast)]">
            I design and build <br /> user interfaces
          </span>
          <div className="flex flex-col gap-4">
            <p className="body-2 text-[color:var(--fg-contrast)]">
              I specialize in
              <FloaterArea id="dpd" label=" UX/UI Design " />
              and <FloaterArea id="ds" label=" Design Systems" />. <br />I also
              build prototypes, figma plugins and snow dragons.
            </p>
            <Button label="Get in touch" to="/getintouch" />
          </div>
        </div>
      </div>
    </div>
  );
}
