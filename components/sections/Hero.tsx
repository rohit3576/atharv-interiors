"use strict";

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { companyInfo } from "@/data/company";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Reduced intensity for smoother mobile performance
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Background Image with Creative Mask */}
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay grayscale will-change-transform"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute inset-0 hero-glow" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="py-1 px-4 border border-primary/20 rounded-full text-primary font-bold text-xs tracking-[0.3em] uppercase bg-primary/5 backdrop-blur-sm">
              Est. {companyInfo.established}
            </span>
            <div className="h-20 w-[1px] bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9] italic">
            Atharva <br />
            <span className="text-gradient not-italic font-bold">Interiors</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-text max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            {companyInfo.tagline} with {companyInfo.experience} of crafting bespoke architectural narratives and luxury living spaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
            <a 
              href="#contact" 
              className="group relative px-10 py-5 bg-primary text-white rounded-full font-bold transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href={`tel:${companyInfo.phoneRaw}`}
              className="group flex items-center gap-2 text-white font-bold hover:text-primary transition-colors py-4 px-2"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              Direct Line
            </a>
          </div>
        </motion.div>

        {/* Stats Section Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10"
        >
          {companyInfo.stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-sm text-muted-text uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
