export type SectionId = 'home' | 'experience' | 'education' | 'projects' | 'skills' | 'certificates' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: 'java-backend' | 'web' | 'game' | 'fullstack';
  techStack: string[];
  startDate: string;
  endDate: string;
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  highlights: string[];
  interactiveType?: 'snake-game' | 'banking-demo' | 'task-bucket' | 'medical-landing' | 'travel-booking';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  type: 'full-time' | 'internship' | 'project';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  completionDate: string;
  startDate: string;
  endDate: string;
  details: string;
  boardOrUniversity?: string;
  grade?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  imageUrl?: string;
  category: 'technical' | 'internship' | 'atl' | 'tech' | 'non-tech';
  type?: 'tech' | 'non-tech';
  tags: string[];
  isCustom?: boolean;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools' | 'core' | 'soft';
  type: 'technical' | 'non-technical';
  proficiency: number; // 0 to 100
  iconName?: string;
  featured?: boolean;
}

export interface PersonalProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  avatarUrl: string;
  bannerUrl: string;
  languages: string[];
}
