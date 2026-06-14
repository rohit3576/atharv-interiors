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
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
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
            <h3 className="text-2xl font-semibold text-white/90">
              We are committed to delivering high-quality interior and architectural solutions.
            </h3>
            <p className="text-muted-text text-lg italic border-l-4 border-primary pl-6 py-2">
              &quot;Quality workmanship matters to us. Providing exceptional service and ensuring customer satisfaction is at the heart of everything we do.&quot;
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <reason.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">{reason.title}</h4>
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
            className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl bg-primary text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <CheckCircle size={120} />
            </div>
            <h4 className="text-3xl font-bold mb-6 relative z-10">Why Clients Trust Us</h4>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="font-bold">23+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="font-bold">Established Since 2003</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="font-bold">5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="font-bold">Interior & Architectural Experts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
