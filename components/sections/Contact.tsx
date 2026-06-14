"use strict";

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/company";
import SectionHeading from "../SectionHeading";
import { MapPin, Phone, Send, User, Mail } from "lucide-react";
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
    <section id="contact" className="section-padding bg-background">
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
            className="p-6 sm:p-12 rounded-[2.5rem] bg-white border border-border-custom shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-background border border-border-custom focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm sm:text-base font-medium"
                  />
                  {errors.name && <p className="text-[10px] sm:text-xs text-red-500 font-bold ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98231 90565"
                    className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-background border border-border-custom focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm sm:text-base font-medium"
                  />
                  {errors.phone && <p className="text-[10px] sm:text-xs text-red-500 font-bold ml-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-background border border-border-custom focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm sm:text-base font-medium"
                />
                {errors.email && <p className="text-[10px] sm:text-xs text-red-500 font-bold ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-widest ml-1">Service Interested In</label>
                <select
                  {...register("service")}
                  className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-background border border-border-custom focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none text-sm sm:text-base font-medium"
                >
                  <option value="">Select a service</option>
                  <option value="Residential">Interior Work</option>
                  <option value="Exterior">Exterior Work</option>
                  <option value="Space Planning">Space Planning</option>
                  <option value="Carpentry">Carpentry Services</option>
                  <option value="Civil">Civil Work</option>
                  <option value="Renovation">Renovation</option>
                </select>
                {errors.service && <p className="text-[10px] sm:text-xs text-red-500 font-bold ml-1">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-widest ml-1">Project Details</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your space..."
                  className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-background border border-border-custom focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none text-sm sm:text-base font-medium"
                />
                {errors.message && <p className="text-[10px] sm:text-xs text-red-500 font-bold ml-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 sm:py-6 bg-primary hover:bg-secondary text-white rounded-2xl font-extrabold flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 text-base sm:text-lg uppercase tracking-widest"
              >
                <Send size={22} />
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-10 sm:space-y-12">
              <div className="flex gap-6 sm:gap-8 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <User size={32} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold mb-1 uppercase tracking-tighter text-primary">The Proprietor</h4>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-tight">
                    {companyInfo.owner}
                  </p>
                  <p className="text-sm font-bold text-muted-text uppercase tracking-widest mt-1">{companyInfo.designation}</p>
                </div>
              </div>

              <div className="flex gap-6 sm:gap-8 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold mb-3 uppercase tracking-tighter text-primary">Get In Touch</h4>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={`tel:${companyInfo.phoneRaw}`} 
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-background border-2 border-primary text-primary rounded-xl font-extrabold hover:bg-primary hover:text-white transition-all text-sm sm:text-base uppercase tracking-widest"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-muted-text group cursor-pointer">
                     <Mail size={18} className="text-primary" />
                     <a href={`mailto:${companyInfo.email}`} className="text-base font-bold group-hover:text-primary transition-colors">{companyInfo.email}</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 sm:gap-8 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold mb-3 uppercase tracking-tighter text-primary">Visit Our Office</h4>
                  <p className="text-lg sm:text-2xl font-serif font-bold text-foreground leading-relaxed max-w-sm mb-6">
                    {companyInfo.address}
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Atharva+Interiors+Global+City+Virar+West" 
                    target="_blank" 
                    className="inline-flex items-center gap-3 text-primary font-extrabold hover:text-secondary transition-colors text-sm sm:text-base uppercase tracking-[0.2em] border-b-2 border-primary/20 pb-1"
                  >
                    Get Directions <Send size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="w-full aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
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
