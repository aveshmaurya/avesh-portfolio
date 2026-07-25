import React from 'react';
import { Certificate } from '../types';
import { X, Calendar, ExternalLink, Award, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {certificate.title}
              </h3>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Image Preview */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Certificate Image Frame */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-inner group">
            <img
              src={certificate.imageUrl || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"}
              alt={certificate.title}
              className="w-full h-full object-contain bg-zinc-950 p-2"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Certificate</span>
            </div>
          </div>

          {/* Dates & Category Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
            <div>
              <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                Certificate Period / Dates
              </span>
              <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>Start: {certificate.issueDate}</span>
                {certificate.expiryDate && <span>• End: {certificate.expiryDate}</span>}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                Certification Category
              </span>
              <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-0.5 uppercase tracking-wide">
                {certificate.category} Credentials
              </p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 block mb-2">
              Associated Skills & Domains:
            </span>
            <div className="flex flex-wrap gap-2">
              {certificate.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/80 dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
