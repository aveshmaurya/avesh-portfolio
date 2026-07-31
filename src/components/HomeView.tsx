import React from 'react';
import { Hero } from './Hero';
import { projectList, skillList, initialExperiences } from '../data/portfolioData';
import { SectionId, Project } from '../types';
import { ArrowRight, Code2, Sparkles, ExternalLink, Briefcase, ChevronRight, Layers, CheckCircle2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (sectionId: SectionId) => void;
  onOpenResume: () => void;
  onSelectProject: (project: Project) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenResume,
  onSelectProject
}) => {
  // Take top 3 featured projects for home page
  const featuredProjects = projectList.slice(0, 3);

  // Take top technical & non-technical skills for preview
  const topTechSkills = skillList.filter(s => s.type === 'technical' && s.featured).slice(0, 6);
  const topSoftSkills = skillList.filter(s => s.type === 'non-technical').slice(0, 4);

  // Recent main experience highlight
  const mainExperience = initialExperiences[0];

  return (
    <div className="relative overflow-hidden space-y-20 pb-20 bg-gradient-to-b from-transparent via-red-50/50 via-yellow-50/40 via-green-50/40 to-blue-50/50 dark:via-red-950/20 dark:via-yellow-950/20 dark:via-emerald-950/20 dark:to-blue-950/25">
      
      {/* Dynamic Background Ambient Color Gradients (Red, Green, Blue, Yellow) */}
      <div className="absolute top-[18%] -left-20 w-[550px] h-[550px] bg-gradient-to-br from-red-500/30 via-yellow-400/25 to-transparent blur-[100px] rounded-full pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      <div className="absolute top-[32%] -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/30 via-emerald-500/25 to-transparent blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-red-500/20 via-yellow-400/25 via-emerald-500/25 to-blue-500/25 blur-[110px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[72%] -left-16 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/30 via-blue-500/25 to-yellow-400/25 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-[650px] h-[450px] bg-gradient-to-tl from-red-500/25 via-yellow-400/25 to-blue-500/30 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} onOpenResume={onOpenResume} />

      {/* 2. Featured Projects Preview */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Selected Software Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Featured Projects
            </h2>
          </div>
          
          {/* See More Projects Button */}
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group self-start sm:self-auto"
          >
            <span>See More Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-5 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative border border-zinc-200/60 dark:border-zinc-700/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold tracking-wide shadow-md">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-bold border border-blue-200/60 dark:border-blue-900/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold border border-zinc-200 dark:border-zinc-700">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Redirect Bar */}
        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('projects')}
            className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-xs border border-zinc-200 dark:border-zinc-800 inline-flex items-center gap-2 transition-colors"
          >
            <span>Explore All Projects ({projectList.length})</span>
            <ChevronRight className="w-4 h-4 text-blue-500" />
          </button>
        </div>
      </section>

      {/* 3. Skills Matrix Preview */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Technical & Soft Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Skills Highlights
            </h2>
          </div>

          <button
            onClick={() => onNavigate('skills')}
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group self-start sm:self-auto"
          >
            <span>See More Skills</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Technical Skills Preview Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-white dark:from-blue-950/40 dark:via-indigo-950/20 dark:to-zinc-900 border border-blue-200/80 dark:border-blue-800/60 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#4285F4]" />
                <span>Technical Skills</span>
              </h3>
              <span className="text-[11px] font-bold text-[#4285F4]">
                Java, Spring, MySQL & Web
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {topTechSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-xl bg-white/90 dark:bg-zinc-950 border border-blue-100 dark:border-blue-900/50 flex items-center gap-2 text-xs shadow-2xs"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4] shrink-0" />
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 truncate">{skill.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('skills')}
              className="w-full py-2.5 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] text-white font-extrabold text-xs text-center transition-colors block shadow-sm shadow-blue-500/20"
            >
              View Full Technical Matrix →
            </button>
          </div>

          {/* Non-Technical Soft Skills Preview Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/90 via-rose-50/40 to-white dark:from-amber-950/40 dark:via-rose-950/20 dark:to-zinc-900 border border-amber-200/80 dark:border-amber-800/60 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA4335]" />
                <span>Non-Technical Soft Skills</span>
              </h3>
              <span className="text-[11px] font-bold text-[#EA4335]">
                Leadership & Value Engineering
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {topSoftSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-xl bg-white/90 dark:bg-zinc-950 border border-amber-100 dark:border-amber-900/50 flex items-center gap-2 text-xs shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FBBC05] shrink-0" />
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 truncate">{skill.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('skills')}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#EA4335] to-amber-500 hover:from-red-600 hover:to-amber-600 text-white font-extrabold text-xs text-center transition-colors block shadow-sm shadow-red-500/20"
            >
              View All Soft Competencies →
            </button>
          </div>

        </div>
      </section>

      {/* 4. Experience Snapshot */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#34A853] uppercase tracking-wider">
              Career Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Engineering Experience
            </h2>
          </div>

          <button
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#34A853] hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group self-start sm:self-auto"
          >
            <span>See Full Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-100">
                {mainExperience.role}
              </h3>
              <p className="text-xs font-bold text-[#34A853]">
                {mainExperience.company} • {mainExperience.location}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#34A853]/15 text-[#34A853] dark:text-emerald-300 text-xs font-extrabold self-start sm:self-auto border border-emerald-200 dark:border-emerald-800">
              {mainExperience.period}
            </span>
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {mainExperience.description}
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Explore Detailed Milestones & Impact</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Google One Theme Contact CTA Card */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-[2rem] shadow-xl shadow-blue-500/10">
          <div className="p-8 sm:p-10 rounded-[1.9rem] bg-gradient-to-r from-[#1a73e8] via-[#4285F4] to-[#1a73e8] text-white space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Google 4-Color Vibrant Overlay Orbs */}
            <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#EA4335]/30 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 left-1/3 w-56 h-56 bg-[#FBBC05]/30 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#34A853]/30 blur-2xl rounded-full pointer-events-none" />
            
            <div className="space-y-1.5 max-w-xl relative z-10">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-100 ml-1">Google One Inspired Theme</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Contact Now
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                Available for full-time Software Engineer & Java Full Stack roles. Get in touch to discuss your problem.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="relative z-10 px-7 py-3.5 rounded-full bg-white text-[#1a73e8] font-extrabold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap active:scale-95 transition-transform"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
