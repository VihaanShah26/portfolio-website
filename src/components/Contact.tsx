import { Mail, Github, Linkedin, Heart } from 'lucide-react';

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="section-padding bg-surface-secondary">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="card-portfolio text-center space-y-8">
            {/* Contact Links */}
            <div className="flex justify-center gap-6">
              <a
                href="mailto:vihaan.shah@northwestern.edu"
                className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
                aria-label="Send email"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-150">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  Email
                </span>
              </a>

              <a
                href="https://linkedin.com/in/vihaanshah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
                aria-label="LinkedIn profile"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-150">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/vihaanshah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
                aria-label="GitHub profile"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-150">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  GitHub
                </span>
              </a>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4 pt-6 border-t border-border">
              <p className="text-muted-foreground">
                Prefer to reach out directly?
              </p>
              <a 
                href="mailto:vihaan.shah@northwestern.edu"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Vihaan Shah • Built with{' '}
            <Heart className="w-4 h-4 text-red-500 inline" />
            {' '}& React
          </p>
        </div>
      </div>
    </section>
  );
};