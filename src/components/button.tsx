import React from "react";
import { motion } from "framer-motion";
import "../theme/semantic/components.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  onTap?: () => void;
  label: string;
  to: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  textButton?: boolean;
}

export const Button = ({
  onTap,
  label,
  to,
  iconBefore,
  iconAfter,
  textButton,
}: ButtonProps) => {
  return (
    <Link className="link" to={to}>
      <button
        onClick={onTap}
        className="items-center border-none body-1 text-[color:var(--fg-match-bg)] bg-[color:var(--fg-contrast)] gap-2 w-fit h-fit cursor-pointer flex justify-start rounded-md px-5 py-3"
      >
        {iconBefore}
        {label}
        {iconAfter}
      </button>
    </Link>
  );
};

Button.defaultProps = {
  label: "Click!",
  to: "/",
  textButton: false,
};
