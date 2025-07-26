import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Distributed Task Scheduler',
    subtitle: 'High-performance job orchestration system',
    description: 'Built a distributed task scheduling system using Go and Redis that can handle 10,000+ concurrent jobs with fault tolerance and automatic recovery mechanisms.',
    technologies: ['Go', 'Redis', 'Docker', 'Kubernetes', 'gRPC'],
    githubUrl: 'https://github.com/vihaanshah/task-scheduler',
  },
  {
    title: 'Real-time Analytics Dashboard',
    subtitle: 'Live data visualization platform',
    description: 'Developed a real-time analytics dashboard for e-commerce metrics using React and WebSocket connections, processing 1M+ events per hour.',
    technologies: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'Node.js'],
    githubUrl: 'https://github.com/vihaanshah/analytics-dashboard',
    liveUrl: 'https://analytics-demo.vihaanshah.dev',
  },
  {
    title: 'Smart Home IoT Platform',
    subtitle: 'Connected device management system',
    description: 'Created an IoT platform for smart home devices with mobile app, supporting 50+ device types and implementing end-to-end encryption.',
    technologies: ['Python', 'React Native', 'MQTT', 'PostgreSQL', 'AWS IoT'],
    githubUrl: 'https://github.com/vihaanshah/smart-home',
  },
  {
    title: 'Machine Learning Trading Bot',
    subtitle: 'Algorithmic trading system',
    description: 'Designed and implemented an ML-powered trading bot using Python and TensorFlow, achieving 12% annualized returns on paper trading.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Alpaca API', 'Docker'],
    githubUrl: 'https://github.com/vihaanshah/trading-bot',
  },
  {
    title: 'Campus Event Platform',
    subtitle: 'University event discovery app',
    description: 'Built a full-stack web application for Northwestern students to discover and create campus events, serving 2,000+ active users.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/vihaanshah/campus-events',
    liveUrl: 'https://nu-events.vihaanshah.dev',
  },
  {
    title: 'Code Collaboration Platform',
    subtitle: 'Real-time code sharing tool',
    description: 'Developed a collaborative coding platform with real-time editing, code execution, and video chat features for remote programming sessions.',
    technologies: ['React', 'Socket.io', 'Monaco Editor', 'Node.js', 'WebRTC'],
    githubUrl: 'https://github.com/vihaanshah/code-collab',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            distributed systems, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};