import { motion } from "framer-motion";
import "../theme/semantic/components.css";

export const Button = ({ onTap }: any) => {
  return (
    <motion.button onTap={onTap} className="button body-2">
      <strong> Get in touch</strong>
    </motion.button>
  );
};