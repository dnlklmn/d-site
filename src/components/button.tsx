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
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const [bottom, setBottom] = React.useState(0);
  return (
    <Link className="link" to={to}>
      <motion.button
        onMouseOver={() => {
          if (!textButton) {
            setLeft(Math.random() * 20);
            setTop(Math.random() * 20);
            setRight(Math.random() * 20);
            setBottom(Math.random() * 20);
          }
        }}
        onMouseDown={() => {
          if (!textButton) {
            let unify = Math.random() * 20;
            setLeft(unify);
            setTop(unify);
            setRight(unify);
            setBottom(unify);
          }
        }}
        onMouseOut={() => {
          if (!textButton) {
            setLeft(0);
            setTop(0);
            setRight(0);
            setBottom(0);
          }
        }}
        onTap={onTap}
        className={
          textButton
            ? "button w-fit h-fit cursor-pointer flex justify-start bg-red items-center border-none body-2 font-bold text-[color:var(--fg-contrast)] gap-2 rounded-md hover:text-[color:var(--primary)]"
            : "button w-fit h-fit bg-[color:var(--fg-contrast)] cursor-pointer flex justify-start rounded-sm items-center border-none body-2 font-semibold text-[color:var(--fg-match-bg)] p-4"
        }
        animate={{
          borderLeft: `${left}px solid var(--primary)`,
          borderTop: `${top}px solid var(--primary)`,
          borderRight: `${right}px solid var(--primary)`,
          borderBottom: `${bottom}px solid var(--primary)`,
          marginLeft: -left,
          marginTop: -top,
        }}
        transition={{
          type: "easeInOut",
          stiffness: 3000,
          damping: 95,
          duration: 0.13,
        }}
      >
        {iconBefore}
        {label}
        {iconAfter}
      </motion.button>
    </Link>
  );
};

Button.defaultProps = {
  label: "Click!",
  to: "/",
  textButton: false,
};
