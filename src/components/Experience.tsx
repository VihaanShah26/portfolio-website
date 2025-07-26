import { WorkCard } from './WorkCard';

const experiences = [
  {
    company: 'Oracle',
    role: 'Software Engineering Intern',
    period: 'Jun 2024 - Aug 2024',
    description: 'Developed cloud infrastructure solutions for Oracle Cloud Infrastructure (OCI), focusing on scalable microservices and performance optimization.',
    skills: ['Java', 'Python', 'Kubernetes', 'Docker', 'OCI', 'Microservices'],
    highlights: [
      'Built a distributed caching system that reduced API response times by 40%',
      'Implemented automated testing suite with 95% code coverage',
      'Collaborated with senior engineers on mission-critical production systems'
    ],
    companyUrl: 'https://oracle.com'
  },
  {
    company: 'TechStart Inc.',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2024 - May 2024',
    description: 'Led development of customer-facing web applications using modern React ecosystem and Node.js backend services.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Redux'],
    highlights: [
      'Architected and built responsive dashboard serving 10,000+ daily users',
      'Optimized database queries resulting in 60% faster page load times',
      'Mentored 2 junior developers on best practices and code review processes'
    ],
    companyUrl: 'https://techstart.example.com'
  },
  {
    company: 'Northwestern IT',
    role: 'Software Developer',
    period: 'Sep 2023 - Dec 2023',
    description: 'Maintained and enhanced university internal systems, focusing on student information systems and administrative tools.',
    skills: ['Python', 'Django', 'MySQL', 'JavaScript', 'Git', 'Linux'],
    highlights: [
      'Automated manual data processing workflows, saving 20+ hours per week',
      'Fixed critical security vulnerabilities in legacy authentication system',
      'Developed internal API documentation and developer onboarding guides'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-surface-secondary">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gaining hands-on experience at leading tech companies and building impactful solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  {/* Content */}
                  <div className="md:ml-16">
                    <WorkCard {...experience} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};