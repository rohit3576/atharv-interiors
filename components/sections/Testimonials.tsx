"use strict";

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "../SectionHeading";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep, isAutoPlaying]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setIsAutoPlaying(false);
      nextStep();
    } else if (info.offset.x > swipeThreshold) {
      setIsAutoPlaying(false);
      prevStep();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
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
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Real Stories" 
        />

        <div className="relative h-[480px] sm:h-[400px] flex items-center justify-center touch-pan-y">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute w-full max-w-4xl cursor-grab active:cursor-grabbing px-4"
            >
              <div className="glass p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center relative border border-white/10 shadow-2xl">
                <Quote className="absolute top-6 left-6 md:top-8 md:left-10 text-primary opacity-20 w-10 h-10 md:w-16 md:h-16" />
                
                <div className="flex justify-center gap-1 mb-6 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary md:w-[18px]" />
                  ))}
                </div>

                <p className="text-lg md:text-3xl font-serif italic text-white leading-relaxed mb-8 md:mb-10">
                  &quot;{testimonials[index].review}&quot;
                </p>

                <div className="space-y-1">
                  <h4 className="text-lg md:text-xl font-bold text-primary">Verified Review</h4>
                  <p className="text-xs md:text-sm text-muted-text uppercase tracking-widest font-semibold">
                    Trust Card • Happy Homeowner
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Hidden on small mobile, shown on tablet/desktop */}
          <div className="hidden sm:flex absolute inset-y-1/2 w-full justify-between items-center pointer-events-none">
            <button
              onClick={() => { setIsAutoPlaying(false); prevStep(); }}
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => { setIsAutoPlaying(false); nextStep(); }}
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1 transition-all rounded-full ${
                i === index ? "w-8 md:w-12 bg-primary" : "w-3 md:w-4 bg-white/10"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 px-4">
          <p className="text-muted-text text-xs mb-4 sm:hidden">Swipe left/right to read more reviews</p>
          <a 
            href="https://www.justdial.com/Palghar/Atharva-Interiors-Next-To-Mgm-School-Virar-East/022PXX22-XX22-260305011813-L8K6_BZDET" 
            target="_blank"
            className="text-muted-text hover:text-primary transition-colors text-[10px] md:text-sm font-bold tracking-widest uppercase border-b border-white/10 pb-1 inline-block"
          >
            Read more reviews on Justdial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
