"use strict";

"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";
import { motion } from "framer-motion";

const WhatsAppFloating = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.phoneRaw}?text=Hi Atharva Interiors, I'm interested in your interior design services.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 p-3 sm:p-4 bg-[#25D366]/20 backdrop-blur-xl border border-white/10 text-[#25D366] rounded-full shadow-2xl transition-all duration-300 hover:bg-[#25D366]/30 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <MessageCircle size={24} className="sm:w-[28px] sm:h-[28px] relative z-10" fill="currentColor" />
      </div>
    </motion.a>
  );
};

export default WhatsAppFloating;
