"use strict";

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { Maximize2, X } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Our Design Gallery" 
          subtitle="Portfolio" 
        />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                activeCategory === category 
                ? "bg-primary border-primary text-white" 
                : "border-white/10 text-muted-text hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8 px-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="group relative break-inside-avoid rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-card border border-white/5 cursor-pointer"
              >
                <div className="relative w-full h-full aspect-[3/4] group-even:aspect-[4/5]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-6 sm:p-10">
                    <span className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-4 sm:mb-6 italic leading-tight">{item.title}</h3>
                    <button 
                      onClick={() => setSelectedImage(item.image)}
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                      <Maximize2 size={20} className="sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
            >
              <X size={40} />
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image 
                src={selectedImage} 
                alt="Selected portfolio image" 
                fill 
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
