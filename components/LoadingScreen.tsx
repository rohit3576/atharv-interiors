"use strict";

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-white italic">
                ATHARVA<span className="text-primary">.</span>
              </span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <motion.span 
              className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-text font-bold"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Designing Excellence
            </motion.span>
          </div>

          {/* Decorative Corner Accents */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20" 
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
