import React from 'react';
import { initialExperiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Work Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bridging 5 years of rigorous industrial engineering supervision at Larsen & Toubro with modern Java Full Stack web software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-zinc-300 dark:to-zinc-800" />

          <div className="space-y-10">
            {initialExperiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
              >
                {/* Timeline Dot Indicator */}
                <div className="hidden md:flex col-span-1 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-600 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="md:col-span-11 bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
                  
                  {/* Card Header Top */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 mb-1.5">
                        {exp.type === 'full-time' ? 'Full-Time Industrial' : 'Internship & Developer'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                        <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Start & End Date Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
                      Key Highlights & Impact:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill Pills */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 mr-1">
                      Technologies & Competencies:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
