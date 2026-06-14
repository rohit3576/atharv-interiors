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
    <div className={`mb-12 sm:mb-20 space-y-4 px-4 ${centered ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-extrabold tracking-[0.3em] uppercase text-xs sm:text-sm"
      >
        {subtitle}
      </motion.span>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-foreground"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1.5 w-24 bg-primary rounded-full mt-4 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
};

export default SectionHeading;
