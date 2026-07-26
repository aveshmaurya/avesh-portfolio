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
  GraduationCap, 
  Award,
  Sparkles,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: SectionId) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
      {/* Google One Signature Ambient Background Multi-Color Glows (Blue #4285F4, Red #EA4335, Yellow #FBBC05, Green #34A853) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-r from-[#4285F4]/25 via-[#EA4335]/20 via-[#FBBC05]/25 to-[#34A853]/25 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-10 left-0 w-[450px] h-[450px] bg-gradient-to-br from-[#EA4335]/25 via-[#FBBC05]/20 to-transparent blur-[110px] rounded-full pointer-events-none z-0 animate-pulse duration-[7000ms]" />
      <div className="absolute top-12 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#4285F4]/30 via-[#34A853]/25 to-transparent blur-[110px] rounded-full pointer-events-none z-0" />

      {/* Google One Colored Gradient Top Ribbon Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google One style Pill Badge with 4 Google Accent Colors */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" /> {/* Google Blue */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" /> {/* Google Red */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" /> {/* Google Yellow */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" /> {/* Google Green */}
              </div>
              <span className="tracking-wide">Software Engineer • Java & Full Stack</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 via-rose-500 to-amber-500 dark:from-blue-400 dark:via-indigo-300 dark:via-rose-400 dark:to-amber-300 bg-clip-text text-transparent">
                  Software Engineer
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Hi, I'm <strong className="font-bold text-zinc-900 dark:text-white">{personalProfile.name}</strong>. Detail-oriented Full Stack Engineer with 5 years of engineering operations background at L&T. Specialized in Java, Spring Boot, MySQL, and modern Web Applications.
              </p>
            </div>

            {/* Contact Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 px-3.5 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-[#4285F4]" />
                {personalProfile.location}
              </span>
              <a 
                href={`mailto:${personalProfile.email}`} 
                className="flex items-center gap-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 px-3.5 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                {personalProfile.email}
              </a>
              <a 
                href={`tel:${personalProfile.phone}`} 
                className="flex items-center gap-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 px-3.5 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#34A853]" />
                +91 {personalProfile.phone}
              </a>
            </div>

            {/* Primary CTA Buttons - Google Pill Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-xs sm:text-sm border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#4285F4]" />
                <span>View Resume</span>
              </button>

              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-blue-950 text-zinc-700 dark:text-zinc-300 hover:text-[#4285F4] border border-zinc-200/80 dark:border-zinc-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Profile Showcase Card with Google One Signature Gradient Ring */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Google One Signature 4-Color Gradient Outer Ring */}
              <div className="p-[3px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-[2.2rem] shadow-xl shadow-blue-500/10">

                {/* Main Rounded Surface Card */}
                <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-5 shadow-inner space-y-4">
                  
                  {/* Hero Portrait Photo */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                    <img
                      src={personalProfile.avatarUrl}
                      alt={personalProfile.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-zinc-950/85 backdrop-blur-md rounded-xl text-white border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-xs text-white">Avesh Kumar Maurya</p>
                        <p className="text-[10px] text-zinc-300">Software Engineer</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#1a73e8] text-[10px] font-bold tracking-wide">
                        AKTU 2026
                      </span>
                    </div>
                  </div>

                  {/* Quick Stat Pills */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80">
                      <div className="flex items-center gap-1.5 text-[#4285F4] mb-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">5 Years</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight">
                        L&T Engineering Operations
                      </span>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80">
                      <div className="flex items-center gap-1.5 text-[#34A853] mb-0.5">
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

        </div>

        {/* Google One Style Feature Highlight Cards with 4 Google Brand Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          
          <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/30 dark:to-zinc-900 border border-blue-200/80 dark:border-blue-800/50 space-y-2 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#4285F4]" />
            <div className="w-9 h-9 rounded-xl bg-[#4285F4] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-500/20">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
              Java & Backend Systems
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Robust backend development using Java 17+, Spring Boot, Hibernate, and RESTful APIs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-red-50/80 to-white dark:from-red-950/30 dark:to-zinc-900 border border-red-200/80 dark:border-red-800/50 space-y-2 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-0.5 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EA4335]" />
            <div className="w-9 h-9 rounded-xl bg-[#EA4335] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-red-500/20">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
              Database & Web Tech
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Optimized MySQL query design, schema modeling, JavaScript, HTML5/CSS3, and Bootstrap.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/80 to-white dark:from-amber-950/30 dark:to-zinc-900 border border-amber-200/80 dark:border-amber-800/50 space-y-2 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FBBC05]" />
            <div className="w-9 h-9 rounded-xl bg-[#FBBC05] text-zinc-900 flex items-center justify-center font-bold text-xs shadow-md shadow-amber-500/20">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
              5 Yrs Operations Experience
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Proven engineering operations, leadership, value engineering, and problem solving at L&T.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50/80 to-white dark:from-emerald-950/30 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 space-y-2 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#34A853]" />
            <div className="w-9 h-9 rounded-xl bg-[#34A853] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
              Verified Certifications
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Industry certificates from Infosys Springboard, Flipkart, EY, Microsoft, and L&T.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
