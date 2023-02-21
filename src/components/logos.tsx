import FigmaIcon from "./logos/figma-icon";
import GithubIcon from "./logos/github-icon";
import ReactIcon from "./logos/react-icon";
import StyleDictionary from "./logos/style-dictionary";
import TailwindIcon from "./logos/tailwind-icon";
import TokensStudioIcon from "./logos/tokens-studio-icon";

interface LogosProps {
  height: number;
  big: boolean;
}

export default function Logos({ height, big }: LogosProps) {
  return (
    <div className={big ? "hidden lg:block" : "block lg:hidden"}>
      <div className={`flex flex-row gap-6 justify-start `}>
        <FigmaIcon height={height} />
        <TokensStudioIcon height={height} />
        <GithubIcon height={height} />
        <StyleDictionary height={height} />
        <TailwindIcon height={height} />
        <ReactIcon height={height} />
      </div>
    </div>
  );
}

Logos.defaultProps = {
  height: 32,
  big: false,
};
