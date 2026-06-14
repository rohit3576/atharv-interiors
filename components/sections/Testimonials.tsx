"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "../SectionHeading";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Real Stories" 
        />

        <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="glass p-10 md:p-16 rounded-[3rem] text-center relative border border-white/10 shadow-2xl">
                <Quote className="absolute top-8 left-10 text-primary opacity-20" size={60} />
                
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-xl md:text-3xl font-serif italic text-white leading-relaxed mb-10">
                  &quot;{testimonials[index].review}&quot;
                </p>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-primary">Verified Review</h4>
                  <p className="text-sm text-muted-text uppercase tracking-widest font-semibold">
                    Trust Card • Happy Homeowner
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 md:bottom-auto md:inset-y-1/2 md:w-full flex justify-between items-center px-4 md:px-0 pointer-events-none">
            <button
              onClick={prevStep}
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextStep}
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1 transition-all rounded-full ${
                i === index ? "w-12 bg-primary" : "w-4 bg-white/10"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://www.justdial.com/Palghar/Atharva-Interiors-Next-To-Mgm-School-Virar-East/022PXX22-XX22-260305011813-L8K6_BZDET" 
            target="_blank"
            className="text-muted-text hover:text-primary transition-colors text-sm font-bold tracking-widest uppercase border-b border-white/10 pb-1"
          >
            Read more reviews on Justdial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
