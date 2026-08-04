import React, { useState } from 'react';
import { personalProfile, initialExperiences, educationList, initialCertificates, skillList } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyResumeText = () => {
    const text = `
AVESH KUMAR MAURYA
${personalProfile.email} | ${personalProfile.phone} | ${personalProfile.location}
LinkedIn: ${personalProfile.linkedin}

SUMMARY
${personalProfile.summary}

WORK EXPERIENCE
${initialExperiences.map(e => `${e.role} at ${e.company} (${e.period})\n- ${e.description}\n${e.responsibilities.map(r => `  * ${r}`).join('\n')}`).join('\n\n')}

EDUCATION
${educationList.map(edu => `${edu.degree} - ${edu.institution} (${edu.startDate.slice(0, 4)} - ${edu.endDate.slice(0, 4)})\n  ${edu.details}`).join('\n\n')}

SKILLS
${skillList.map(s => s.name).join(', ')}

CERTIFICATIONS
${initialCertificates.map(c => `${c.title} - ${c.issuer} (${c.issueDate})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">

      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Avesh Kumar Maurya - Official Resume
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Java Full Stack Developer • Printable Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyResumeText}
              className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Copy Resume Plain Text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Area */}
        <div className="p-8 max-h-[75vh] overflow-y-auto space-y-6 text-zinc-800 dark:text-zinc-200 font-sans print:p-0 print:max-h-none">

          {/* Header Section */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {personalProfile.name}
            </h1>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
              {personalProfile.title}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-zinc-600 dark:text-zinc-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {personalProfile.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                {personalProfile.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                {personalProfile.location}
              </span>
            </div>

            <div className="mt-2 text-xs">
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center sm:justify-start gap-1 font-medium"
              >
                <Linkedin className="w-3.5 h-3.5" />
                {personalProfile.linkedin}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {personalProfile.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {initialExperiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 italic">
                    {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-700 dark:text-zinc-300 space-y-1 pt-1">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs space-y-0.5">
                  <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100">
                    <span>{edu.degree}</span>
                    <span className="text-zinc-500">{edu.startDate.slice(0, 4)} - {edu.endDate.slice(0, 4)}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">{edu.institution} ({edu.location})</p>
                  <p className="text-[11px] text-zinc-500">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Skills Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-blue-600 dark:text-blue-400 mb-1">Technical Skills</p>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {skillList.filter(s => s.type === 'technical').map(s => s.name).join(' • ')}
                </p>
              </div>
              <div className="p-3 rounded bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">Non-Technical Skills</p>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {skillList.filter(s => s.type === 'non-technical').map(s => s.name).join(' • ')}
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Certifications & Accomplishments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {initialCertificates.map((cert) => (
                <div key={cert.id} className="p-2 rounded bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <p className="font-bold text-zinc-900 dark:text-zinc-100">{cert.title}</p>
                  <p className="text-[11px] text-zinc-500">{cert.issuer} ({cert.issueDate})</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <span className="text-xs text-zinc-500">
            Avesh Kumar Maurya • Portfolio Resume
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
