import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiBriefcase, HiCheckCircle, HiArrowUpTray, HiTrash } from 'react-icons/hi2';
import Button from '../components/Button';
import Card from '../components/Card';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    portfolio: '',
    message: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const roles = [
    {
      title: 'Graphic Design Intern',
      type: 'Internship (Remote / Hybrid)',
      desc: 'Create cutting-edge vector assets, layout concepts, and visual advertising for hot startups. Core mentorship by veteran directors.',
      requirements: ['Enrolled in Design or Fine Arts major', 'Proficient in Figma, Illustrator, or Photoshop', 'Stellar portfolio showcasing modern typography'],
    },
    {
      title: 'Video Editor & Animator',
      type: 'Contract / Project-based',
      desc: 'Craft punchy, high-retention marketing clips and corporate explainers. Build vertical templates for micro-influencer channels.',
      requirements: ['Expertise in Premiere Pro, After Effects, or Resolve', 'Keen understanding of video pacing & audio sync', 'Able to hit 48h turnaround timelines'],
    },
    {
      title: 'Social Media & Brand Associate',
      type: 'Internship (Hybrid)',
      desc: 'Plan, draft, schedule, and measure multi-channel campaigns. Engage with digital startup founders and write engaging copy.',
      requirements: ['Exceptional written English & caption skills', 'Knowledge of Instagram, LinkedIn, & TikTok trends', 'Analytical mindset to compile bi-weekly reports'],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (formErrors.file) {
        setFormErrors((prev) => ({ ...prev, file: '' }));
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.role) errors.role = 'Please select a position';
    if (!selectedFile) errors.file = 'Please upload your resume';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitSuccess(true);
      // Reset form states
      setFormData({
        name: '',
        email: '',
        role: '',
        portfolio: '',
        message: '',
      });
      setSelectedFile(null);
    }
  };

  const scrollToForm = (roleTitle) => {
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-50/40 blur-[100px] pointer-events-none" />

      {/* Header Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Careers at SkillLink
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight">
            Elevate Your Talent, <br />Kickstart Your Career
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-sans mt-2">
            Are you a student creator, designer, editor, or writer eager to build commercial portfolios and get paid for elite digital projects? Join the squad.
          </p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Mentorship',
              desc: 'Every deliverable is scrutinized and guided by veteran art directors. You will learn more in 3 months here than in a year of classes.',
            },
            {
              title: 'Elite Portfolio Building',
              desc: 'Say goodbye to dummy assets and hello to real-world campaigns for actual startups, local brands, and digital publishers.',
            },
            {
              title: 'Flexible Operations',
              desc: 'Built specifically around academic calendars. Flexible hours, hybrid schedules, and remote project pipelines that prioritize your classes.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col gap-3">
              <h3 className="text-lg font-display font-bold text-dark">{item.title}</h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-dark">
            Currently Scouting Roles
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {roles.map((role, idx) => (
            <Card key={idx} hoverEffect={true} className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-slate-200/50">
              <div className="flex flex-col gap-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-bold text-primary bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {role.type}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-dark">{role.title}</h3>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">{role.desc}</p>
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                    Core Requirements:
                  </span>
                  {role.requirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-600 font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={() => scrollToForm(role.title)} variant="secondary" size="md" className="self-start md:self-center">
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-md">
          <div className="text-center mb-8 flex flex-col gap-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Talent Pipelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-dark">
              Submit Your Profile
            </h2>
            <p className="text-xs text-slate-500 font-sans">
              Complete the details below, attach your resume/portfolio, and we will get back to you!
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
                <HiCheckCircle className="text-6xl text-emerald-500 animate-pulse" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark">Application Received!</h3>
                  <p className="text-sm text-slate-600 font-sans mt-2 max-w-md mx-auto">
                    Excellent work! Your application has been logged into our system. Our creative consultant squad will review your designs and get in touch within 4-5 business days.
                  </p>
                </div>
                <Button onClick={() => setIsSubmitSuccess(false)} variant="outline" size="sm">
                  Apply for another role
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
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
                    placeholder="Jane Doe"
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
                    placeholder="jane@university.edu"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                      formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.email}</span>
                  )}
                </div>

                {/* Role dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Select Position
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                      formErrors.role ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'
                    }`}
                  >
                    <option value="">-- Choose Position --</option>
                    <option value="Graphic Design Intern">Graphic Design Intern</option>
                    <option value="Video Editor & Animator">Video Editor & Animator</option>
                    <option value="Social Media & Brand Associate">Social Media & Brand Associate</option>
                  </select>
                  {formErrors.role && (
                    <span className="text-[10px] font-semibold text-red-500 font-sans">{formErrors.role}</span>
                  )}
                </div>

                {/* Portfolio URL */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="portfolio" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Portfolio Link (Behance, Dribbble, Website, Drive)
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://behance.net/myprofile"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Briefly Describe Your Creative Tools & Experience
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Photoshop, Figma, Premiere Pro. I have edited 5 mock commercials..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                {/* Resume Upload UI */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Upload Resume (PDF, DOCX)
                  </span>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.doc"
                    className="hidden"
                  />

                  {selectedFile ? (
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <HiBriefcase className="text-primary text-xl" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-dark line-clamp-1">{selectedFile.name}</span>
                          <span className="text-[10px] text-slate-400 font-sans">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-red-500 transition-colors"
                        aria-label="Remove file"
                      >
                        <HiTrash size={18} />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-slate-50/50 hover:border-primary/50 transition-all ${
                        formErrors.file ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                      }`}
                    >
                      <HiArrowUpTray className="text-slate-400 text-3xl animate-bounce-slow" />
                      <div className="text-center">
                        <span className="text-xs font-bold text-primary hover:underline">Choose a file</span>
                        <span className="text-xs text-slate-400 font-sans"> or drag and drop here</span>
                        <p className="text-[10px] text-slate-400 mt-1 font-sans">PDF, DOC, DOCX up to 5MB</p>
                      </div>
                    </div>
                  )}
                  {formErrors.file && (
                    <span className="text-[10px] font-semibold text-red-500 font-sans mt-0.5">{formErrors.file}</span>
                  )}
                </div>

                {/* Submit button */}
                <Button type="submit" variant="primary" className="py-3.5 text-sm mt-2" icon={<HiSparkles />}>
                  Submit Application
                </Button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Careers;
