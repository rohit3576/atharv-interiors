"use strict";

import React from "react";
import { Phone } from "lucide-react";
import { companyInfo } from "@/data/company";

const StickyCall = () => {
  return (
    <a
      href={`tel:${companyInfo.phoneRaw}`}
      className="md:hidden fixed bottom-6 left-6 right-6 z-40 flex items-center justify-center gap-3 py-4 bg-primary text-white rounded-2xl font-bold shadow-2xl active:scale-95 transition-transform"
    >
      <Phone size={20} fill="currentColor" />
      <span>Call Now: {companyInfo.phone}</span>
    </a>
  );
};

export default StickyCall;
