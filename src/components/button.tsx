import React from "react";
import { motion } from "framer-motion";
import "../theme/semantic/components.css";
import { Link } from "react-router-dom";

export const Button = ({ onTap, label, to, size }: any) => {
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const [bottom, setBottom] = React.useState(0);
  return (
    <Link className="link" to={to}>
      <motion.button
        onMouseOver={() => {
          setLeft(Math.random() * 20);
          setTop(Math.random() * 20);
          setRight(Math.random() * 20);
          setBottom(Math.random() * 20);
        }}
        onMouseDown={() => {
          let unify = Math.random() * 25;
          setLeft(unify);
          setTop(unify);
          setRight(unify);
          setBottom(unify);
        }}
        onMouseOut={() => {
          setLeft(0);
          setTop(0);
          setRight(0);
          setBottom(0);
        }}
        onTap={onTap}
        className="button body-2"
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
        {label}
      </motion.button>
    </Link>
  );
};

Button.defaultProps = {
  label: "Click!",
  to: "/",
};
