"use strict";

"use client";

import React from "react";
import { companyInfo } from "@/data/company";
import { motion } from "framer-motion";

const StickyCall = () => {
  return (
    <motion.a
      href={`tel:${companyInfo.phoneRaw}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      className="md:hidden fixed bottom-4 left-4 z-40 flex items-center justify-center p-4 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-primary/20 transition-all duration-300 group"
      aria-label="Call Expert"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
        <span className="text-2xl relative z-10">📞</span>
      </div>
    </motion.a>
  );
};

export default StickyCall;
