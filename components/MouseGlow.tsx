"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[9998] opacity-50"
      animate={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 118, 110, 0.08), transparent 80%)`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
};

export default MouseGlow;
