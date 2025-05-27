"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Image from "next/image";

export function BackToTopButton() {
  const isScrolled = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-11 z-50 hover:opacity-50! transition-opacity! duration-150!"
          aria-label="Back to top"
        >
          <Image
            src="/images/back-to-top.svg"
            alt="Camera"
            width={40}
            height={40}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}