import { Users, Trophy, Code, Lightbulb, Bot } from 'lucide-react';

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
    name: 'Develop + Innovate for Social Change',
    role: 'Technical Lead',
    period: 'Apr 2025 - Present',
    description: 'Led 3 teams of 6 software engineers each. I was responsible for facilitating conversations with their clients to understand requirements, helping teams plan out design docs and ensuring all teams are on track to deliver their products while also providing technical development help wherever needed. My role also involved conducting 10 workshops teaching over 70 students about Full-Stack Development and other important Software Engineering skills such as version control and project documentation.',
    skills: ['Leadership', 'Event Planning', 'Teaching', 'Team Management', 'Full-Stack Development'],
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    name: 'Kappa Theta Pi',
    role: 'Member',
    period: 'Mar 2023 - Present',
    description: "I am a member of the Kappa Theta Pi, Kappa Chapter at Northwestern University. This is a Pre-professional technological fraternity to train students in important skills which are not covered in the classroom as well as network with people in industry across top tech firms such as Google, Amazon and IMC. I have also completed their Software Engineering Workshop which covered important information about CLI's, IDE's, Git, etc. As I have proceeded in college, I have gone on to help teach these workshops, especially focusing on solving Leetcode problems.",
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: ['Algorithms', 'Problem Solving', 'C++', 'Mathematics', 'Team Coordination'],
  },
  {
    name: 'American Society of Mechanical Engineers',
    role: 'Electronics Team Lead',
    period: 'Jan 2023 - Jun 2023',
    description: `
    I participated in several workshops through the year which covered important concepts in manufacturing and robotics. I learned how to use various types of 3D printers as well as their mechanisms and I mastered programming microcontrollers using the Arduino IDE.

    We participated in the ASME EFx Innovative Additive Manufacturing 3D Challenge wherein I was the Head of the Electronics team. We leveraged Solidworks CAD, Arduino, and Prusa MK3S+ and Ender 3 V2 printers to build a hovercraft, remotely controlled by a joystick, capable of navigating a maze and delivering a payload. I directed the electronics team through each aspect of the hovercraft’s wiring, programming and remote communication.

    My team was awarded Runner's Up among the Big Ten Schools.
    `,
    skills: ['Robotics', 'Arduino', '3D Printing', 'Project Management'],
    icon: <Bot className="w-6 h-6 text-primary" />
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