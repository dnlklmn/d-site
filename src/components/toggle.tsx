import { motion } from "framer-motion";
import styled from "styled-components";

const ToggleBackground = styled(motion.div)`
  width: 40px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
`;

const ToggleCircle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
`;

export const Toggle = ({ onTap, toggleDirection }: any) => {
  return (
    <ToggleBackground onTap={onTap}>
      <ToggleCircle
        animate={{
          x: toggleDirection,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </ToggleBackground>
  );
};
