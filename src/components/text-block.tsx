import { Button } from "./button";
import { IoArrowForward } from "react-icons/io5";

export default function TextBlock({
  title,
  body,
  buttonLabel,
  textButton,
}: any) {
  return (
    <div className="w-full flex flex-col gap-1">
      <span className="h5">{title}</span>
      <p className="body-2">{body}</p>
      {buttonLabel ? (
        <Button
          textButton={textButton}
          label={buttonLabel}
          to="/getintouch"
          iconAfter={<IoArrowForward />}
        />
      ) : null}
    </div>
  );
}

TextBlock.defaultProps = {
  title: "Components in Figma",
  body: "Using properties and variants align the components and make them flexible and easily reusable.",
  textButton: true,
};
