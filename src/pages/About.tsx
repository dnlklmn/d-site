const tokens = require("../theme/token-transformation/light.json");
console.log(tokens);

export function About() {
  return (
    <div className="flex flex-col gap-28 overflow-visible pb-16 mt-36">
      <div className="flex flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 font- text-fg-contrast">
          Designer, builder, father.
        </span>
        <div className="flex flex-row justify-between items-center">
          <p className="body-1 my-auto ">
            I'm Daniel Kalman, a Berlin based product designer with 12+ years of
            professional experience. <br /> I'm currently working as a product
            designer on{" "}
            <a
              className="link-1"
              href="http://polkadot.network"
              target="_blank"
            >
              Polkadot.
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-16 ">
        <div className="flex flex-col items-start gap-6 ">
          <div className="mt-3 w-full">
            <div className=" h-[2px] bg-[color:var(--fg-contrast)]" />
          </div>
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
  );
}
