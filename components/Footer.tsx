"use strict";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-custom pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        {/* Company Info */}
        <div className="space-y-8">
          <Link href="/" className="relative h-20 w-[240px] block group">
            <Image 
              src="/assets/logo.png" 
              alt={companyInfo.name} 
              fill 
              className="object-contain object-left"
            />
          </Link>
          <div className="space-y-4">
            <h4 className="text-xl font-serif font-bold text-foreground leading-tight">
              {companyInfo.name}
            </h4>
            <p className="text-sm font-bold text-primary uppercase tracking-widest">
              {companyInfo.subTagline}
            </p>
            <p className="text-muted-text leading-relaxed font-medium">
              {companyInfo.tagline}
            </p>
          </div>
          <div className="flex gap-4">
            <a href={companyInfo.socials.instagram} target="_blank" className="p-3 bg-background border border-border-custom rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
              <FaInstagram size={20} />
            </a>
            <a href={companyInfo.socials.facebook} target="_blank" className="p-3 bg-background border border-border-custom rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
              <FaFacebookF size={20} />
            </a>
            <a href={companyInfo.socials.linkedin} target="_blank" className="p-3 bg-background border border-border-custom rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-lg font-extrabold uppercase tracking-tighter text-primary">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="#home" className="text-muted-text hover:text-primary font-bold transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-muted-text hover:text-primary font-bold transition-colors">About Us</Link></li>
            <li><Link href="#portfolio" className="text-muted-text hover:text-primary font-bold transition-colors">Portfolio</Link></li>
            <li><Link href="#faq" className="text-muted-text hover:text-primary font-bold transition-colors">FAQ</Link></li>
            <li><Link href="#contact" className="text-muted-text hover:text-primary font-bold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-8">
          <h4 className="text-lg font-extrabold uppercase tracking-tighter text-primary">Our Services</h4>
          <ul className="space-y-4 text-muted-text font-bold">
            <li className="hover:text-primary transition-colors cursor-pointer">• Interior Work</li>
            <li className="hover:text-primary transition-colors cursor-pointer">• Exterior Work</li>
            <li className="hover:text-primary transition-colors cursor-pointer">• Space Planning</li>
            <li className="hover:text-primary transition-colors cursor-pointer">• Carpentry Services</li>
            <li className="hover:text-primary transition-colors cursor-pointer">• Civil Work</li>
            <li className="hover:text-primary transition-colors cursor-pointer">• Renovation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h4 className="text-lg font-extrabold uppercase tracking-tighter text-primary">Get In Touch</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 text-muted-text">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={18} />
              </div>
              <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-primary font-bold transition-colors self-center">{companyInfo.phone}</a>
            </li>
            <li className="flex gap-4 text-muted-text">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={18} />
              </div>
              <a href={`mailto:${companyInfo.email}`} className="hover:text-primary font-bold transition-colors truncate self-center">{companyInfo.email}</a>
            </li>
            <li className="flex gap-4 text-muted-text">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={18} />
              </div>
              <span className="font-bold leading-relaxed">{companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-text font-bold">
        <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        <p>Designed with ❤️ for Atharva Interiors</p>
      </div>
    </footer>
  );
};

export default Footer;
