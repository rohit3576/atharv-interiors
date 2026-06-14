"use strict";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border-custom pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="relative h-12 w-48 block">
            <Image 
              src="/assets/Logo (2).png" 
              alt={companyInfo.name} 
              fill 
              className="object-contain object-left"
            />
          </Link>
          <p className="text-muted-text leading-relaxed max-w-xs">
            {companyInfo.tagline}. Leading interior designers and architects since {companyInfo.established}.
          </p>
          <div className="flex gap-4">
            <a href={companyInfo.socials.instagram} target="_blank" className="p-2 glass rounded-lg hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href={companyInfo.socials.facebook} target="_blank" className="p-2 glass rounded-lg hover:text-primary transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href={companyInfo.socials.linkedin} target="_blank" className="p-2 glass rounded-lg hover:text-primary transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="#home" className="text-muted-text hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-muted-text hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="#portfolio" className="text-muted-text hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="#faq" className="text-muted-text hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="#contact" className="text-muted-text hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Services</h4>
          <ul className="space-y-4 text-muted-text">
            <li>Interior Work</li>
            <li>Exterior Work</li>
            <li>Space Planning</li>
            <li>Carpentry Services</li>
            <li>Civil Work</li>
            <li>Renovation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-muted-text">
              <Phone className="text-primary shrink-0" size={20} />
              <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-primary transition-colors">{companyInfo.phone}</a>
            </li>
            <li className="flex gap-3 text-muted-text">
              <Mail className="text-primary shrink-0" size={20} />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors truncate">{companyInfo.email}</a>
            </li>
            <li className="flex gap-3 text-muted-text">
              <MapPin className="text-primary shrink-0" size={20} />
              <span>{companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-text">
        <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        <p>Designed with ❤️ for Atharva Interiors</p>
      </div>
    </footer>
  );
};

export default Footer;
