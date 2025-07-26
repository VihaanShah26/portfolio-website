import { Users, Trophy, Code, Lightbulb } from 'lucide-react';

interface OrganizationCardProps {
  name: string;
  role: string;
  description: string;
  skills: string[];
  icon?: React.ReactNode;
  period?: string;
}

const OrganizationCard = ({ name, role, description, skills, icon, period }: OrganizationCardProps) => (
  <div className="card-portfolio">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          {icon || <Users className="w-6 h-6 text-primary" />}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-primary font-medium">{role}</p>
          </div>
          {period && (
            <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
              {period}
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="tag-chip text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const organizations = [
  {
    name: 'ACM @ Northwestern',
    role: 'Vice President',
    period: 'Sep 2023 - Present',
    description: 'Leading technical workshops and managing programming competitions for 200+ computer science students. Organized hackathons and industry networking events.',
    skills: ['Leadership', 'Event Planning', 'Public Speaking', 'Team Management'],
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    name: 'WildHacks',
    role: 'Technical Lead & Organizer',
    period: 'Jan 2023 - Present',
    description: 'Northwestern\'s premier hackathon bringing together 500+ students from across the Midwest. Responsible for technical infrastructure and mentorship programs.',
    skills: ['Project Management', 'Mentorship', 'Technical Writing', 'Community Building'],
    icon: <Lightbulb className="w-6 h-6 text-primary" />
  },
  {
    name: 'Northwestern Competitive Programming',
    role: 'Team Captain',
    period: 'Aug 2022 - Present',
    description: 'Captain of Northwestern\'s ICPC team, competed in regional competitions and led practice sessions. Ranked top 3 in regional contests.',
    skills: ['Algorithms', 'Problem Solving', 'C++', 'Mathematics', 'Team Coordination'],
    icon: <Trophy className="w-6 h-6 text-primary" />
  }
];

export const Organizations = () => {
  return (
    <section id="organizations" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Clubs & Organizations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building community and leadership skills through active involvement in student organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {organizations.map((org, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <OrganizationCard {...org} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};