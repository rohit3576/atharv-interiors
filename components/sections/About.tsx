"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../SectionHeading";

const features = [
  "23+ Years Experience",
  "Customized Designs",
  "Timely Project Delivery",
  "Premium Quality Materials",
  "Expert Craftsmanship",
  "Transparent Pricing",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Atharva Interiors Studio" 
                width={800} 
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="absolute bottom-8 left-8 z-20 glass p-6 rounded-2xl border border-white/10 hidden md:block">
              <p className="text-4xl font-bold text-primary">23+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-white">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <SectionHeading 
              title="We Create Spaces That Inspire Living" 
              subtitle="Our Legacy" 
              centered={false} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-text text-lg leading-relaxed">
                Founded in 2003, <strong>Atharva Interiors</strong> has been a pioneer in creating bespoke living and working spaces in Virar, Palghar, and Mumbai. With over two decades of experience, we blend architectural precision with interior elegance.
              </p>
              
              <p className="text-muted-text text-lg leading-relaxed">
                Our philosophy is simple: Your space should be a reflection of your journey. Whether it&apos;s a cozy home or a dynamic office, we ensure every corner is optimized for beauty, comfort, and functionality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-white/90 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="inline-block px-10 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold transition-all"
                >
                  Our Work Process
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
