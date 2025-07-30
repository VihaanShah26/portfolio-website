import { Github, ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  paperUrl?: string
}

export const ProjectCard = ({
  title,
  subtitle,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  paperUrl
}: ProjectCardProps) => {
  return (
    <div className="group card-portfolio overflow-hidden">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-muted h-48">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-primary font-semibold text-2xl">
              {title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary p-3"
              aria-label="View source code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-3 bg-white/90 text-gray-900 hover:bg-white"
              aria-label="View live demo"
            >
              <Eye className="w-5 h-5" />
            </a>
          )}
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-3 bg-white/90 text-gray-900 hover:bg-white"
              aria-label="View paper"
            >
              <Eye className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-primary font-medium">{subtitle}</p>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="tag-chip text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-150 inline-flex items-center gap-1 text-sm"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-150 inline-flex items-center gap-1 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-150 inline-flex items-center gap-1 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
};