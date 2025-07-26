import { useState } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: GraduationCap },
  { id: 'honors', label: 'Honors & Awards', icon: Award },
  { id: 'coursework', label: 'Coursework', icon: BookOpen },
];

const coursework = [
  'Algorithms & Data Structures',
  'Operating Systems',
  'Distributed Systems',
  'Database Systems',
  'Computer Networks',
  'Machine Learning',
  'Software Engineering',
  'Computer Graphics',
  'Artificial Intelligence',
  'Cybersecurity',
  'Mobile Development',
  'Web Development',
  'Cloud Computing',
  'DevOps & CI/CD',
  'Financial Economics',
  'Microeconomics',
];

const honors = [
  'Dean\'s List - Fall 2023, Winter 2024',
  'Northwestern Merit Scholarship Recipient',
  'Outstanding Academic Achievement Award',
  'Computer Science Department Honor Roll',
  'Kellogg School Certificate Program Scholar',
];

export const Education = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="education" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and business at Northwestern University
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
                      <p className="text-sm text-muted-foreground">Expected June 2026</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">M.S. Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Combined Program</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Certificate in Financial Economics</h4>
                      <p className="text-sm text-muted-foreground">Kellogg School of Management</p>
                    </div>
                  </div>
                  
                  <div className="inline-block">
                    <span className="tag-chip font-semibold">GPA 3.95/4.0</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};