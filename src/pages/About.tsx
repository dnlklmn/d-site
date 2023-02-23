import { Link } from "react-router-dom";
import Image from "../components/image";

export function About() {
  return (
    <div className="flex flex-col gap-28 overflow-visible pb-16 mt-36">
      <div className="flex text-[color:var(--fg-contrast)] flex-col justify-start gap-6 w-full md:w-3/4 lg:w-full mx-auto px-6 md:px-6 lg:px-24 xl:px-48">
        <span className="h1 ">Designer, builder, father.</span>
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
              <span className="subtitle">Philosophy</span>
              <p className="body-2">
                I believe design and development are closer than we like to
                think. <br />
                Building design systems and prototypes taught me to think like
                an engineer while remaining flexible in my experiments as a
                designer.
              </p>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/about%2Fdk.jpeg?alt=media&token=e20625ff-dea7-4536-8464-ff6daeadd32a" />
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Experience</span>
              <p className="body-2">
                Whether as an only designer at an early stage startup or a
                member of a 10+ design team at a scale up, I love building user
                interfaces people enjoy using.
                <br />
                Seen startups fail miserably but also witnessed success from the
                first row. I've worked in Berlin, Paris, Silicon Valley, and
                remote. <br />
              </p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Specialities</span>
              <p className="body-2">
                I have excessive experience with the entire product design
                worfklow, from research, ideation workshops to generate
                solutions and to present these in various fidelities. <br />
                <br /> I'm most interested in{" "}
                <strong>design systems, design tooling, </strong>and{" "}
                <strong>prototyping complex interactions.</strong>
              </p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <span className="subtitle">Goal</span>
              <p className="body-2">Lorem ipsum...</p>
            </div>
          </div>
        </div>
        <Image
          big
          src="https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/about%2Fdk.jpeg?alt=media&token=e20625ff-dea7-4536-8464-ff6daeadd32a"
        />
      </div>
    </div>
  );
}
