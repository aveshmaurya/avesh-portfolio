import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { SectionId } from '../types';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5">
                <div className="w-full h-full bg-zinc-900 rounded-[6px] flex items-center justify-center text-white font-bold text-xs">
                  AKM
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Avesh Kumar Maurya
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Detail-oriented Java Full Stack,Specialized in Java, Spring Boot, MySQL,SQL and modern Web Applications.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-blue-600 text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalProfile.email}`}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-blue-600 text-zinc-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'home' as SectionId, label: 'Home' },
                { id: 'experience' as SectionId, label: 'Experience' },
                { id: 'education' as SectionId, label: 'Education' },
                { id: 'projects' as SectionId, label: 'Projects' },
                { id: 'skills' as SectionId, label: 'Skills' },
                { id: 'certificates' as SectionId, label: 'Certificates' },
                { id: 'contact' as SectionId, label: 'Contact Info' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Summary & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Location & Contact
              </h4>
              <p className="text-xs text-zinc-400">{personalProfile.location}</p>
              <p className="text-xs text-zinc-400 mt-1">{personalProfile.email}</p>
              <p className="text-xs text-zinc-400 mt-0.5">+91 {personalProfile.phone}</p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white border border-zinc-800 transition-colors self-start"
            >
              <ArrowUp className="w-4 h-4 text-blue-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Avesh Kumar Maurya.<br />All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed  By AVESH</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
