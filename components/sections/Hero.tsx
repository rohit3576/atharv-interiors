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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920" 
                alt="Luxury Interior" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Experience Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-border-custom hidden md:block"
            >
              <div className="text-4xl font-bold text-primary mb-1">23+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-text">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
