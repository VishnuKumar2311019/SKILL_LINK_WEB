import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiEye, HiCheckBadge, HiSparkles, HiRectangleStack } from 'react-icons/hi2';
import { FaGraduationCap } from 'react-icons/fa';
import Card from '../components/Card';

const About = () => {
  const timelineData = [
    {
      year: 'Phase 1',
      title: 'The Spark',
      desc: 'Realizing that brilliant student creators lack direct pipelines to commercial creative work, while startups struggle to find affordable quality visuals, the blueprint for SkillLink is drafted.',
    },
    {
      year: 'Phase 2',
      title: 'Talent Curation',
      desc: 'Partnering with elite design, illustration, and cinema arts schools to vet, test, and onboard the initial squad of designers, video creators, and writers.',
    },
    {
      year: 'Phase 3',
      title: 'Consultant Shield',
      desc: 'Establishing the "Senior Editorial Guild" — veteran agency designers who oversee every single deliverable, guaranteeing that cheap pricing never means cheap outputs.',
    },
    {
      year: 'Phase 4',
      title: 'Commercial Launch',
      desc: 'Deploying campaigns for over 120+ early adopters, small businesses, local retail disruptors, and social media influencers with stellar engagement growth.',
    },
  ];

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-50/40 blur-[100px] pointer-events-none" />

      {/* Header Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight">
            Connecting Creative Minds <br />to Ambitious Brands
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-sans mt-2">
            SkillLink is a high-caliber digital creative agency built to solve two massive problems: providing students with high-paying professional pipelines and empowering startups with luxury design execution on lean budgets.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-display font-black leading-tight">
              Bridging the Talent Gap with Editorial Precision
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Traditional creative agencies cost an arm and a leg. Freelance networks are a gamble on reliability and consistency. SkillLink builds a better bridge.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans">
              We scout highly skilled student creators and place them under the strict guidance of veteran art directors. The result is modern, premium visual design and video production, delivered reliably at a fraction of standard cost.
            </p>
            <div className="flex gap-4 items-center mt-4">
              <div className="flex -space-x-4">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Team member" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80" alt="Team member" />
              </div>
              <span className="text-xs font-semibold text-slate-500 font-sans">Empowering 50+ handpicked creative student leaders.</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card hoverEffect={true} className="flex flex-col gap-4 border-l-4 border-l-primary bg-white shadow-sm">
              <HiLightBulb className="text-primary text-3xl" />
              <h3 className="text-lg font-display font-bold">Our Mission</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                To unleash the next generation of creative student experts, supplying businesses and startup founders with elite content assets and beautiful brand languages.
              </p>
            </Card>

            <Card hoverEffect={true} className="flex flex-col gap-4 border-l-4 border-l-accent bg-white shadow-sm">
              <HiEye className="text-amber-500 text-3xl" />
              <h3 className="text-lg font-display font-bold">Our Vision</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                To become the premier global marketplace where high-growth brands recruit verified visual talents, and students launch premium certified portfolios.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-slate-900 text-white py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black leading-tight text-white">
              Milestones of Growth
            </h2>
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between md:gap-6">
            {timelineData.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-0 md:w-1/4 mb-12 md:mb-0"
              >
                {/* Node marker */}
                <div className="absolute left-[-6px] top-1 md:relative md:left-0 md:top-0 md:mb-4 w-3.5 h-3.5 rounded-full bg-primary border-4 border-slate-900 ring-4 ring-primary/20 z-10" />

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 h-full flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    {step.year}
                  </span>
                  <h3 className="text-base font-display font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SkillLink (Core Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black leading-tight">
            Built Differently for Professional Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGraduationCap size={24} className="text-primary" />,
              title: 'Super-Charged Student Talent',
              desc: 'Our creators are hungry, ambitious, trained in the latest modern aesthetics, and have cutting-edge skillsets.',
            },
            {
              icon: <HiCheckBadge size={24} className="text-amber-500" />,
              title: 'Slick Agency Quality Assurance',
              desc: 'Every file, image, banner, and script must pass our professional review framework before shipping.',
            },
            {
              icon: <HiRectangleStack size={24} className="text-indigo-500" />,
              title: 'Stripe-Like Simple Workflows',
              desc: 'Clear specifications, fast responses, flexible packages, and transparent iteration channels.',
            },
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-100/80 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-display font-bold mt-2">{pillar.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
