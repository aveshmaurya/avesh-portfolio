import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, School } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Education & Academic Qualifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Strong foundational computer science degree combined with technical electrical engineering diploma and science academics.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="bg-zinc-50 dark:bg-zinc-900/80 rounded-2xl p-6 sm:p-7 border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <School className="w-6 h-6" />
                  </div>
                  
                  {/* Start & End Date Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.startDate.slice(0,4)} - {edu.endDate.slice(0,4)}</span>
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{edu.location}</span>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {edu.details}
                </p>
              </div>

              {/* Bottom Footer Details */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {edu.boardOrUniversity && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                    Board/Uni: <strong className="text-zinc-800 dark:text-zinc-200">{edu.boardOrUniversity}</strong>
                  </span>
                )}
                {edu.grade && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold">
                    <Award className="w-3 h-3" />
                    {edu.grade}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
