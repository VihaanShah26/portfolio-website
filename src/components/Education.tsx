import { useState } from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'overview', label: 'Overview', icon: GraduationCap },
  { id: 'honors', label: 'Honors & Awards', icon: Award },
  { id: 'coursework', label: 'Coursework', icon: BookOpen },
  { id: 'certifications', label: 'Certifications', icon: FileText },
];

const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Discrete Math",
  "Computer Systems",
  "Scalable Software Architecture",
  "Programming Languages",
  "Human-Computer Interaction",
  "Design and Analysis of Algorithms",
  "Computer Networking",
  "Social Networks Analysis",
  "Operating Systems",
  "Distributed Systems",
  "Microcontroller System Design",
  "Artificial Intelligence Fundamentals",
  "Machine Learning Fundamentals",
  "Computer System Security",
  "Parallel Computing using OpenMP",
  "Parallel Programming with CUDA",
  "Game Design and Development",
  "Rapid Software Programming",
  "Software Engineering Principles",
  "Agile Software Development",
  "Autonomous Quadrotor Design",
  "Kernel and Low-Level Development",
  "Neural Networks",
  "Deep Learning for NLP"
];

const honors = [
  'Dean\'s List - 8 quarters',
  'Oracle Idea-a-thon - 1st Place',
  'Distinction in Communcation Skills from Trinity College London',
  'Hong Kong International Mathematics Olympiad - Gold Medal',
  'Thailand International Mathematics Olympiad - Silver Medal',
  'Northwestern University Trading Competition - 3rd Place',
];

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    organization: 'Oracle',
    date: 'July 2025',
    url: 'src/assets/certificates/OCI-fundamentals.pdf'
  },
  {
    name: 'Oracle Certified Generative AI Professional',
    organization: 'Oracle',
    date: 'July 2025',
    url: 'src/assets/certificates/OCI-genai.pdf'
  },
  {
    name: 'Retrieval-Augmented Generation (RAG) with Embeddings and Vector Databases',
    organization: 'Scrimba',
    date: 'June 2025',
    url: 'src/assets/certificates/RAG.pdf'
  }
];

export const Education = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="education" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and finance <br /> at Northwestern University
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-muted/50 p-2 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-background text-primary shadow-soft'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="card-portfolio">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* University Logo Placeholder */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Northwestern University</h3>
                    <p className="text-muted-foreground">Evanston, Illinois</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">B.S. Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Robert R. McCormick School of Engineering and Applied Science</p>
                      <p className="text-sm text-muted-foreground">Sept 2022 - June 2026</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">M.S. Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Robert R. McCormick School of Engineering and Applied Science</p>
                      <p className="text-sm text-muted-foreground">Feb 2025 - June 2026</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Certificate in Financial Economics</h4>
                      <p className="text-sm text-muted-foreground">Kellogg School of Management</p>
                      <p className="text-sm text-muted-foreground">April 2025 - June 2026</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <span className="tag-chip text-center">
                      Major GPA 3.94/4.0
                    </span>
                    <span className="tag-chip text-center">
                      CGPA 3.82/4.0
                    </span>
                </div>
                </div>
              </div>
            )}

            {activeTab === 'honors' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Honors & Awards</h3>
                <div className="space-y-3">
                  {honors.map((honor, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'coursework' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Relevant Coursework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {coursework.map((course, index) => (
                    <span key={index} className="tag-chip text-center">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{cert.organization}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(cert.url, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};