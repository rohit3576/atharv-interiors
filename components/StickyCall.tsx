"use strict";

"use client";

import React from "react";
import { Phone } from "lucide-react";
import { companyInfo } from "@/data/company";
import { motion } from "framer-motion";

const StickyCall = () => {
  return (
    <motion.a
      href={`tel:${companyInfo.phoneRaw}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      className="md:hidden fixed bottom-4 left-4 z-40 flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-4 bg-primary/20 backdrop-blur-xl text-primary rounded-full font-bold shadow-2xl border border-white/10 transition-all duration-300 hover:bg-primary/30 group"
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
        <Phone size={14} className="sm:w-4 sm:h-4 relative z-10 text-white" fill="currentColor" />
      </div>
      <span className="text-xs sm:text-sm tracking-wide text-white/90">Call Expert</span>
    </motion.a>
  );
};

export default StickyCall;
