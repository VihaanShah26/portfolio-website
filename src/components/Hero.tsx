import { Mail, FileText, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/vihaan.jpg';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding-mobile">
      <div className="container-portfolio">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Vihaan Shah</span>
              </h1>
              
              <div className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                <p className="mb-4">
                  Computer Science student at Northwestern University with a passion for creating 
                  efficient, scalable solutions that make a real impact.
                </p>
                <p>
                  Currently pursuing both B.S. and M.S. degrees while gaining hands-on experience 
                  at top tech companies.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <a 
                href="mailto:vihaanshah2026@u.northwestern.edu" 
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="src/assets/Shah_Vihaan_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View Résumé
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border animate-scale-in">
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:order-2 animate-scale-in">
            <div className="relative max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Vihaan Shah - Software Engineer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};