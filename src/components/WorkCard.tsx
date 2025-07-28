import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface WorkCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  detailedDescription: string;
  logo?: string;
  companyUrl?: string;
}

export const WorkCard = ({ 
  company, 
  role, 
  period, 
  description, 
  skills, 
  detailedDescription,
  logo,
  companyUrl 
}: WorkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-portfolio">
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="w-12 h-12 rounded-lg object-cover" />
          ) : (
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary font-semibold text-lg">
                {company.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg">{role}</h3>
              <div className="flex items-center gap-2">
                {companyUrl ? (
                  <a 
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    {company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-primary">{company}</span>
                )}
              </div>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
              {period}
            </span>
          </div>

          <p className="text-muted-foreground mb-4">{description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.slice(0, 6).map((skill, index) => (
              <span key={index} className="tag-chip text-xs">
                {skill}
              </span>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-150 text-sm font-medium"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-border space-y-2 animate-fade-in">
              {/* {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))} */}
              <p className="text-muted-foreground mb-4">{detailedDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};