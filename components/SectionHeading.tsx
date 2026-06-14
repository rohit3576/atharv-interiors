"use strict";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 sm:mb-16 space-y-3 sm:space-y-4 px-4 ${centered ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm"
      >
        {subtitle}
      </motion.span>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-6xl font-serif leading-tight italic"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-0.5 sm:h-1 w-16 sm:w-24 bg-primary rounded-full mt-3 sm:mt-4 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
};

export default SectionHeading;
