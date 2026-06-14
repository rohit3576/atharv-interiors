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
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
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
                className="object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                priority
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <motion.div 
              className="mt-6 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">
                Atharva Interiors
              </span>
              <motion.span 
                className="text-[9px] uppercase tracking-[0.3em] text-muted-text/60 font-medium"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Transforming Spaces Into Beautiful Living Experiences
              </motion.span>
            </motion.div>
          </div>

          {/* Decorative Corner Accents */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-10 left-10 w-20 h-20 border-t border-l border-primary/20" 
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-primary/20" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
