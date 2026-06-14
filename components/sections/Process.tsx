"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { Search, PenTool, Layout, Wrench, CheckCircle, ArrowDownRight, ArrowDownLeft } from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    description: "We meet to discuss your vision, requirements, and budget to establish a solid design brief.",
    icon: Search,
    color: "from-[#8CCB58] to-[#6FBF4B]",
  },
  {
    title: "Design & Concept",
    description: "Our experts create 2D/3D visualizations and material palettes tailored to your style.",
    icon: PenTool,
    color: "from-[#6FBF4B] to-[#A5D66F]",
  },
  {
    title: "Planning & Quotation",
    description: "Detailed project timelines and transparent pricing are shared for your final approval.",
    icon: Layout,
    color: "from-[#A5D66F] to-[#8CCB58]",
  },
  {
    title: "Execution & Oversight",
    description: "Our skilled craftsmen bring the design to life with meticulous attention to detail.",
    icon: Wrench,
    color: "from-[#8CCB58] to-[#6FBF4B]",
  },
  {
    title: "Final Handover",
    description: "Quality checks are completed, and we welcome you to your beautifully transformed space.",
    icon: CheckCircle,
    color: "from-[#6FBF4B] to-[#A5D66F]",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8CCB58 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading 
          title="The Path To Your Dream Space" 
          subtitle="Our Journey" 
        />

        <div className="relative mt-20">
          {/* Vertical Path Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary to-primary/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 md:space-y-40">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number Background */}
                <div className={`absolute -top-12 md:top-1/2 md:-translate-y-1/2 ${
                  index % 2 === 0 ? "right-0 md:right-[55%]" : "left-0 md:left-[55%]"
                } text-[80px] md:text-[200px] font-extrabold text-primary opacity-[0.03] pointer-events-none select-none`}>
                  0{index + 1}
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[45%]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-border-custom shadow-soft hover:shadow-2xl transition-all relative group overflow-hidden"
                  >
                    {/* Architectural Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-xl transition-all group-hover:w-12 group-hover:h-12 group-hover:border-primary" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl transition-all group-hover:w-12 group-hover:h-12 group-hover:border-primary" />
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                      <step.icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-foreground leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-text text-lg leading-relaxed font-medium">
                      {step.description}
                    </p>
                    
                    <div className="mt-8 h-1 w-12 bg-primary/20 group-hover:w-full transition-all duration-700" />
                  </motion.div>
                </div>

                {/* Central Connector Circle */}
                <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-xl">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl md:text-2xl">
                     {index + 1}
                   </div>
                   
                   {/* Directional Arrows for Desktop */}
                   <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${
                     index % 2 === 0 ? "-left-12 text-primary" : "-right-12 text-primary"
                   }`}>
                     {index % 2 === 0 ? <ArrowDownLeft size={32} /> : <ArrowDownRight size={32} />}
                   </div>
                </div>

                {/* Empty space for grid alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
