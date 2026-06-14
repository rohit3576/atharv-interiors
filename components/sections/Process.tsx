"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { Search, PenTool, Layout, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    description: "We meet to discuss your vision, requirements, and budget to establish a solid design brief.",
    icon: Search,
  },
  {
    title: "Design & Concept",
    description: "Our experts create 2D/3D visualizations and material palettes tailored to your style.",
    icon: PenTool,
  },
  {
    title: "Planning & Quotation",
    description: "Detailed project timelines and transparent pricing are shared for your final approval.",
    icon: Layout,
  },
  {
    title: "Execution & Oversight",
    description: "Our skilled craftsmen bring the design to life with meticulous attention to detail.",
    icon: Wrench,
  },
  {
    title: "Final Handover",
    description: "Quality checks are completed, and we welcome you to your beautifully transformed space.",
    icon: CheckCircle,
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="How We Bring Your Vision To Life" 
          subtitle="Our Work Process" 
        />

        <div className="relative pt-8">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-primary border-4 border-background rounded-full z-10 -translate-x-1/2 flex items-center justify-center text-white shadow-xl">
                  <step.icon size={20} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <div className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
