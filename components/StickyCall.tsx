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
      className="md:hidden fixed bottom-6 left-6 z-40 flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full font-bold shadow-2xl border border-white/10 backdrop-blur-md transition-transform"
    >
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <Phone size={16} fill="currentColor" />
      </div>
      <span className="text-sm tracking-wide">Call Expert</span>
    </motion.a>
  );
};

export default StickyCall;
