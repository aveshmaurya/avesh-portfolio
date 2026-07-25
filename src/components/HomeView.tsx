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
    <div className="space-y-20 pb-20">
      
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} onOpenResume={onOpenResume} />

      {/* 2. Featured Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
              className="group cursor-pointer rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 p-5 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-500 text-[10px] font-semibold">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
          <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Technical Skills</span>
              </h3>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                Java, Spring, MySQL & Web
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {topTechSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center gap-2 text-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate">{skill.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('skills')}
              className="w-full py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-600 dark:text-blue-400 font-bold text-xs text-center transition-colors block"
            >
              View Full Technical Matrix →
            </button>
          </div>

          {/* Non-Technical Soft Skills Preview Box */}
          <div className="p-6 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Non-Technical Soft Skills</span>
              </h3>
              <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                Leadership & Value Engineering
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {topSoftSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-indigo-100 dark:border-indigo-950 flex items-center gap-2 text-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate">{skill.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('skills')}
              className="w-full py-2.5 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/70 hover:bg-indigo-200/80 text-indigo-600 dark:text-indigo-300 font-bold text-xs text-center transition-colors block"
            >
              View All Soft Competencies →
            </button>
          </div>

        </div>
      </section>

      {/* 4. Experience Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Career Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Engineering Experience
            </h2>
          </div>

          <button
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group self-start sm:self-auto"
          >
            <span>See Full Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {mainExperience.role}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {mainExperience.company} • {mainExperience.location}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold self-start sm:self-auto border border-blue-200/60 dark:border-blue-800/60">
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

      {/* 5. Minimal Contact CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white space-y-4 shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to collaborate on your next project?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
              Available for full-time Software Engineer & Java Full Stack roles. Get in touch to discuss engineering opportunities.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-full bg-white text-blue-600 font-extrabold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap active:scale-95 transition-transform"
          >
            Get In Touch
          </button>
        </div>
      </section>

    </div>
  );
};
