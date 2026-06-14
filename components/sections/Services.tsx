"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionHeading from "../SectionHeading";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Bespoke Design Solutions" 
          subtitle="Our Services" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/10">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors italic">
                  {service.title}
                </h3>
                <p className="text-muted-text leading-relaxed font-light">
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
