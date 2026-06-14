"use strict";

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "@/data/company";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 relative h-28 w-[340px]"
            >
              <Image 
                src="/assets/logo.png" 
                alt={companyInfo.name} 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-background rounded-full overflow-hidden relative border border-border-custom">
              <motion.div 
                className="absolute inset-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <motion.div 
              className="mt-8 flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm uppercase tracking-[0.4em] text-primary font-extrabold">
                {companyInfo.name}
              </span>
              <motion.span 
                className="text-[10px] uppercase tracking-[0.2em] text-muted-text font-bold"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {companyInfo.tagline}
              </motion.span>
            </motion.div>
          </div>

          {/* Decorative Corner Accents */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-12 left-12 w-20 h-20 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl" 
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-12 right-12 w-20 h-20 border-b-4 border-r-4 border-primary/20 rounded-br-3xl" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
