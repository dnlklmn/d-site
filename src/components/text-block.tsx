import { Button } from "./button";
import { IoArrowForward } from "react-icons/io5";

export default function TextBlock({
  title,
  body,
  buttonLabel,
  textButton,
}: any) {
  return (
    <div className="flex flex-row px-48 gap-12 items-center">
      <div className="w-full flex flex-col gap-4">
        <span className="h5">{title}</span>
        <p className="body-2">{body}</p>
        <Button
          textButton={textButton}
          label={buttonLabel}
          to="/getintouch"
          iconAfter={<IoArrowForward />}
        />
      </div>
      <div className="w-full h-[240px] rounded-sm bg-[color:var(--bg-dip)]" />
    </div>
  );
}

TextBlock.defaultProps = {
  title: "Components in Figma",
  body: "Using properties and variants align the components and make them flexible and easily reusable.",
  buttonLabel: "Figma file",
  textButton: true,
};
