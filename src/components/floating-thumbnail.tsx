import { motion } from "framer-motion";
import styled from "styled-components";

const FloatingBackground = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: var(--brand-primary);
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  pointer-events: none;
`;
export const FloatingThumbnail = ({ left, top, scale }: any) => {
  return (
    <div
      style={{
        position: "absolute",
        left: left,
        top: top,
      }}
    >
      <FloatingBackground
        animate={{ scale: scale }}
        transition={{
          type: "spring",
          stiffness: 2000,
          damping: 80,
        }}
      />
    </div>
  );
};
