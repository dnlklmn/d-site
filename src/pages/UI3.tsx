import { Link } from "react-router-dom";

export function UI3() {
  return (
    <div className="flex flex-col gap-28 overflow-visible pb-16 mt-36">
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 ">A Web3 Native Design System</span>
        <div className="flex flex-row justify-between items-center">
          <p className="body-1 my-auto ">Coming soon</p>
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
