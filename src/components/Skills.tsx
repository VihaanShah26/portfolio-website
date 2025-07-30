import { useState } from 'react';
import { SkillRing } from './SkillRing';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Brain,
  Shield,
  Wrench,
  Globe
} from 'lucide-react';

const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'devops', label: 'DevOps' },
  { id: 'tools', label: 'Tools' },
];

const skills = [
  // Languages
  { name: 'Python', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'C', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'C++', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'JavaScript', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'HTML', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'CSS', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'SQL', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'Racket', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'Assembly', level: 'Expert' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'TypeScript', level: 'Advanced' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'Java', level: 'Advanced' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'MATLAB', level: 'Advanced' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'C#', level: 'Intermediate' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  { name: 'Go', level: 'Intermediate' as const, category: 'languages', icon: <Code className="w-6 h-6" /> },
  
  // Frameworks
  { name: 'React.js', level: 'Expert' as const, category: 'frameworks', icon: <Globe className="w-6 h-6" /> },
  { name: 'Node.js', level: 'Expert' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'Next.js', level: 'Expert' as const, category: 'frameworks', icon: <Globe className="w-6 h-6" /> },
  { name: 'Express.js', level: 'Expert' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'Lanchain', level: 'Expert' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'PyTorch', level: 'Expert' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'TensorFlow', level: 'Expert' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'OpenCV', level: 'Expert' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'Django', level: 'Advanced' as const, category: 'frameworks', icon: <Server className="w-6 h-6" /> },
  { name: 'React Native', level: 'Intermediate' as const, category: 'frameworks', icon: <Smartphone className="w-6 h-6" /> },
  
  // DevOps
  { name: 'AWS', level: 'Advanced' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Git', level: 'Expert' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'GitHub', level: 'Expert' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Agile Scrum', level: 'Expert' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Jira', level: 'Expert' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Docker', level: 'Advanced' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Kubernetes', level: 'Advanced' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  { name: 'CI/CD', level: 'Advanced' as const, category: 'devops', icon: <GitBranch className="w-6 h-6" /> },
  { name: 'Terraform', level: 'Intermediate' as const, category: 'devops', icon: <Cloud className="w-6 h-6" /> },
  
  // Tools
  { name: 'Git', level: 'Expert' as const, category: 'tools', icon: <GitBranch className="w-6 h-6" /> },
  { name: 'PostgreSQL', level: 'Advanced' as const, category: 'tools', icon: <Database className="w-6 h-6" /> },
  { name: 'MongoDB', level: 'Advanced' as const, category: 'tools', icon: <Database className="w-6 h-6" /> },
  { name: 'Linux', level: 'Advanced' as const, category: 'tools', icon: <Wrench className="w-6 h-6" /> },
  { name: 'GDB', level: 'Advanced' as const, category: 'tools', icon: <Wrench className="w-6 h-6" /> },
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-padding bg-surface-secondary">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">My Toolbox</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional software solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <SkillRing
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                category={skill.category}
              />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-muted-foreground">Beginner (25%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-sm text-muted-foreground">Intermediate (50%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full" />
            <span className="text-sm text-muted-foreground">Advanced (75%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
            <span className="text-sm text-muted-foreground">Expert (90%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};