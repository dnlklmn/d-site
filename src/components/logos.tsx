import FigmaIcon from "./logos/figma-icon";
import GithubIcon from "./logos/github-icon";
import ReactIcon from "./logos/react-icon";
import TailwindIcon from "./logos/tailwind-icon";
import TokensStudioIcon from "./logos/tokens-studio-icon";

interface LogosProps {
  height: number;
  big: boolean;
}

export default function Logos({ height, big }: LogosProps) {
  return (
    <div
      className={`flex flex-row gap-6 justify-start items-center ${
        big ? `invisible lg:visible` : `visible lg:invisible`
      }`}
    >
      <FigmaIcon height={height} />
      <TokensStudioIcon height={height} />
      <GithubIcon height={height} />
      <img
        className={`h-[${height}px] w-fit`}
        src={require("../components/logos/logo.png")}
      />
      <TailwindIcon height={height} />
      <ReactIcon height={height} />
    </div>
  );
}

Logos.defaultProps = {
  height: 32,
  big: false,
};
