import React, { useState, useMemo } from 'react';
import { skillList } from '../data/portfolioData';
import { 
  Cpu, 
  Search, 
  Server, 
  Database, 
  Layout, 
  Wrench, 
  Shield, 
  UserCheck, 
  Code2, 
  Sparkles,
  MessageSquare,
  Brain,
  Users,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTypeTab, setActiveTypeTab] = useState<'all' | 'technical' | 'non-technical'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const technicalSkills = useMemo(() => {
    return skillList.filter((skill) => {
      const isTech = skill.type === 'technical';
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return isTech && matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const nonTechnicalSkills = useMemo(() => {
    return skillList.filter((skill) => {
      const isNonTech = skill.type === 'non-technical';
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory || selectedCategory === 'soft';
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return isNonTech && matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'backend', label: 'Java & Backend' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'tools', label: 'Tools & Servers' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Comprehensive Competency Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Skills & Expertise Matrix
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Clearly structured into <strong className="text-blue-600 dark:text-blue-400 font-semibold">Technical Engineering Skills</strong> and <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Non-Technical Soft Skills</strong> developed through 5 years of L&T engineering operations and full-stack software development.
          </p>
        </div>

        {/* Filter & View Switcher Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/60 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          
          {/* Main Group Toggle Pills: All vs Technical vs Non-Technical */}
          <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-950 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full md:w-auto">
            <button
              onClick={() => { setActiveTypeTab('all'); setSelectedCategory('all'); }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTypeTab === 'all'
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Skills ({skillList.length})</span>
            </button>

            <button
              onClick={() => { setActiveTypeTab('technical'); setSelectedCategory('all'); }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTypeTab === 'technical'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Skills ({skillList.filter(s => s.type === 'technical').length})</span>
            </button>

            <button
              onClick={() => { setActiveTypeTab('non-technical'); setSelectedCategory('all'); }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTypeTab === 'non-technical'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Non-Technical Skills ({skillList.filter(s => s.type === 'non-technical').length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, Leadership)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 shadow-xs"
            />
          </div>

        </div>

        {/* 1. TECHNICAL SKILLS SECTION */}
        {(activeTypeTab === 'all' || activeTypeTab === 'technical') && technicalSkills.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    Technical Skills
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Java Ecosystem, Spring Boot, MySQL, Web APIs, Deployment Servers & Development Tools
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-200/60 dark:border-blue-800/60">
                {technicalSkills.length} Technical Proficiencies
              </span>
            </div>

            {/* Technical Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-blue-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-200 flex items-center justify-between group shadow-xs"
                >
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. NON-TECHNICAL SKILLS SECTION */}
        {(activeTypeTab === 'all' || activeTypeTab === 'non-technical') && nonTechnicalSkills.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    Non-Technical Skills
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Communication, Leadership, Value Engineering, Problem Solving & Teamwork
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-200/60 dark:border-indigo-800/60">
                {nonTechnicalSkills.length} Soft Competencies
              </span>
            </div>

            {/* Non-Technical Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nonTechnicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-500/50 transition-all duration-200 flex items-center justify-between group shadow-xs"
                >
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100/60 dark:bg-indigo-950 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Leadership
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
