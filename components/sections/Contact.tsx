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
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Let's Build Your Dream Project" 
          subtitle="Contact Us" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-card border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all"
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="+91 99999 99999"
                    className="w-full px-6 py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/70">Email Address</label>
                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/70">Service Interested In</label>
                <select
                  {...register("service")}
                  className="w-full px-6 py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="Residential">Residential Interiors</option>
                  <option value="Commercial">Commercial Interiors</option>
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Architecture">Architecture</option>
                </select>
                {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/70">Project Details</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your space..."
                  className="w-full px-6 py-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none transition-all resize-none"
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary hover:bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
              >
                <Send size={20} />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-muted-text mb-1">Direct support and consultation</p>
                  <a href={`tel:${companyInfo.phoneRaw}`} className="text-xl font-bold text-white hover:text-primary transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Us</h4>
                  <p className="text-muted-text mb-1">Send us your project brief</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-xl font-bold text-white hover:text-primary transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Visit Our Studio</h4>
                  <p className="text-muted-text mb-1">Drop by for a coffee and design talk</p>
                  <p className="text-xl font-bold text-white leading-relaxed">
                    {companyInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
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
            
            <div className="text-center lg:text-left">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=19.470845090184813,72.80268367116494" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Get Directions to Office <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
