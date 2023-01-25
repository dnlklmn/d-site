import { motion } from "framer-motion";
import "../theme/semantic/components.css";
import { Link } from "react-router-dom";

export const Button = ({ onTap, label, to, size }: any) => {
  return (
    <Link className="link" to={to}>
      <motion.button onTap={onTap} className="button body-2">
        <strong> {label}</strong>
      </motion.button>
    </Link>
  );
};

Button.defaultProps = {
  label: "Click!",
  to: "/",
};
