const tokens = require("../theme/token-transformation/light.json");
console.log(tokens);

export function About() {
  return (
    <div className="flex flex-col gap-14 overflow-visible pb-16 mt-36">
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-20 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48 ">
        <span className="h1 w-full lg:w-2/3">Designer, builder, father.</span>

        <div className="flex gap-32 items-start">
          <div className="flex flex-col gap-2">
            <img
              className="w-full sm:w-5/6  md:w-full lg:w-2/3  object-cover h-[240px] rounded-md shadow-md mb-4"
              src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/about%2Fdk.jpeg?alt=media&token=e20625ff-dea7-4536-8464-ff6daeadd32a"
              alt=""
            />
            <div className="flex w-full gap-12 lg:gap-32">
              <div className="flex-col w-full sm:w-5/6  md:w-2/3">
                <span className="subtitle">About Daniel Kalman</span>
                <p className="body-1">
                  I am a designer and developer with 12+ years of experience,
                  passionate about improving the lives of others by building
                  products they enjoy using. <div className="mb-2" /> Currently
                  employed as a product designer at{" "}
                  <a className="link-1" href="http://parity.io" target="_blank">
                    {" "}
                    Parity Technologies
                  </a>
                  , I’m working on the future of the decentralized web.
                </p>
                <div className="my-8" />

                <span className="subtitle">Experience</span>
                <p className="body-1">
                  I have worked on digital products for small startups and large
                  tech companies. <div className="mb-2" /> I excel at bringing a
                  product's big picture potential to life through designing
                  apps, building prototypes, and creating design systems with a
                  high level of quality and creativity. <div className="mb-2" />{" "}
                  In my free time, I find inspiration through running, mountain
                  biking, and traveling with my girlfriend and two young
                  children.
                </p>
              </div>
              <div className="flex-col hidden md:block">
                <span className="subtitle">Services</span>
                <p className="body-1">
                  User Research <div className="mb-2" />
                  UX & UI Design <div className="mb-2" />
                  Prototyping
                  <div className="mb-2" />
                  Design Systems
                  <div className="mb-2" />
                  Design Tooling
                  <div className="mb-2" />
                </p>
              </div>
            </div>
            <div className="my-4" />
            <div className="flex flex-col gap-2 w-1/3 block md:hidden">
              <span className="subtitle">Services</span>
              <p className="body-1">
                User Research <div className="mb-2" />
                UX & UI Design <div className="mb-2" />
                Prototyping
                <div className="mb-2" />
                Design Systems
                <div className="mb-2" />
                Design Tooling
                <div className="mb-2" />
              </p>
            </div>
          </div>
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
