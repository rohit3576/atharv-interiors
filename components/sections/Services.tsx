"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionHeading from "../SectionHeading";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Bespoke Design Solutions" 
          subtitle="Our Services" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border-t-4 border-t-primary border-x border-b border-border-custom shadow-soft hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/10">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-primary transition-colors italic leading-tight">
                  {service.title}
                </h3>
                <p className="text-base text-muted-text leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
