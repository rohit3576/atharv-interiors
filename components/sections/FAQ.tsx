"use strict";

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";
import SectionHeading from "../SectionHeading";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Common Questions" 
          subtitle="Support" 
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-border-custom bg-white overflow-hidden shadow-soft hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left group gap-4"
              >
                <span className={`text-lg sm:text-xl font-bold transition-colors leading-tight ${openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {faq.question}
                </span>
                <div className={`p-2.5 rounded-xl transition-all shrink-0 ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-base sm:text-lg text-muted-text leading-relaxed border-t border-border-custom pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
