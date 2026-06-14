"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Star } from "lucide-react";
import SectionHeading from "../SectionHeading";

const features = [
  "23+ Years Experience",
  "End-to-End Solutions",
  "Timely Project Delivery",
  "Premium Quality Materials",
  "Expert Craftsmanship",
  "Transparent Pricing",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Founder Profile Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl aspect-[4/5]">
                  <Image 
                    src="/assets/profile.jpeg" 
                    alt="Vinod V Menon - Founder of Atharva Interiors" 
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 right-6 z-20 glass px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <Award className="text-primary" size={18} />
                    <span className="text-sm font-bold text-white whitespace-nowrap">23+ Years Experience</span>
                  </div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-3xl font-bold text-white mb-1">Vinod V Menon</h3>
                    <p className="text-primary font-medium tracking-wider uppercase text-sm">Founder & Visionary</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">Our Leadership</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Meet The Vision Behind <br className="hidden sm:block" />
                  <span className="text-primary">Atharva Interiors</span>
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star size={60} className="sm:w-[80px] sm:h-[80px] text-primary" />
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic relative z-10">
                  &quot;Quality workmanship matters to us. Providing exceptional service and ensuring customer satisfaction is at the heart of everything we do. Your dream home deserves exceptional design.&quot;
                </p>
                <div className="mt-4 sm:mt-6 flex items-center gap-4">
                  <div className="h-px w-8 sm:w-12 bg-primary/50" />
                  <span className="font-bold text-primary tracking-widest uppercase text-[10px] sm:text-xs">Vinod V Menon</span>
                </div>
              </div>
            </motion.div>
            </div>
            </div>

            {/* About Content Section */}
            <div className="max-w-7xl mx-auto mt-16 sm:mt-24 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <SectionHeading 
                title="We Create Spaces That Inspire Living" 
                subtitle="About Us" 
                centered={false} 
              />

              <div className="space-y-4 sm:space-y-6 text-muted-text text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>Atharva Interiors</strong> is a team of planners, architects, and interior designers dedicated to creating beautiful, functional, and timeless spaces.
                </p>

                <p>
                  With over 23 years of experience, we provide complete interior and exterior solutions including 2D and 3D home design, planning, false ceilings, waterproofing, POP work, wall finishes, renovation services, and architectural solutions.
                </p>

                <p>
                  We offer complete end-to-end services, from design and planning to material selection and execution. Whether modern, contemporary, urban, rustic, traditional, or minimalist, we create spaces tailored to our clients&apos; vision and lifestyle.
                </p>

                <p className="font-medium text-white/90">
                  We never compromise on quality and always strive to provide exceptional designs at a reasonable price. Your dream home deserves exceptional design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-white">{feature}</h4>
                </div>
              ))}

              {/* Trust Stats Box */}
              <div className="sm:col-span-2 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/20">
                 <div className="grid grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold mb-1">23+</div>
                      <div className="text-[10px] sm:text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</div>
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold mb-1">5-Star</div>
                      <div className="text-[10px] sm:text-sm font-medium opacity-80 uppercase tracking-wider">Rated Service</div>
                    </div>
                 </div>
              </div>
            </motion.div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default About;
