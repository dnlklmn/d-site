import { Button } from "./button";
import { IoArrowForward } from "react-icons/io5";

export default function TextBlock({
  title,
  children,
  img,
  imgAlt,
  textLeft,
  height,
}: any) {
  return textLeft ? (
    <div className="flex flex-col-reverse lg:flex-row justify-start gap-2 lg:gap-12  px-0  ">
      <div className="flex flex-col gap-2 h-fit w-full sm:w-3/4 lg:w-2/3 xl:w-1/2  my-auto py-0 lg:py-4 px-6 md:pl-6 lg:pl-24 xl:pl-48">
        <span className="subtitle">{title}</span>
        {children}
      </div>
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
    <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-12  px-0  ">
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
      <div className="flex flex-col gap-2 h-fit w-full sm:w-3/4 lg:w-2/3 xl:w-1/2  my-auto py-0 lg:py-4 px-6 md:pr-6 lg:pr-24 xl:pr-48">
        <span className="subtitle">{title}</span>
        {children}
      </div>
    </div>
  );
}

TextBlock.defaultProps = {
  title: "Components in Figma",
  textLeft: true,
  height: 300,
};
