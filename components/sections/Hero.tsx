"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/company";
import { Phone, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Est. {companyInfo.established}
              </motion.div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-foreground tracking-tight leading-[1.1]">
                ATHARVA <br />
                <span className="text-primary font-bold not-italic">INTERIORS</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground/80 italic">
                {companyInfo.subTagline}
              </h2>
              
              <p className="text-lg text-muted-text max-w-lg leading-relaxed">
                23+ Years of Excellence in Interior Design, Architecture, Renovation & Space Planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${companyInfo.phoneRaw}`}
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 bg-white text-secondary border-2 border-secondary rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-secondary hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border-custom">
               <div className="flex items-center gap-2 text-sm font-bold text-foreground/70">
                 <CheckCircle2 className="text-primary" size={18} />
                 <span>Since 2003</span>
               </div>
               <div className="flex items-center gap-2 text-sm font-bold text-foreground/70">
                 <CheckCircle2 className="text-primary" size={18} />
                 <span>23+ Years Exp.</span>
               </div>
               <div className="flex items-center gap-2 text-sm font-bold text-foreground/70">
                 <CheckCircle2 className="text-primary" size={18} />
                 <span>Pro Team</span>
               </div>
            </div>
          </motion.div>

          {/* Right Content - Video Background for Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 hidden lg:block h-full"
          >
            <div className="relative aspect-video sm:aspect-square lg:aspect-[4/5] rounded-[2rem] sm:rounded-[4rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white group bg-muted">
              {/* Optimized Video Background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                poster="/assets/site5.jpeg"
              >
                <source src="/assets/Video 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Architectural Frame Overlay (Subtle) */}
              <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
            </div>

            {/* Decorative Blueprint Lines */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-[3rem] pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-[3rem] pointer-events-none hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
