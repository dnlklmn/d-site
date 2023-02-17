import { Button } from "../components/button";
import { IoArrowForward } from "react-icons/io5";
import light from "../theme/token-transformation/light.json";

import ReactIcon from "../components/logos/react-icon";
import FigmaIcon from "../components/logos/figma-icon";
import TokensStudioIcon from "../components/logos/tokens-studio-icon";
import GithubIcon from "../components/logos/github-icon";
import TailwindIcon from "../components/logos/tailwind-icon";

import ContentBlock from "../components/content-block";

import TokenFormats from "../components/imgs/token-formats.png";
import { url } from "inspector";
import Video from "../components/video";
import Image from "../components/image";
import Logos from "../components/logos";

const lightArray = Object.entries(light);
lightArray.map((category) => {
  console.log(category[0]);
  Object.entries(category[1]).map((entry) => {
    console.log(entry);
  });
});

export function DSite() {
  return (
    <div className="flex flex-col gap-28 overflow-visible ">
      <div className="flex flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="hero text-[color:var(--fg-contrast)]">
          An interconnected <br /> system demo
        </span>
        <div className="flex flex-row justify-between">
          <p className="body-1">
            Automated design hand-off to bridge design and development.
            <br /> A systemic approach easy to manage and to scale.
          </p>
          <Logos big />
        </div>
        <div className="visible lg:invisible">
          <Logos />
        </div>
      </div>

      <div className="flex flex-row gap-20 text-[color:var(--fg-contrast)]">
        <div className="flex flex-col gap-10 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto my-auto py-0 lg:py-4 px-6 md:pl-6 lg:pl-24 xl:pl-48">
          <div className="flex flex-row items-center gap-3 ">
            <span className="h5">INTRO</span>
            <div className="w-[10000px] h-[2px] bg-[color:var(--fg-contrast)]" />
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Problem</span>
              <p className="body-2">
                Keeping design and development in sync during the production
                process is an extensive effort. <div className="mb-2" />
                Production is an iterative process, where designs evolve from
                initial ideas to wireframes, mockups, and final designs, while a
                range of setbacks present themselves as development advances,
                requiring designers to go back to the drawing board and rethink
                their solutions.
              </p>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/intro.png?alt=media&token=3db30764-44e3-41a6-bdb1-3c3026ab22c8" />
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Solution</span>
              <p className="body-2">
                Extract shared decisions to facilitate collaboration: build a
                common ground all parties can access and manipulate, to allow
                working together on the product, rather than giving instructions
                to one another.
              </p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Goal</span>
              <p className="body-2">
                Build a bridge between design and development enabling everyone
                to participate in the building process.
              </p>
            </div>
          </div>
        </div>
        <Image
          big
          right
          src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/intro.png?alt=media&token=3db30764-44e3-41a6-bdb1-3c3026ab22c8"
        />
      </div>
      <div className="flex flex-col gap-12 lg:gap-20 text-[color:var(--fg-contrast)] ">
        <div className="flex flex-row items-center w-full md:w-3/4 lg:w-full mx-auto gap-3 px-6 lg:px-24 xl:px-48 h-0">
          <span className="h5 whitespace-nowrap">BUILDING BLOCKS</span>
          <div className="w-full h-[2px] bg-[color:var(--fg-contrast)]" />
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0 text-[color:var(--fg-contrast)] ">
          <Image big height={240} />
          <div className="flex flex-col gap-2 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto  my-auto py-0 lg:py-4 px-6 md:pr-6 lg:pr-24 xl:pr-48">
            <span className="subtitle">Documenting Decisions in Figma</span>
            <Image />
            <p className="body-2">
              The components use variants and properties to make them flexible
              enough to use, but rigid enough to stay consistent. Its a delicate
              balance that requires experimenting and adjusting components to
              your exact needs. <div className="mb-2" /> Once you manage to set
              them up in such a modular way, however, you’ve basically also
              ‘wrote’ most of the documentation.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0 text-[color:var(--fg-contrast)] ">
          <div className="flex flex-col gap-2 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto  my-auto py-0 lg:py-4 px-6 md:pl-6 lg:pl-24 xl:pl-48">
            <span className="subtitle">Structuring Styles</span>
            <Image
              height={280}
              src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/tokensStructure.png?alt=media&token=3d008146-2008-49ca-ba46-fd58e348ed4e"
            />
            <p className="body-2">
              To make sure color definitions stay in sync i use a multi-level
              setup. <div className="mb-2" />
              The global set contains all the possible options one is allowed to
              use, eg. a range of blacks: black.50 - 950.
              <div className="mb-2" /> Semantic sets then attach a use case to
              global colors, eg. text.default = global.black.{" "}
              <div className="mb-2" />
              Note: As an additional layer you can add component-based sets, but
              they can overcomplicate things, so I’d recommend only doing it if
              you absolutely have to.
            </p>
          </div>
          <Image
            big
            right
            height={240}
            src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/tokensStructure.png?alt=media&token=3d008146-2008-49ca-ba46-fd58e348ed4e"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-start gap-2 lg:gap-12  px-0  text-[color:var(--fg-contrast)] ">
          <div
            className={
              "flex flex-col gap-6 w-full p-6 lg:p-0 lg:w-3/4 float-left self-center h-[180 px] md:h-[120 px] xl:h-[80 px] px-6 md:pl-6 lg:pl-24 xl:pl-48 bg-transparent"
            }
          >
            <img
              style={{ filter: `drop-shadow(0px 2px 4px rgba(0,0,0,0.15))` }}
              className="h-full rounded-none lg:rounded-md bg-transparent hidden lg:block"
              src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/token-formats.png?alt=media&token=8172833c-ae4a-4b52-9d98-14084d0af4b3"
              alt="Token Formats"
            />
            <Video showLg />
          </div>
          <div className="flex flex-col gap-2 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto  my-auto py-0 lg:py-4 px-6 md:pr-6 lg:pr-24 xl:pr-48">
            <span className="subtitle">Extracting and storing styles</span>

            <p className="body-2">
              Once the artefacts are created, and the mechanics documented, you
              can extract style variables to create an independent ‘style
              control center’ accessible both for designers and developers.
              <div className="mb-4" />
              <img
                style={{ filter: `drop-shadow(0px 2px 4px rgba(0,0,0,0.15))` }}
                className="h-full rounded-none lg:rounded-md bg-transparent block lg:hidden my-1"
                src={TokenFormats}
                alt="Token Formats"
              />
              <div className="mb-4" />
              The{" "}
              <a className="link-2" href="https://tokens.studio/">
                Tokens Studio for Figma
              </a>{" "}
              plugin allows you to sync styles created in Figma to a JSON file
              stored on Github seamlessly. This is a game changer, as the
              standardized format the variables are stored in allows for a wide
              variety of use cases.
            </p>
            <div className="mb-2" />
            <span className="body1">
              <strong>Transforming style variables</strong>
            </span>
            <Video />
            <p className="body-2">
              The standardized tokens can't be used without some transformation.
              <div className="mb-2" />
              Once you push your tokens to Github using the Tokens Studio
              plugin, the{" "}
              <a className="link-2" href="../../public/bassengweb/logout">
                {" "}
                Token Transformer
              </a>{" "}
              transforms them to a format understandable by Style Dictionary,
              which in turn will spit out CSS variables. All configured in one
              workflow.
            </p>
          </div>
        </div>
        ;
      </div>
    </div>
  );
}
