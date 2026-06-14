"use strict";

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/company";
import SectionHeading from "../SectionHeading";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const whatsappMessage = `Hello Atharva Interiors,\n\nI am ${data.name}.\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage: ${data.message}`;
    const link = formatWhatsAppLink(companyInfo.phoneRaw, whatsappMessage);
    window.open(link, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Let's Build Your Dream Project" 
          subtitle="Contact Us" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-card border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-white/70">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all text-sm sm:text-base"
                  />
                  {errors.name && <p className="text-[10px] sm:text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-white/70">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98231 90565"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all text-sm sm:text-base"
                  />
                  {errors.phone && <p className="text-[10px] sm:text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-white/70">Email Address</label>
                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all text-sm sm:text-base"
                />
                {errors.email && <p className="text-[10px] sm:text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-white/70">Service Interested In</label>
                <select
                  {...register("service")}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all appearance-none text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="Residential">Residential Interiors</option>
                  <option value="Commercial">Commercial Interiors</option>
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Architecture">Architecture</option>
                </select>
                {errors.service && <p className="text-[10px] sm:text-xs text-red-500">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-white/70">Project Details</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your space..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all resize-none text-sm sm:text-base"
                />
                {errors.message && <p className="text-[10px] sm:text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 bg-primary hover:bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 text-sm sm:text-base"
              >
                <Send size={18} />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="space-y-10 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Details</h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a 
                      href={`tel:${companyInfo.phoneRaw}`} 
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-lg sm:rounded-xl font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20 text-xs sm:text-sm"
                    >
                      <Phone size={16} /> Call Now
                    </a>
                    <a 
                      href={formatWhatsAppLink(companyInfo.phoneRaw, "Hello, I'm interested in your interior design services.")}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] text-white rounded-lg sm:rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-green-500/20 text-xs sm:text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Visit Our Office</h4>
                  <p className="text-xs sm:text-sm text-muted-text mb-3 sm:mb-4">Let&apos;s discuss your dream project in person.</p>
                  <p className="text-base sm:text-xl font-bold text-white leading-relaxed mb-4 sm:mb-6">
                    {companyInfo.address}
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Atharva+Interiors+Global+City+Virar+West" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-primary text-primary rounded-lg sm:rounded-xl font-bold hover:bg-primary hover:text-white transition-all text-xs sm:text-sm"
                  >
                    Get Directions <Send size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.431267440078!2d72.80268367116494!3d19.470845090184813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI4JzE1LjAiTiA3MsKwNDgnMDkuNyJF!5e0!3m2!1sen!2sin!4v1718361234567!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
