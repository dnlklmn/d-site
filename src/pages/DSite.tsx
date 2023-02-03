import { Button } from "../components/button";
import { IoArrowForward } from "react-icons/io5";
import light from "../theme/token-transformation/light.json";

import ReactIcon from "../components/react-icon";
import FigmaIcon from "../components/figma-icon";
import TokensStudioIcon from "../components/tokens-studio-icon";
import GithubIcon from "../components/github-icon";
import TailwindIcon from "../components/tailwind-icon";

const lightArray = Object.entries(light);
lightArray.map((category) => {
  console.log(category[0]);
  Object.entries(category[1]).map((entry) => {
    console.log(entry);
  });
});

export function DSite() {
  return (
    <div className="flex flex-col gap-20">
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
          <div className="h-[64px] w-fit">
            <TailwindIcon />
          </div>
          <div className="h-[64px] w-fit">
            <ReactIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-row px-48 gap-12 items-center">
        <div className="w-full flex flex-col gap-4">
          <span className="h5">Components in Figma</span>
          <p className="body-2">
            Using properties and variants align the components and make them
            flexible and easily reusable.
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
        <div className="w-full">
          <span className="h5">Design Tokens</span>
          <p className="body-2 leading-snug ">
            The unified way to store and share style variables. <br />
            Sync styles from figma with your tokens on GitHub using the Tokens
            Studio plugin: import styles defined in Figma - or create them from
            your tokens.
          </p>
        </div>
      </div>
      <div className="flex flex-row  px-48 gap-12 items-center ">
        <div className="w-full">
          <span className="h5">Tokens to Tailwind</span>
          <p className="body-2 leading-snug ">
            A Github workflow transforms our tokens to whatever styling method
            we use. In this case I export them as CSS variables and use them
            with Tailwind in my React app.
          </p>
        </div>
        <div className="w-full h-[240px] rounded-sm bg-[color:var(--bg-dip)]" />
      </div>
      <div className="px-48">hey</div>
    </div>
  );
}
