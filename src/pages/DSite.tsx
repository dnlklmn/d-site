import { Button } from "../components/button";
import { IoArrowForward } from "react-icons/io5";
import light from "../theme/token-transformation/light.json";

const lightArray = Object.entries(light);
lightArray.map((entry) => {
  Object.entries(entry[1]).map((value) => {
    console.log(value);
  });
});

console.log(lightArray);

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
            A unified way to store style variables across the board. <br />
            Sync styles from figma with your tokens on GitHub using the Tokens
            Studio plugin: import styles defined in Figma - or create them from
            your tokens.
          </p>
        </div>
      </div>
      <div className="px-12"></div>
    </div>
  );
}
