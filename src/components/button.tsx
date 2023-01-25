import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonBase = styled(motion.button)`
  width: auto;
  height: auto;
  background-color: var(--primary);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  color: var(--contrast);
`;

export const Button = ({ onTap, toggleDirection }: any) => {
  return (
    <ButtonBase onTap={onTap} className="body-2">
      <strong> Get in touch</strong>
    </ButtonBase>
  );
};
