import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { SectionId } from '../types';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Code2, 
  Briefcase, 
  Database,
  ShieldCheck,
  GitBranch,
  Server,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: SectionId) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-red-500/10 via-green-500/10 to-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-20" />

      {/* Floating Background Tech Icons */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-blue-500/30 dark:text-blue-400/20 opacity-60">
          <Code2 size={80} className="animate-pulse" style={{ animationDuration: '5s' }} />
        </div>
        <div className="absolute top-[20%] right-[8%] text-emerald-500/30 dark:text-emerald-400/20 opacity-60">
          <Database size={70} className="animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google One style Pill Badge with 4 Google Accent Colors */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-100/80 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" /> {/* Google Blue */}
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" /> {/* Google Red */}
                <span className="w-2 h-2 rounded-full bg-[#FBBC05]" /> {/* Google Yellow */}
                <span className="w-2 h-2 rounded-full bg-[#34A853]" /> {/* Google Green */}
              </div>
              <span className="tracking-wide">Software Engineer • Java  Full Stack</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.12]">
                Software Engineer
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Hi, I'm <strong className="font-bold text-zinc-900 dark:text-white">{personalProfile.name}</strong>. Detail-oriented Full Stack specialized in Java, Spring Boot, MySQL, and modern Web Applications.
              </p>
            </div>

            {/* Contact Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 bg-zinc-100/70 dark:bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                {personalProfile.location}
              </span>
              <a 
                href={`mailto:${personalProfile.email}`} 
                className="flex items-center gap-1.5 bg-zinc-100/70 dark:bg-zinc-900/80 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {personalProfile.email}
              </a>
              <a 
                href={`tel:${personalProfile.phone}`} 
                className="flex items-center gap-1.5 bg-zinc-100/70 dark:bg-zinc-900/80 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                +91 {personalProfile.phone}
              </a>
            </div>

            {/* Primary CTA Buttons - Google Pill Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-xs sm:text-sm border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Resume</span>
              </button>

              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-blue-950 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 border border-zinc-200/80 dark:border-zinc-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Profile Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Subtle Accent Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500 rounded-[2.5rem] blur-md opacity-30 dark:opacity-40" />

              {/* Main Rounded Google-Style Surface Card */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2rem] p-5 border border-zinc-200/80 dark:border-zinc-800 shadow-xl overflow-hidden space-y-4">
                
                {/* Hero Portrait Photo */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <img
                    src={"/main-pic-no-bg.png"}
                    alt={personalProfile.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-zinc-950/80 backdrop-blur-md rounded-xl text-white border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xs text-white">Avesh Kumar Maurya</p>
                      <p className="text-[10px] text-zinc-300">Software Engineer</p>
                    </div>
                    <span className="">
                    </span>
                  </div>
                </div>

                {/* Quick Stat Pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80">
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100"></span>
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight">
                      AKTU 2026 
                    </span>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80">
                    <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 mb-0.5">
                      <Code2 className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Full Stack</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight">
                      Java, Spring Boot & MySQL
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Google One Style Feature Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          
          <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 space-y-2 hover:border-blue-500/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Java & Backend Systems
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Robust backend development using Java 17+, Spring Boot, Hibernate, and RESTful APIs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 space-y-2 hover:border-rose-500/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Database & Web Tech
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Optimized MySQL query design, schema modeling, JavaScript, HTML5/CSS3, and Bootstrap.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 space-y-2 hover:border-amber-500/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              5 Yrs Operations Experience
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Proven engineering operations, leadership, value engineering, and problem solving at L&T.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 space-y-2 hover:border-emerald-500/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Verified Certifications
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Industry certificates from Infosys Springboard, Flipkart, EY, Microsoft, and L&T.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
