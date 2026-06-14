"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, Briefcase, Target, Headphones, CheckCircle } from "lucide-react";
import SectionHeading from "../SectionHeading";

const reasons = [
  {
    title: "Punctuality",
    description: "We respect your time and ensure project delivery within the agreed timelines.",
    icon: Clock,
  },
  {
    title: "Commitment",
    description: "Our word is our bond. We stay committed to your vision until the final handover.",
    icon: Shield,
  },
  {
    title: "Professionalism",
    description: "Expert project management and transparent communication at every step.",
    icon: Briefcase,
  },
  {
    title: "Accuracy",
    description: "Meticulous attention to detail and precision in every design and execution detail.",
    icon: Target,
  },
  {
    title: "Dedicated Support",
    description: "Continuous support and assistance throughout the design and execution process.",
    icon: Headphones,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <SectionHeading 
            title="Why Choose Atharva Interiors" 
            subtitle="Our Commitment" 
            centered={false}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-foreground">
              We are committed to delivering high-quality interior and architectural solutions.
            </h3>
            <p className="text-muted-text text-lg italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl font-serif">
              &quot;Quality workmanship matters to us. Providing exceptional service and ensuring customer satisfaction is at the heart of everything we do.&quot;
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-border-custom shadow-soft hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-primary/20">
                <reason.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{reason.title}</h4>
              <p className="text-muted-text leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}

          {/* Trust Highlights Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1 p-10 rounded-[2.5rem] bg-secondary text-white flex flex-col justify-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle size={140} />
            </div>
            <h4 className="text-3xl font-bold mb-8 relative z-10 font-serif">Why Clients Trust Us</h4>
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-lg font-bold">23+ Years Experience</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-lg font-bold">Established Since 2003</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-lg font-bold">5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-lg font-bold">Interior & Architectural Experts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
