import React from "react";
import { FloatingThumbnail } from "./floating-thumbnail";

export const FloaterArea = ({ label, id }: any) => {
  const [mouseX, setMouseX] = React.useState(-1000);
  const [mouseY, setMouseY] = React.useState(-1000);
  const [scale, setScale] = React.useState(0);

  React.useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMouseX(Number(event.clientX - 50));
      setMouseY(Number(event.clientY - 50));
      setScale(1);
    };
    const hideFloatingThumbnail = () => {
      setScale(0);
    };
    let floaterArea = document.getElementById(`${id}`);
    if (floaterArea) floaterArea.addEventListener("mousemove", handleMouseMove);
    if (floaterArea)
      floaterArea.addEventListener("mouseout", hideFloatingThumbnail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <span id={id} onMouseOver={(e) => console.log(e.clientX, e.clientY)}>
      <strong>{label}</strong>
      <FloatingThumbnail
        left={`${mouseX}px`}
        top={`${mouseY}px`}
        scale={scale}
      />
    </span>
  );
};
