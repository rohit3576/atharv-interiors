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
      <div className="max-w-3xl mx-auto">
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
              className="rounded-2xl border border-white/5 bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-primary" : "text-white hover:text-primary"}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-lg transition-all ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-white/5 text-muted-text"}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
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
                    <div className="px-6 pb-6 text-muted-text leading-relaxed border-t border-white/5 pt-4">
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
