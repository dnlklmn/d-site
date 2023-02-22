import Image from "../components/image";
import { Link } from "react-router-dom";

export function UI3() {
  return (
    <div className="flex flex-col gap-28 overflow-visible pb-16 mt-36">
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 ">A Web3 Native Design System</span>
        <div className="flex flex-row justify-between items-center">
          <p className="body-1 my-auto ">
            Typing random characters over and over can be annoying, <br /> so I
            decided to make a plugin to do it for me.
          </p>
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
                Web3 mockups often display a lot of addresses, which for a
                realistic mockup means you want a mix of all sorts of available
                characters, typing which can be lot of unnecessary work.
              </p>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator%2Fmain.png?alt=media&token=87466f86-ad1e-4eaf-ad5a-16e23d460262" />
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Solution</span>
              <p className="body-2">
                A figma plugin that can generate addresses for a particular
                chain, eg. Ethereum addresses always start with{" "}
              </p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Goal</span>
              <p className="body-2">
                You should be able to select a bunch of text instances and
                replace their content with addresses that look like they were
                real addresses for the blockchain you are working with.
              </p>
            </div>
          </div>
        </div>
        <Image
          big
          right
          src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator%2Fmain-2.png?alt=media&token=f37eeec4-0022-401d-a9e7-2d399ee4de62"
        />
      </div>
      <div className="flex flex-col gap-12 lg:gap-20 text-[color:var(--fg-contrast)] ">
        <div className="flex flex-row  items-center w-full md:w-3/4 lg:w-full mx-auto gap-6 px-6 lg:px-24 xl:px-48 h-0">
          <span className="h3 whitespace-nowrap">
            <i>Features</i>
          </span>
          <div className="mt-3 w-[10000px]">
            <div className="w-full h-[2px] bg-[color:var(--fg-contrast)]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0 text-[color:var(--fg-contrast)] ">
          <div className="flex flex-col gap-2 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto  my-auto py-0 lg:py-4 px-6 md:pl-6 lg:pl-24 xl:pl-48">
            <span className="subtitle">Flexible and open source</span>
            <Image
              height={280}
              src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator%2Fopen-source.png?alt=media&token=7286f350-8f4d-4a8a-ae30-26a86c4092f1"
            />
            <p className="body-2">
              The plugin code is well documented, allowing to quickly add
              additional features, eg. other chains to generate addresses for.{" "}
              <div className="mb-4" />
              Add the character set your blockchain addresses use, make a PR and
              the new feature will be live in the plugin soon.
            </p>
          </div>
          <Image
            big
            right
            height={240}
            src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator%2Fopen-source.png?alt=media&token=7286f350-8f4d-4a8a-ae30-26a86c4092f1"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0 text-[color:var(--fg-contrast)] ">
          <div className="overflow-visible w-full lg:w-3/4 my-auto p-6 lg:p-0 float-right hidden lg:block">
            <img
              className="object-cover h-[320px] float-right w-auto rounded-md lg:rounded-none lg:rounded-l-md bg-transparent"
              src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator%2Fthemes.png?alt=media&token=a996f4f0-428c-4aa4-99ce-c9d84f1f8b3b"
              alt="Dark and Light Themes"
            />
          </div>
          <div className="flex flex-col gap-2 h-fit w-full md:w-3/4 lg:w-1/2 mx-auto  my-auto py-0 lg:py-4 px-6 md:pr-6 lg:pr-24 xl:pr-48">
            <span className="subtitle">Adjusts to your workspace</span>
            <Image
              noShadow
              src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator%2Fthemes.png?alt=media&token=a996f4f0-428c-4aa4-99ce-c9d84f1f8b3b"
            />
            <p className="body-2">
              Automatic switching between dark and a light themes makes sure the
              plugin presents as little distraction from the standard Figma UI
              as possible.
            </p>
          </div>
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
          <span className="subtitle">Design Tooling</span>
          <p className="body-2">
            Automation isn't only a way to gain speed, it also guarantees
            consistency <br /> by the very nature of being imperative instead of
            declarative.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
          <Link className="w-full h-[240px]" to="/works/this-site">
            <div className="group h-full bg-cover rounded-md overflow-clip shadow-md hover:shadow-lg bg-[url('https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/on-canvas.png?alt=media&token=395d2748-d11f-4633-ac46-8fecc67a60a8')]">
              <div className="flex flex-col w-full h-full text-[color:var(--fg-always-light)] p-4 justify-end backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity">
                <p className="h5 ">
                  <i>On-Canvas UI for Figma</i>
                </p>
                <p className="body-2">Figma Plugin</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
