import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineCheck } from 'react-icons/hi2';
import { FaPalette, FaVideo, FaBullhorn, FaFileImage, FaPenNib, FaBriefcase } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';

const Services = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Design', 'Video', 'Marketing'];

  const servicesData = [
    {
      id: 1,
      category: 'Design',
      title: 'Graphic Design',
      desc: 'High-end custom visual layouts, digital banners, marketing collateral, presentation designs, and web assets to elevate your brand presence.',
      icon: <FaPalette size={22} className="text-primary" />,
      deliverables: ['Custom Web Assets', 'Visual Banners & Ads', 'Business Decks', 'Print-Ready Visuals'],
      price: 'Starting at $199',
      mockupBg: 'bg-blue-600/10 border-blue-500/20',
      mockupIcon: <FaPalette size={32} className="text-primary animate-pulse" />,
    },
    {
      id: 2,
      category: 'Design',
      title: 'Poster Design',
      desc: 'Bespoke event posters, product launch flyers, custom digital flyers, and print assets engineered to capture immediate audience attention.',
      icon: <FaFileImage size={22} className="text-emerald-500" />,
      deliverables: ['High-Res Print Outputs', 'Web Layout Formats', 'Commercial Campaign Mockups', 'Custom Vector Assets'],
      price: 'Starting at $149',
      mockupBg: 'bg-emerald-600/10 border-emerald-500/20',
      mockupIcon: <FaFileImage size={32} className="text-emerald-500 animate-bounce-slow" />,
    },
    {
      id: 3,
      category: 'Video',
      title: 'Video Editing',
      desc: 'Cinematic commercial editing, dynamic micro-videos for TikTok/Reels, product teasers, corporate explainers, and high-impact sound design.',
      icon: <FaVideo size={22} className="text-amber-500" />,
      deliverables: ['Color Grading & VFX', 'Dynamic Text & Micro-subs', 'Royalty-Free Audio Sourcing', 'Vertical & Landscape Exports'],
      price: 'Starting at $299',
      mockupBg: 'bg-amber-600/10 border-amber-500/20',
      mockupIcon: <FaVideo size={32} className="text-amber-500 animate-pulse" />,
    },
    {
      id: 4,
      category: 'Marketing',
      title: 'Content Creation',
      desc: 'Engaging copywriting, educational articles, scriptwriting for videos, creative blogs, and customized caption systems aligned with your brand voice.',
      icon: <FaPenNib size={22} className="text-pink-500" />,
      deliverables: ['Custom Content Schedules', 'Slick Video Scripts', 'SEO-Optimized Copy', 'Unique Brand Tone Guides'],
      price: 'Starting at $179',
      mockupBg: 'bg-pink-600/10 border-pink-500/20',
      mockupIcon: <FaPenNib size={32} className="text-pink-500 animate-float" />,
    },
    {
      id: 5,
      category: 'Marketing',
      title: 'Social Media Management',
      desc: 'Strategic grid planning, multi-channel scheduling, data-backed community response, growth reporting, and regular performance optimization.',
      icon: <FaBullhorn size={22} className="text-violet-500" />,
      deliverables: ['Custom Growth Strategy', 'Interactive Post Calendars', 'Lead Engagement Monitoring', 'Bi-Weekly Stats Reports'],
      price: 'Starting at $399/mo',
      mockupBg: 'bg-violet-600/10 border-violet-500/20',
      mockupIcon: <FaBullhorn size={32} className="text-violet-500 animate-pulse" />,
    },
    {
      id: 6,
      category: 'Design',
      title: 'Branding & Support',
      desc: 'Complete corporate visual systems. Standardize your typography, logo usage, color palettes, visual mood boards, and complete design languages.',
      icon: <FaBriefcase size={22} className="text-indigo-500" />,
      deliverables: ['Official Identity Design', 'Flexible Color Theme Sets', 'Core Typography Standard', 'Brand Book PDF Deliverable'],
      price: 'Starting at $499',
      mockupBg: 'bg-indigo-600/10 border-indigo-500/20',
      mockupIcon: <FaBriefcase size={32} className="text-indigo-500 animate-bounce-slow" />,
    },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeTab === 'All') return true;
    return service.category === activeTab;
  });

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-50/40 blur-[100px] pointer-events-none" />

      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight">
            Premium Creative Services <br />Designed to Convert
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-sans mt-2">
            Explore our curated digital packages, managed by creative architects and executed by verified talent. Select a category below to filter.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-center">
        <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200/50 max-w-md w-full justify-between">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider w-[24%]"
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="activeServiceTab"
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/30 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className="h-full"
              >
                <Card hoverEffect={true} className="flex flex-col h-full justify-between gap-6 border-slate-200/50">
                  <div className="flex flex-col gap-5">
                    {/* Top Icon & Tag */}
                    <div className="flex justify-between items-center">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                        {service.icon}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-display font-bold text-dark">{service.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">{service.desc}</p>
                    </div>

                    {/* Styled Mockup Placeholder */}
                    <div className={`w-full aspect-[16/10] rounded-xl border flex flex-col items-center justify-center relative overflow-hidden select-none ${service.mockupBg}`}>
                      {service.mockupIcon}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-white/70 backdrop-blur-sm border border-white/50 px-3 py-1.5 rounded-lg">
                        <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">Asset Preview</span>
                        <span className="text-[9px] font-semibold text-slate-500 font-sans">{service.price}</span>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                        Included Deliverables:
                      </span>
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <HiOutlineCheck className="text-primary text-xs" />
                          <span className="text-xs font-semibold text-slate-700 font-sans">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <Button to="/contact" variant="primary" className="w-full mt-4 py-3 text-xs" icon={<HiOutlineSparkles />}>
                    Book Service Package
                  </Button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
