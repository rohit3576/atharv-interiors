"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Star, Quote } from "lucide-react";
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
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Founder Profile Section - Image First */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group h-[500px] md:h-[600px]">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 blur-2xl" />
                
                {/* Primary Image (Larger) */}
                <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl z-10">
                  <Image 
                    src="/assets/profile2.jpeg" 
                    alt="Vinood Kumar Menon - Proprietor" 
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Secondary Image (Smaller/Staggered) */}
                <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl z-20">
                  <Image 
                    src="/assets/profile.jpeg" 
                    alt="Vinood Kumar Menon - On Site" 
                    fill
                    className="object-cover object-top"
                  />
                  {/* Name Overlay on the overlapping image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <h3 className="text-xl font-bold text-white mb-0.5">Vinood Kumar Menon</h3>
                    <p className="text-primary font-bold tracking-wider uppercase text-[10px]">Proprietor & Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-primary font-extrabold uppercase tracking-[0.2em] text-sm">Meet The Vision</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
                  Meet The Vision Behind <br />
                  <span className="text-primary">Atharva Interiors</span>
                </h2>
              </div>
              
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#0f5132] text-white shadow-2xl relative overflow-hidden group border-4 border-white/10">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star size={100} className="text-white" />
                </div>
                <div className="relative z-10">
                  <Quote className="text-primary-foreground/20 w-12 h-12 mb-6" />
                  <p className="text-xl sm:text-2xl leading-relaxed italic font-serif">
                    &quot;Quality workmanship matters to us. Providing exceptional service and ensuring customer satisfaction is at the heart of everything we do. Your dream home deserves exceptional design.&quot;
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px w-12 bg-white/30" />
                    <div>
                      <span className="block font-bold tracking-widest uppercase text-sm">Vinood Kumar Menon</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">Proprietor & Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <SectionHeading 
              title="Creating Spaces That Inspire Living" 
              subtitle="About Us" 
              centered={false} 
            />
            
            <div className="space-y-6 text-muted-text text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">Atharva Interiors</strong> is a team of planners, architects, and interior designers dedicated to creating beautiful, functional, and timeless spaces.
              </p>
              
              <p>
                With over 23 years of experience, we provide complete interior and exterior solutions including 2D and 3D home design, planning, false ceilings, waterproofing, POP work, wall finishes, renovation services, and architectural solutions.
              </p>

              <p>
                We offer complete end-to-end services, from design and planning to material selection and execution. Whether modern, contemporary, urban, rustic, traditional, or minimalist, we create spaces tailored to our clients&apos; vision and lifestyle.
              </p>

              <p className="font-bold text-primary bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                We never compromise on quality and always strive to provide exceptional designs at a reasonable price. Your dream home deserves exceptional design.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-3xl bg-white border border-border-custom shadow-soft hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h4>
              </div>
            ))}

            {/* Trust Stats Box */}
            <div className="sm:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/20">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold mb-1">23+</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold mb-1">5-Star</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Rated Service</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
