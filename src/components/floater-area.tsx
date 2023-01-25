import React from "react";
import { FloatingThumbnail } from "./floating-thumbnail";

export const FloaterArea = ({ label }: any) => {
  const [mouseX, setMouseX] = React.useState(-1000);
  const [mouseY, setMouseY] = React.useState(-1000);
  React.useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMouseX(Number(event.clientX + 4));
      setMouseY(Number(event.clientY + 4));
    };
    const hideFloatingThumbnail = () => {
      setMouseX(-1000);
      setMouseY(-1000);
    };
    console.log(mouseX, mouseY);
    let floaterArea = document.getElementById("floater");
    if (floaterArea) floaterArea.addEventListener("mousemove", handleMouseMove);
    if (floaterArea)
      floaterArea.addEventListener("mouseout", hideFloatingThumbnail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <span id="floater" onMouseOver={(e) => console.log(e.clientX, e.clientY)}>
      <strong>{label}</strong>
      <FloatingThumbnail left={`${mouseX}px`} top={`${mouseY}px`} />
    </span>
  );
};
