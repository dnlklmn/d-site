import React from "react";
import { Link } from "react-router-dom";
import CardSmall from "../components/card-small";

export function Works() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  return (
    <div className="flex flex-col gap-28 overflow-visible pb-16 mt-36">
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 ">Recent works</span>
        <div className="flex flex-row justify-between items-center">
          <p className="body-1 my-auto ">
            Prototypes, tools, and other fun stuff.
          </p>
        </div>
        <div className="flex flex-row body-2 mt-12 text-[color:var(--fg-contrast)] font-semibold bg-transparent items-center ">
          <button
            className={`body-1 px-3 py-2 rounded-md ${
              selectedCategory === "all" ? `bg-[color:rgba(0,0,0,0.1)]` : null
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`body-1 px-3 py-2 rounded-md ${
              selectedCategory === "tools" ? `bg-[color:rgba(0,0,0,0.1)]` : null
            }`}
            onClick={() => setSelectedCategory("tools")}
          >
            Tools
          </button>
          <button
            className={`body-1 px-3 py-2 rounded-md ${
              selectedCategory === "ds" ? `bg-[color:rgba(0,0,0,0.1)]` : null
            }`}
            onClick={() => setSelectedCategory("ds")}
          >
            Design Systems
          </button>
          <button
            className={`body-1 px-3 py-2 rounded-md ${
              selectedCategory === "uxui" ? `bg-[color:rgba(0,0,0,0.1)]` : null
            }`}
            onClick={() => setSelectedCategory("uxui")}
          >
            UX/UI Design
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-wrap">
          <Link className="w-full h-[240px]" to="/works/this-site">
            <div className="group h-full bg-cover rounded-md overflow-clip shadow-md hover:shadow-lg bg-[url('https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/this-site.png?alt=media&token=1245c8cd-601c-4069-a042-2807633524ab')]">
              <div className="flex flex-col w-full   h-full p-4 justify-end backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                <p className="h5 text-[color:var(--fg-always-dark)] opacity-100 group-hover:opacity-0 transition-opacity">
                  <i>This Site</i>
                </p>
              </div>
            </div>
          </Link>
          <Link className="w-full h-[240px]" to="/works/this-site">
            <div className="flex flex-col w-full shadow-md rounded-md overflow-clip h-full bg-white p-4 justify-end ">
              <p className="h5 text-[color:var(--fg-always-dark)]">
                <i>Web3 Address Generator</i>
              </p>
            </div>
          </Link>
          <Link className="w-full h-[240px]" to="/works/this-site">
            <div className="flex flex-col w-full shadow-md rounded-md overflow-clip h-full bg-white p-4 justify-end">
              <p className="h5 text-[color:var(--fg-always-dark)]">
                <i>UI3</i>
              </p>
            </div>
          </Link>
          <Link className="w-full h-[240px]" to="/works/this-site">
            <div className="flex flex-col w-full shadow-md rounded-md overflow-clip h-full bg-white p-4 justify-end">
              <p className="h5 text-[color:var(--fg-always-dark)]">
                <i>On Canvas UI</i>
              </p>
            </div>
          </Link>
          <Link className="w-full h-[240px]" to="/works/this-site">
            <div className="flex flex-col w-full shadow-md rounded-md overflow-clip h-full bg-white p-4 justify-end">
              <p className="h5 text-[color:var(--fg-always-dark)]">
                <i>One Fam</i>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
