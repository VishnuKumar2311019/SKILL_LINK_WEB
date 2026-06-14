import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'Graphic Design', path: '/services' },
    { name: 'Poster Creation', path: '/services' },
    { name: 'Video Editing', path: '/services' },
    { name: 'Content Creation', path: '/services' },
    { name: 'Social Media Management', path: '/services' },
    { name: 'Branding Support', path: '/services' },
  ];

  const socialLinks = [
    { icon: <FaTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaFacebookF size={18} />, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              {/* White typography version logo on dark background */}
              <div className="flex items-center gap-3 select-none filter brightness-0 invert">
                <Logo className="h-10 sm:h-12" />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Connecting Skills to Opportunities. Helping businesses, startups, and brands scale their online presence with premium creative solutions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-6 tracking-wide uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-6 tracking-wide uppercase">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-6 tracking-wide uppercase">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-sans">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" size={16} />
                <span>102 Creative Hub, Silicon Boulevard, Tech District</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary flex-shrink-0" size={16} />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" size={16} />
                <a href="mailto:hello@skilllink.com" className="hover:text-primary transition-colors">
                  hello@skilllink.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-slate-800 my-8" />

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} SkillLink. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
