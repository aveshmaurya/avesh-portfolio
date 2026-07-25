import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SectionId, Project } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ArrowLeft, Home } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = (id: SectionId) => {
    switch (id) {
      case 'experience': return 'Experience';
      case 'education': return 'Education';
      case 'projects': return 'Projects';
      case 'skills': return 'Skills Matrix';
      case 'certificates': return 'Certification';
      case 'contact': return 'Contact Information';
      default: return 'Home';
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-500 selection:text-white transition-colors duration-300 font-sans flex flex-col justify-between">
        
        <div>
          {/* Main Navigation Bar */}
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />

          {/* Breadcrumb Bar for Inner Dedicated Pages */}
          {activeSection !== 'home' && (
            <div className="pt-24 pb-4 bg-zinc-50/80 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-zinc-950 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                  <span className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white cursor-pointer" onClick={() => handleNavigate('home')}>
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </span>
                  <span>/</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {getPageTitle(activeSection)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Page Main Content Area */}
          <main className={activeSection !== 'home' ? 'py-6' : ''}>
            {activeSection === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenResume={() => setIsResumeModalOpen(true)}
                onSelectProject={() => {
                  handleNavigate('projects');
                }}
              />
            )}

            {activeSection === 'experience' && <ExperienceSection />}

            {activeSection === 'education' && <EducationSection />}

            {activeSection === 'projects' && <ProjectsSection />}

            {activeSection === 'skills' && <SkillsSection />}

            {activeSection === 'certificates' && <CertificatesSection />}

            {activeSection === 'contact' && <ContactSection />}
          </main>
        </div>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
