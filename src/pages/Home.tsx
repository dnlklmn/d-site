import CardFull from "../components/card-full";

export function Home() {
  return (
    <div
      className="flex flex-col text-start mt-36"
      data-theme={localStorage.getItem("data-theme")}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;700&display=swap');
      </style>
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 ">
          I design and build <br /> user interfaces
        </span>
        <div className="flex flex-col gap-6">
          <p className="body-1 text-[color:var(--fg-contrast)]">
            I'm Daniel, a product designer based in Berlin. <br /> I specialize
            in <strong>UX/UI design, design systems</strong> and{" "}
            <strong>prototypes.</strong>
          </p>
        </div>
        <div className="flex flex-col gap-6 my-20">
          <div className="flex items-center gap-6 ">
            <span className="h3 whitespace-nowrap">
              <i>Recent Works</i>
            </span>
            <div className="mt-3 w-[10000px]">
              <div className=" h-[2px] bg-[color:var(--fg-contrast)]" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
            <CardFull
              title="This Website - An Interconnected System Demo"
              subtitle="Design System"
              to="/works/this-site"
              imageURL="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/this-site.png?alt=media&token=1245c8cd-601c-4069-a042-2807633524ab"
            />
            <CardFull
              title="Web3 Address Generator"
              subtitle="Figma Plugin"
              to="/works/address-generator"
              imageURL="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/address-generator.png?alt=media&token=c8301039-696d-44fc-89cd-ba80c7ec7f80"
            />
            <CardFull
              title="UI3 - A Web3 Native Design System"
              subtitle="Design System"
              to="/works/ui-3"
              imageURL="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/ui3.png?alt=media&token=7959f422-f414-4c6d-bf01-01e5546fde9b"
            />
            <CardFull
              title="On-Canvas UI for Figma"
              subtitle="Figma Plugin"
              to="/works/on-canvas-ui"
              imageURL="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/on-canvas.png?alt=media&token=395d2748-d11f-4633-ac46-8fecc67a60a8"
            />
            <CardFull
              title="One Fam"
              subtitle="UX & UI Design"
              to="/works/one-fam"
              imageURL=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-20">
          <div className="flex items-center gap-6 ">
            <span className="h4 whitespace-nowrap">
              <i>Contact</i>
            </span>
          </div>
          <div className="flex text-[color:var(--fg-contrast)] justify-start gap-6 w-full ">
            <a className="link-1" href="" target="_blank">
              Email
            </a>
            <a className="link-1" href="" target="_blank">
              Twitter
            </a>
            <a className="link-1" href="" target="_blank">
              Medium
            </a>
            <a className="link-1" href="" target="_blank">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
