import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiEnvelope, HiPhone, HiMapPin, HiChatBubbleLeftRight, HiSparkles } from 'react-icons/hi2';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clientType: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.clientType) errors.clientType = 'Please select a profile';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Please provide a brief message';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        clientType: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-50/40 blur-[100px] pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contact SkillLink
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight">
            Let's Architect Your <br />Creative Digital Growth
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-sans mt-2">
            Ready to scale your branding, poster works, or video engagement? Drop our senior consultant squad a message or connect instantly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Grid Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Contacts & Map Vector) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {[
                { icon: <HiEnvelope className="text-primary text-xl" />, label: 'Email', value: 'hello@skilllink.com', href: 'mailto:hello@skilllink.com' },
                { icon: <HiPhone className="text-amber-500 text-xl" />, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
                { icon: <HiMapPin className="text-emerald-500 text-xl" />, label: 'Studio Office', value: '102 Creative Hub, Silicon Boulevard, Tech District', href: null },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-100/80 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-dark hover:text-primary transition-colors mt-0.5">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-dark mt-0.5 font-sans leading-relaxed">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Instant WhatsApp Quick Button */}
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl p-6 shadow-lg shadow-emerald-500/10 flex items-center justify-between border border-emerald-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <FaWhatsapp size={26} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-emerald-100 tracking-wide uppercase">Connect Instantly</span>
                  <span className="text-base font-bold font-display text-white">Chat on WhatsApp</span>
                </div>
              </div>
              <HiChatBubbleLeftRight size={24} className="text-emerald-100" />
            </motion.a>

            {/* Google Map Premium Vector Placeholder */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Studio Headquarters Map
              </span>
              <div className="w-full aspect-[4/3] rounded-2xl bg-slate-900 border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between">
                {/* Tech grid SVG vector map */}
                <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-35 select-none pointer-events-none">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Roads / Paths */}
                  <path d="M0 100 Q150 150 400 50" fill="none" stroke="#334155" strokeWidth="6" />
                  <path d="M100 0 L100 300" fill="none" stroke="#334155" strokeWidth="4" />
                  <path d="M280 0 L280 300" fill="none" stroke="#334155" strokeWidth="4" />
                  
                  {/* Glowing Radar */}
                  <circle cx="280" cy="120" r="16" fill="#2563eb" opacity="0.15" />
                  <circle cx="280" cy="120" r="8" fill="#2563eb" opacity="0.3" />
                  <circle cx="280" cy="120" r="3" fill="#2563eb" />
                </svg>

                {/* Styled Callout */}
                <div className="relative z-10 bg-slate-950/95 border border-slate-800 p-4 rounded-xl max-w-[240px] mt-auto self-start shadow-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">SkillLink Studio</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                    102 Creative Hub, Silicon Boulevard. Drop by for visual designs and video brainstorming!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Stateful Contact Form) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-md">
              <div className="mb-8">
                <h3 className="text-xl font-display font-black text-dark">Send Creative Inquiry</h3>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  Complete the fields below and our senior art director will reach out in 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center gap-6 py-12"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center text-2xl animate-pulse">
                      <HiSparkles />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-dark">Inquiry Sent Successfully!</h4>
                      <p className="text-sm text-slate-600 font-sans mt-2 max-w-md mx-auto">
                        Thank you for reaching out to SkillLink! Our senior managers are evaluating your project briefing, and we will get back to you with conceptual mood boards.
                      </p>
                    </div>
                    <Button onClick={() => setIsSubmitSuccess(false)} variant="outline" size="sm">
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                          formErrors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@mybusiness.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                          formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.email}</span>
                      )}
                    </div>

                    {/* Client Type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="clientType" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        I am representing a:
                      </label>
                      <select
                        id="clientType"
                        name="clientType"
                        value={formData.clientType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                          formErrors.clientType ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                        }`}
                      >
                        <option value="">-- Choose Profile --</option>
                        <option value="Small Business">Small Business</option>
                        <option value="Startup">Startup</option>
                        <option value="Student Project">Student</option>
                        <option value="Brand Company">Local Brand / Company</option>
                        <option value="Influencer">Influencer / Creator</option>
                      </select>
                      {formErrors.clientType && (
                        <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.clientType}</span>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Subject Brief
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Branding revamp / 5 Reels edits..."
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                          formErrors.subject ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {formErrors.subject && (
                        <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.subject}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Explain Your Project Goal & Deliverables Needed
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Tell us about your brand timelines, required aesthetics..."
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                          formErrors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant="primary" className="py-3.5 text-sm mt-2" icon={<HiSparkles />}>
                      Send Creative Request
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
