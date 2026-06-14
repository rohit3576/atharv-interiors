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
      className="md:hidden fixed bottom-4 left-4 z-40 flex items-center justify-center p-3 bg-primary/20 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 transition-all duration-300 hover:bg-primary/30 group"
      aria-label="Call Expert"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
        <span className="text-2xl relative z-10">📞</span>
      </div>
    </motion.a>
  );
};

export default StickyCall;
