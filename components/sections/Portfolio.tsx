"use strict";

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { Maximize2, X, Plus } from "lucide-react";

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const filteredItems = useMemo(() => {
    const filtered = portfolioItems.filter(item => 
      activeCategory === "All" || item.category === activeCategory
    );
    // Reset display count when category changes
    return filtered;
  }, [activeCategory]);

  // Reset display count whenever category changes
  React.useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, displayCount);
  const hasMore = displayCount < filteredItems.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + LOAD_MORE_COUNT);
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Our Design Gallery" 
          subtitle="Portfolio" 
        />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-20 px-4">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all border-2 ${
                activeCategory === category 
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                : "border-border-custom text-muted-text hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-10 space-y-6 sm:space-y-10 px-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative break-inside-avoid rounded-[2.5rem] overflow-hidden bg-white border border-border-custom shadow-soft cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="relative w-full h-full aspect-[3/4] group-even:aspect-[4/5]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Refined Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px]" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50">
                      <span className="text-primary font-extrabold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                        {item.category}
                      </span>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground italic leading-tight">{item.title}</h3>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(item.image);
                          }}
                          className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all shrink-0 shadow-lg shadow-primary/20"
                        >
                          <Maximize2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 md:mt-24"
          >
            <button
              onClick={handleLoadMore}
              className="group flex items-center gap-3 px-10 py-5 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-2xl font-extrabold transition-all shadow-lg hover:shadow-primary/20 uppercase tracking-widest"
            >
              <Plus size={20} className="group-hover:rotate-90 transition-transform" />
              Load More Works
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors bg-white/10 p-3 rounded-full backdrop-blur-md"
            >
              <X size={32} />
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image 
                src={selectedImage} 
                alt="Selected portfolio image" 
                fill 
                className="object-contain rounded-3xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
