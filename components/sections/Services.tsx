"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionHeading from "../SectionHeading";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Bespoke Design Solutions" 
          subtitle="Our Services" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/10">
                  <service.icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors italic leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
