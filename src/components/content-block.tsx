import { Button } from "./button";
import { IoArrowForward } from "react-icons/io5";

export default function ContentBlock({
  title,
  children,
  img,
  imgAlt,
  textLeft,
  height,
}: any) {
  return textLeft ? (
    <div className="flex flex-col-reverse lg:flex-row justify-start gap-2 lg:gap-12  px-0  text-[color:var(--fg-contrast)]">
      {children}
      <div
        className={
          "overflow-visible w-full p-6 lg:p-0 lg:w-3/4 float-left self-center h-[" +
          height * 0.6 +
          "px] md:h-[" +
          height * 0.8 +
          "px] xl:h-[" +
          height +
          "300px]  "
        }
      >
        <img
          className="object-cover h-full object-left w-auto shadow-md rounded-md lg:rounded-none lg:rounded-l-md"
          src={img}
          alt={imgAlt}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0 text-[color:var(--fg-contrast)] ">
      <div
        className={
          "overflow-visible w-full p-6 lg:p-0 lg:w-3/4 float-right self-center h-[" +
          height * 0.6 +
          "px] md:h-[" +
          height * 0.8 +
          "px] xl:h-[" +
          height +
          "300px]  "
        }
      >
        <img
          className="object-cover h-full object-right w-auto shadow-md rounded-md lg:rounded-none lg:rounded-r-md"
          src={img}
          alt={imgAlt}
        />
      </div>
      {children}
    </div>
  );
}

ContentBlock.defaultProps = {
  title: "Components in Figma",
  textLeft: true,
  height: 300,
};
