import TokenFormats from "../components/imgs/token-formats.png";
import Video from "../components/video";
import Image from "../components/image";
import Logos from "../components/logos";
import CardSmall from "../components/card-small";
import CardFull from "../components/card-full";

const bigDiv = document.getElementById("big-div");

export function DSite() {
  return (
    <div className="flex flex-col gap-28 overflow-visible pb-16 mt-36">
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 ">
          An interconnected <br /> system demo
        </span>
        <div className="flex flex-row justify-between items-center">
          <p className="body-1 my-auto ">
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
        <div className="flex flex-col gap-4 lg:gap-10 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto my-auto py-0 lg:py-4 px-6 md:pl-6 lg:pl-24 xl:pl-48">
          <div className="flex flex-row items-center gap-6 ">
            <span className="h3">
              <i>Intro</i>
            </span>
            <div className="mt-3 w-[10000px]">
              <div className=" h-[2px] bg-[color:var(--fg-contrast)]" />
            </div>
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
        <div className="flex flex-row  items-center w-full md:w-3/4 lg:w-full mx-auto gap-6 px-6 lg:px-24 xl:px-48 h-0">
          <span className="h3 whitespace-nowrap">
            <i>Building Blocks</i>
          </span>
          <div className="mt-3 w-[10000px]">
            <div className="w-full h-[2px] bg-[color:var(--fg-contrast)]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0 text-[color:var(--fg-contrast)] ">
          <Image big height={240} />
          <div className="flex flex-col gap-2 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto  my-auto py-0 lg:py-4 px-6 md:pr-6 lg:pr-24 xl:pr-48">
            <span className="subtitle">Documenting Decisions in Figma</span>
            <Image />
            <p className="body-2">
              The components use variants and properties to make them flexible
              enough to use, but rigid enough to stay consistent.{" "}
              <div className="mb-2" /> Its a delicate balance, but once you
              manage to get it right, you’ve also ‘written’ most of the
              documentation.
            </p>
            <a className="link-2" href="" target={"_blank"}>
              Check out the figma file {"->"}
            </a>
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
              Global tokens list all possible style choices <br />
              like the darkest black is{" "}
              <i>
                <strong>black.950 = #151515</strong>
              </i>
              <div className="mb-2" /> The semantics then assign global tokens
              to a use case like{" "}
              <i>
                <strong>fg.default = black.950</strong>
              </i>
              <div className="mb-2" /> Once you swap dark and light themes, the
              token names remain, the values get updated.
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
              Once the artefacts are created, and the mechanics documented, I
              extract the style variables to create an independent ‘style
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
              plugin lets you sync styles created in Figma to Github. The
              standardized format the variables are stored in allows for a wide
              variety of use cases.
            </p>
            <div className="mb-2" />
            <span className="body1">
              <strong>Figma Styles to JSON to CSS Variables</strong>
            </span>
            <p className="body-2">
              Once you push your tokens to Github using the Tokens Studio
              plugin, the{" "}
              <a className="link-2" href="../../public/bassengweb/logout">
                {" "}
                Token Transformer
              </a>{" "}
              transforms them to a format understandable by Style Dictionary,
              which in turn will spit out CSS variables. All configured in one
              workflow.
              <div className="mb-2" />
              <Video />
              <div className="mb-2" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-[color:var(--fg-contrast)] w-full md:w-3/4 lg:w-full mx-auto lg:mx-0 py-0 lg:py-4 px-6 lg:px-24 xl:px-48">
        <div className="flex flex-row items-center w-full ">
          <span className="h3 whitespace-nowrap">
            <i>Open Source</i>
          </span>
          <div className="mt-3 w-[10000px]">
            <div className="w-full h-[2px] bg-[color:var(--fg-contrast)]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 h-fit">
          <span className="subtitle">My Site is Your Site</span>
          <p className="body-2">
            I built this demo not only to show off my amazing design system
            skills, <br /> but also for you to have a playground to try out new
            ideas, <br /> and show up to your teams with a working prototype.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-wrap">
          <CardSmall
            img="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/repo.png?alt=media&token=0bf6721e-a755-4117-83f6-70a132d320e1"
            linkText="Clone this repo ->"
            link="https://github.com/dnlklmn/d-site"
          >
            <p className="body-2">
              The code of this website is open source and ready for you to be
              used.
            </p>
          </CardSmall>
          <CardSmall
            img="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/repo.png?alt=media&token=0bf6721e-a755-4117-83f6-70a132d320e1"
            linkText="Clone this repo ->"
            link="https://github.com/dnlklmn/d-site"
          >
            <p className="body-2">
              The code of this website is open source and ready for you to be
              used.
            </p>
          </CardSmall>
          <CardSmall
            img="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/ft.png?alt=media&token=4ac88dec-06dc-4141-b6cd-4403ae48bf3e"
            linkText="Get Tokens Studio ->"
            link="https://tokens.studio/"
          >
            <div className="body-2 h-full">
              The most advanced token plugin is free to try.
            </div>
          </CardSmall>
          <CardSmall
            img="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/workflow.png?alt=media&token=4ce55231-3876-49d4-840e-4443c96d939f"
            linkText="Check the worfklow guide ->"
            link="https://backlight.dev/docs/figma-tokens"
          >
            <p className="body-2">
              Now all you need to do is stitch the parts together.
            </p>
          </CardSmall>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-[color:var(--fg-contrast)] w-full md:w-3/4 lg:w-full mx-auto lg:mx-0 py-0 lg:py-4 px-6 lg:px-24 xl:px-48">
        <div className="flex gap-6 items-center w-full ">
          <span className="h3 whitespace-nowrap">
            <i>Similar Projects</i>
          </span>
          <div className="mt-3 w-[10000px]">
            <div className="w-full h-[2px] bg-[color:var(--fg-contrast)]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 h-fit">
          <span className="subtitle">Design Systems</span>
          <p className="body-2">
            A bridge between design and developments allows <br /> for closer
            collaboration and better alignment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
          <CardFull
            title="UI3 - A Web3 Native Design System"
            subtitle="Design System"
            to="/works/ui-3"
            imageURL="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/ui3.png?alt=media&token=7959f422-f414-4c6d-bf01-01e5546fde9b"
          />
        </div>
      </div>
    </div>
  );
}
