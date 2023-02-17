import { motion } from "framer-motion";

export function Toggle({ onTap, toggleDirection }: any) {
  return (
    <motion.div
      className="w-10 h-auto flex flex-start p-0.5 rounded-full cursor-pointer bg-[color:var(--bg-dip)] mix-blend-multiply"
      onTap={onTap}
    >
      <motion.div
        className="w-5 h-5  bg-white rounded-full"
        animate={{
          x: toggleDirection,
        }}
        transition={{
          type: "easeInOut",
          duration: 0.15,
        }}
      />
    </motion.div>
  );
}
