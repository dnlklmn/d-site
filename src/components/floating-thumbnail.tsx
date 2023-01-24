import { motion } from "framer-motion";
import styled from "styled-components";

const FloatingBackground = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: var(--primary);
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  position: absolute;
`;
export const FloatingThumbnail = ({ left, top }: any) => {
  return (
    <div
      style={{
        position: "absolute",
        left: left,
        top: top,
      }}
    >
      <FloatingBackground />
    </div>
  );
};
