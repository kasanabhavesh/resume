"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  /** Animate on mount instead of waiting for scroll-into-view (use for above-the-fold sections). */
  immediate?: boolean;
};

export function Reveal({ children, delay = 0, immediate = false }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={immediate ? undefined : { once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
