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
      className="fixed bottom-24 right-6 z-40 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppFloating;
