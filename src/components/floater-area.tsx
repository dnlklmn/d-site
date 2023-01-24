import React from "react";

export const FloaterArea = ({ label }: any) => {
  return (
    <span onMouseOver={(e) => console.log(e.clientX, e.clientY)}>
      <strong>{label}</strong>
    </span>
  );
};
