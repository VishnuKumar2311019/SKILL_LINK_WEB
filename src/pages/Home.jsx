import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles, HiBolt, HiCheckCircle, HiArrowTrendingUp } from 'react-icons/hi2';
import { FaPlay, FaQuoteLeft, FaRegFileAlt, FaVideo, FaPalette } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const logos = [
    { name: 'Stripe', logo: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { name: 'Linear', logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { name: 'Framer', logo: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { name: 'Figma', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { name: 'Vercel', logo: 'https://images.unsplash.com/photo-1618005198143-e528346d9a59?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  ];

  const services = [
    {
      title: 'Graphic Design',
      desc: 'Premium identity kits, visual communications, guidelines, and custom prints.',
      icon: <FaPalette className="text-primary text-2xl" />,
      tag: 'Creative',
    },
    {
      title: 'Video Editing',
      desc: 'Cinematic ads, vertical micro-videos, explainer stories, and motion effects.',
      icon: <FaVideo className="text-amber-500 text-2xl" />,
      tag: 'Production',
    },
    {
      title: 'Branding & Identity',
      desc: 'Distinctive design languages, color guidelines, typography structures, and assets.',
      icon: <HiSparkles className="text-indigo-500 text-2xl" />,
      tag: 'Identity',
    },
  ];

  const portfolios = [
    {
      title: 'Neon Catalyst Campaign',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Vanguard Film Teaser',
      category: 'Video Editing',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Vibe Social Brand Launch',
      category: 'Poster & SMM',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    },
  ];

  const testimonials = [
    {
      quote: 'SkillLink completely reimagined our brand aesthetic. The turnaround time was astonishing, and the visual quality is easily worth triple what they charge.',
      author: 'Marcus Aurel',
      role: 'CEO, Catalyst AI',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    {
      quote: 'As an influencer, my content needs to grab eyes instantly. SkillLinks video editors delivered dynamic vertical clips that doubled my engagement rates.',
      author: 'Aria Bennett',
      role: 'Lifestyle Creator',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-100/30 blur-[130px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center self-center lg:self-start gap-2 bg-blue-50 border border-blue-100 text-primary px-4 py-1.5 rounded-full text-xs font-semibold">
              <HiSparkles size={14} />
              <span>Next-Gen Digital Creative Partner</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark tracking-tight leading-[1.1] font-display"
            >
              Connecting <span className="text-primary relative inline-block">Skills</span> to <span className="text-amber-500">Opportunities</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0"
            >
              Helping startups, small businesses, and creators scale their presence with premium, agency-grade digital solutions and custom visual designs.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button to="/contact" size="lg" variant="primary" icon={<HiArrowRight />}>
                Get Started
              </Button>
              <Button to="/services" size="lg" variant="outline">
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* Hero Right Dashboard Mockup SVG */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Premium Floating SVGs */}
              <div className="absolute top-10 left-[-20px] w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-xl flex flex-col items-center justify-center gap-1.5 animate-bounce-slow z-20 p-3 select-none">
                <FaPalette className="text-primary text-xl" />
                <span className="text-[10px] font-bold text-dark">UI Design</span>
                <div className="w-10 h-1 bg-primary/20 rounded-full" />
              </div>

              <div className="absolute bottom-16 right-[-20px] w-28 h-28 rounded-2xl bg-dark text-white shadow-2xl flex flex-col justify-between p-4 animate-float z-20 select-none">
                <div className="flex justify-between items-center">
                  <FaVideo className="text-accent text-lg" />
                  <span className="text-[9px] bg-slate-800 text-accent font-semibold px-1.5 py-0.5 rounded">Render</span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 block mb-1">Timeline</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-1.5 bg-primary rounded" />
                    <div className="w-6 h-1.5 bg-accent rounded" />
                    <div className="w-3 h-1.5 bg-slate-600 rounded" />
                  </div>
                </div>
              </div>

              {/* Main SVG Board */}
              <svg viewBox="0 0 500 400" className="w-full h-auto drop-shadow-2xl rounded-2xl bg-slate-900 border border-slate-800/80 p-1">
                {/* Header bar */}
                <rect x="0" y="0" width="500" height="40" fill="#1e293b" rx="8" />
                <circle cx="20" cy="20" r="6" fill="#ef4444" />
                <circle cx="40" cy="20" r="6" fill="#eab308" />
                <circle cx="60" cy="20" r="6" fill="#22c55e" />
                <rect x="120" y="10" width="260" height="20" rx="10" fill="#0f172a" opacity="0.6" />

                {/* Dashboard elements */}
                <rect x="25" y="65" width="210" height="150" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <text x="45" y="95" fill="#f8fafc" fontFamily="Poppins" fontSize="14" fontWeight="bold">Campaign Stats</text>
                <line x1="45" y1="120" x2="215" y2="120" stroke="#1e293b" strokeWidth="2" />
                <circle cx="70" cy="165" r="25" fill="none" stroke="#334155" strokeWidth="6" />
                <circle cx="70" cy="165" r="25" fill="none" stroke="#2563eb" strokeWidth="6" strokeDasharray="100 157" />
                <text x="110" y="160" fill="#94a3b8" fontSize="11" fontFamily="Inter">Engagement Rate</text>
                <text x="110" y="180" fill="#f8fafc" fontSize="16" fontFamily="Poppins" fontWeight="bold">94.8%</text>

                {/* Grid cards */}
                <rect x="260" y="65" width="210" height="65" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="295" cy="97" r="16" fill="#1e293b" />
                <path d="M290 97h10M295 92v10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                <text x="325" y="90" fill="#94a3b8" fontSize="10" fontFamily="Inter">Tasks Finished</text>
                <text x="325" y="110" fill="#f8fafc" fontSize="14" fontFamily="Poppins" fontWeight="bold">12 / 12</text>

                <rect x="260" y="150" width="210" height="65" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="295" cy="182" r="16" fill="#1e293b" />
                <path d="M291 182l3 3 5-6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <text x="325" y="175" fill="#94a3b8" fontSize="10" fontFamily="Inter">Project Health</text>
                <text x="325" y="195" fill="#22c55e" fontSize="14" fontFamily="Poppins" fontWeight="bold">Excellent</text>

                {/* Creative timeline visual */}
                <rect x="25" y="240" width="445" height="135" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <text x="45" y="270" fill="#f8fafc" fontFamily="Poppins" fontSize="13" fontWeight="bold">Project Timeline</text>
                
                {/* Horizontal timeline bar */}
                <rect x="45" y="295" width="405" height="25" rx="6" fill="#1e293b" />
                <rect x="45" y="295" width="160" height="25" rx="6" fill="#2563eb" />
                <rect x="205" y="295" width="140" height="25" rx="6" fill="#fbbf24" opacity="0.9" />
                <text x="80" y="312" fill="#ffffff" fontSize="9" fontFamily="Inter" fontWeight="bold">Graphic Brief</text>
                <text x="235" y="312" fill="#0f172a" fontSize="9" fontFamily="Inter" fontWeight="bold">Video Render</text>
                
                <circle cx="45" cy="350" r="5" fill="#2563eb" />
                <line x1="50" y1="350" x2="445" y2="350" stroke="#334155" strokeWidth="2" />
                <circle cx="205" cy="350" r="5" fill="#fbbf24" />
                <circle cx="345" cy="350" r="5" fill="#cbd5e1" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-slate-200/50 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Empowering Growth for Top Innovators & Startups
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:opacity-60 transition-opacity duration-300">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-7 w-7 rounded-full object-cover filter contrast-125"
                />
                <span className="font-display font-bold text-slate-800 text-lg">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black leading-tight">
            High-Impact Creative Capabilities
          </h2>
          <p className="text-slate-600 font-sans leading-relaxed">
            From modern web graphics to cinema-grade video sequences, we bridge the gap between creative execution and business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <Card key={idx} delay={idx * 0.1} className="flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {svc.icon}
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-blue-50 self-start px-2.5 py-0.5 rounded-full">
                  {svc.tag}
                </span>
                <h3 className="text-xl font-display font-bold">{svc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{svc.desc}</p>
              </div>
              <Button to="/services" variant="minimal" className="self-start inline-flex items-center gap-1">
                Learn More <HiArrowRight size={14} />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-slate-900 text-white py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Recent Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
                Featured Creative Work
              </h2>
            </div>
            <Button to="/portfolio" variant="gold">
              View Full Gallery
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolios.map((port, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={port.image}
                  alt={port.title}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    {port.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">
                    {port.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              The SkillLink Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black leading-tight">
              Why Forward-Thinking Brands Choose Us
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              We operate at the convergence of expert mentorship and highly driven student talent, delivering state-of-the-art results without the high price tags of corporate creative firms.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { title: 'Affordable Innovation', desc: 'Premium-tier results calibrated perfectly to startup and small business budgets.' },
                { title: 'Mentored Quality Control', desc: 'Every design, copy, and layout is scrutinized by senior creative consultants.' },
                { title: 'Lightning Fast Deployment', desc: 'Agile visual design workflows that respect your release schedules.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <HiCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-dark text-sm">{item.title}</span>
                    <span className="text-xs text-slate-500 font-sans leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <HiBolt size={24} />, title: 'Rapid Execution', count: '48h', text: 'Average design delivery timeframe.' },
              { icon: <HiArrowTrendingUp size={24} />, title: 'Scalable Growth', count: '3.4x', text: 'Average increase in social footprint.' },
              { icon: <HiSparkles size={24} />, title: 'Curated Talent', count: '100%', text: 'Checked, certified creative minds.' },
              { icon: <FaRegFileAlt size={22} />, title: 'Active Projects', count: '120+', text: 'Creative branding kits successfully shipped.' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center border border-blue-100">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-black text-dark">{stat.count}</span>
                  <span className="text-sm font-semibold text-slate-800 font-display mt-0.5">{stat.title}</span>
                  <span className="text-xs text-slate-500 font-sans mt-1 leading-relaxed">{stat.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white border-y border-slate-200/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black leading-tight">
              Backed by Phenomenal Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <Card key={idx} hoverEffect={true} className="flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <FaQuoteLeft className="text-primary/20 text-3xl" />
                  <p className="text-base text-slate-700 italic leading-relaxed font-sans">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <img
                    src={test.img}
                    alt={test.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-dark text-sm">{test.author}</span>
                    <span className="text-xs text-slate-500 font-sans">{test.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-dark text-white p-8 md:p-16 shadow-2xl border border-slate-800"
        >
          {/* Decorative shapes */}
          <div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-[-50%] left-[-20%] w-[350px] h-[350px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col gap-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Launch Your Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-white">
              Ready to Accelerate Your Digital Impact?
            </h2>
            <p className="text-slate-300 font-sans leading-relaxed text-base max-w-xl">
              Connect with our creative core today. Get state-of-the-art designs, edits, and brand campaigns designed to win.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Button to="/contact" variant="gold" size="lg">
                Start Project Now
              </Button>
              <Button to="/about" variant="white" size="lg">
                Meet the Team
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
