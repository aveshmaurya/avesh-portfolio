import React, { useState, useMemo, useEffect } from 'react';
import { Certificate } from '../types';
import { getStoredCertificates } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Award, Search, Calendar, Filter, ExternalLink, ShieldCheck } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Date Range Filters
  const [startDateFilter, setStartDateFilter] = useState<string>('');
  const [endDateFilter, setEndDateFilter] = useState<string>('');

  // Modals
  const [viewingCertificate, setViewingCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    setCertificates(getStoredCertificates());
  }, []);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      // Category / Type match
      let matchesCategory = false;
      if (selectedCategory === 'all') {
        matchesCategory = true;
      } else if (selectedCategory === 'tech') {
        matchesCategory = cert.type === 'tech' || cert.category === 'technical' || cert.category === 'internship' || cert.category === 'tech';
      } else if (selectedCategory === 'non-tech') {
        matchesCategory = cert.type === 'non-tech' || cert.category === 'atl' || cert.category === 'non-tech';
      } else {
        matchesCategory = cert.category === selectedCategory;
      }

      // Search match
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Date Range Match
      let matchesDateRange = true;
      if (startDateFilter) {
        matchesDateRange = matchesDateRange && cert.issueDate >= startDateFilter;
      }
      if (endDateFilter && cert.issueDate) {
        matchesDateRange = matchesDateRange && cert.issueDate <= endDateFilter;
      }

      return matchesCategory && matchesSearch && matchesDateRange;
    });
  }, [certificates, selectedCategory, searchQuery, startDateFilter, endDateFilter]);

  return (
    <section id="certificates" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/40 border-b border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Certification
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Professional certifications from Infosys, Flipkart, EY, Microsoft, and specialized industrial leadership programs.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-zinc-200/80 dark:border-zinc-800 shadow-xs mb-10 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {[
                { id: 'all', label: 'All Certificates' },
                { id: 'tech', label: 'Tech' },
                { id: 'non-tech', label: 'Non Tech' },
                { id: 'internship', label: 'Internships' },
                { id: 'atl', label: 'ATL & Leadership' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Search & Date Range Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
            
            {/* Search Input */}
            <div className="relative md:col-span-5">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search certificate title or issuer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Start Date Filter */}
            <div className="md:col-span-3 flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] font-semibold text-zinc-400 shrink-0">From:</span>
              <input
                type="date"
                value={startDateFilter}
                onChange={(e) => setStartDateFilter(e.target.value)}
                className="bg-transparent text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none w-full"
              />
            </div>

            {/* End Date Filter */}
            <div className="md:col-span-3 flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] font-semibold text-zinc-400 shrink-0">To:</span>
              <input
                type="date"
                value={endDateFilter}
                onChange={(e) => setEndDateFilter(e.target.value)}
                className="bg-transparent text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none w-full"
              />
            </div>

            {/* Clear Date Filters Button */}
            {(startDateFilter || endDateFilter) && (
              <div className="md:col-span-1 flex items-center justify-center">
                <button
                  onClick={() => {
                    setStartDateFilter('');
                    setEndDateFilter('');
                  }}
                  className="text-[11px] text-amber-600 dark:text-amber-400 font-bold hover:underline"
                >
                  Clear
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setViewingCertificate(cert)}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Image Preview Card */}
                <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
                  <img
                    src={cert.imageUrl || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2.5 py-1 rounded text-white text-[10px] font-bold uppercase tracking-wider shadow-md ${
                        cert.type === 'non-tech' || cert.category === 'non-tech' || cert.category === 'atl'
                          ? 'bg-indigo-600'
                          : 'bg-amber-600'
                      }`}>
                        {cert.type === 'non-tech' || cert.category === 'non-tech' || cert.category === 'atl' ? 'Non-Tech' : 'Tech'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900/80 backdrop-blur-md text-zinc-200 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {cert.category}
                      </span>
                    </div>
                    {cert.isCustom && (
                      <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-bold">
                        User Added
                      </span>
                    )}
                  </div>

                  {/* Start Date & End Date Badge */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90 flex items-center gap-1 bg-zinc-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-medium border border-zinc-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 border-t border-zinc-100 dark:border-zinc-800/80 mt-3 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 pt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>View Full Certificate Image</span>
                </span>
                <span className="p-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* View Modal */}
        <CertificateModal
          certificate={viewingCertificate}
          onClose={() => setViewingCertificate(null)}
        />

      </div>
    </section>
  );
};
