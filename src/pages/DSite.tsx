import { Button } from "../components/button";
import { IoArrowForward } from "react-icons/io5";
import light from "../theme/token-transformation/light.json";

import ReactIcon from "../components/logos/react-icon";
import FigmaIcon from "../components/logos/figma-icon";
import TokensStudioIcon from "../components/logos/tokens-studio-icon";
import GithubIcon from "../components/logos/github-icon";
import TailwindIcon from "../components/logos/tailwind-icon";

import TextBlock from "../components/text-block";

const lightArray = Object.entries(light);
lightArray.map((category) => {
  console.log(category[0]);
  Object.entries(category[1]).map((entry) => {
    console.log(entry);
  });
});

export function DSite() {
  return (
    <div className="flex flex-col gap-20 overflow-visible">
      <div className="px-36">
        <span className="hero text-[color:var(--fg-contrast)]">
          An interconnected <br /> system demo
        </span>
        <p className="body-1">
          Automated design hand-off to bridge design and development. <br /> A
          systemic approach easy to manage and to scale.
        </p>
      </div>
      <div className="flex flex-col items-center py-4 h-fit gap-4 w-full bg-white">
        <div className="flex flex-row gap-10 justify-center items-center">
          <div className="h-[60px] w-fit">
            <FigmaIcon />
          </div>
          <div className="h-[64px] w-fit">
            <TokensStudioIcon />
          </div>
          <div className="h-[64px] w-fit">
            <GithubIcon />
          </div>
          <img
            className="h-[64px] w-fit"
            src={require("../components/logos/logo.png")}
          />
          <div className="h-[64px] w-fit">
            <TailwindIcon />
          </div>
          <div className="h-[64px] w-fit">
            <ReactIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-20 items-center content-start overflow-visible">
        <div className="w-1/2 flex flex-col gap-4 pl-48 py-2 h-fit">
          <div className="flex flex-row items-center gap-4">
            <span className="h5">INTRO</span>
            <div className="w-[10000px] h-[1px] bg-black" />
          </div>
          <TextBlock
            title="Problem"
            body="Keeping design and development in sync during the production
              process is an extensive effort. <br />
              Production is an iterative process, where designs evolve from
              initial ideas to wireframes, mockups, and final designs, while a
              range of setbacks present themselves as development advances,
              requiring designers to go back to the drawing board and rethink
              their solutions."
          />
          <TextBlock
            title="Solution"
            body="Extract shared decisions to facilitate collaboration: build a
            common ground all parties can access and manipulate, to allow
            working together on the product, rather than giving instructions
            to one another."
          />
          <TextBlock
            title="Goal"
            body="Build a bridge between design and development enabling everyone to participate in the building process."
          />
        </div>
        <img
          className="h-fill w-1/2"
          src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/intro.png?alt=media&token=a8aa05c6-1059-4f38-8d13-566e5db50f40"
        />
      </div>
      <div className="flex flex-row px-48 gap-12 items-center">
        <div className="w-full flex flex-col gap-4">
          <span className="h5">Components in Figma</span>
          <p className="body-2">
            Using properties and variants align components, make them flexible,
            and easily reusable.
          </p>
          <Button
            textButton={true}
            label="Figma file"
            to="/getintouch"
            iconAfter={<IoArrowForward />}
          />
        </div>
        <div className="w-full h-[240px] rounded-sm bg-[color:var(--bg-dip)]" />
      </div>
      <div className="flex flex-row  px-48 gap-12 items-center ">
        <div className="w-full h-[240px] rounded-sm bg-[color:var(--bg-dip)]" />
        <div className="w-full flex flex-col gap-4">
          <span className="h5">Design Tokens</span>
          <p className="body-2 leading-snug ">
            Keep your style variables in sync with the Tokens Studio for Figma
            plugin: import styles defined in Figma - or create them directly
            from your tokens stored on Github.
          </p>
        </div>
      </div>
      <div className="flex flex-row  px-48 gap-12 items-center ">
        <div className="w-full flex flex-col gap-4">
          <span className="h5">Tokens to Tailwind</span>
          <p className="body-2 leading-snug ">
            Once new tokens get pushed to the repo, a Github workflow transforms
            them to the styling method you use. In this case I export them as
            CSS variables and use them with Tailwind in my React app.
          </p>
        </div>
        <div className="w-full h-[240px] rounded-sm bg-[color:var(--bg-dip)]" />
      </div>
      <div className="px-48">hey</div>
    </div>
  );
}
