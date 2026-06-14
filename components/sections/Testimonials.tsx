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
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
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
              <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-center relative border border-border-custom shadow-2xl">
                <Quote className="absolute top-6 left-6 md:top-10 md:left-12 text-primary opacity-20 w-12 h-12 md:w-20 md:h-20" />
                
                <div className="flex justify-center gap-1.5 mb-8 md:mb-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary md:w-[24px]" />
                  ))}
                </div>

                <p className="text-xl md:text-3xl font-serif italic text-foreground leading-relaxed mb-10 md:mb-12 font-medium">
                  &quot;{testimonials[index].review}&quot;
                </p>

                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-primary">Verified Review</h4>
                  <p className="text-xs md:text-sm text-muted-text uppercase tracking-[0.2em] font-extrabold">
                    Trust Card • Happy Homeowner
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex absolute inset-y-1/2 w-full justify-between items-center pointer-events-none px-4">
            <button
              onClick={() => { setIsAutoPlaying(false); prevStep(); }}
              className="pointer-events-auto w-14 h-14 rounded-full border border-border-custom bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => { setIsAutoPlaying(false); nextStep(); }}
              className="pointer-events-auto w-14 h-14 rounded-full border border-border-custom bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all rounded-full ${
                i === index ? "w-12 bg-primary" : "w-4 bg-primary/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20 px-4">
          <p className="text-muted-text text-xs mb-4 sm:hidden font-bold uppercase tracking-widest">Swipe to read more</p>
          <a 
            href="https://www.justdial.com/Palghar/Atharva-Interiors-Next-To-Mgm-School-Virar-East/022PXX22-XX22-260305011813-L8K6_BZDET" 
            target="_blank"
            className="text-primary hover:text-secondary transition-colors text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase border-b-2 border-primary/20 pb-2 inline-block"
          >
            Read more reviews on Justdial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
