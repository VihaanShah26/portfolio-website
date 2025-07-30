import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Nautilus Kernel',
    subtitle: 'Porting Nautilus Kernel from 64-bit to 32-bit ARM Cortex-M Architecture',
    description: `
    The authors port Nautilus from 64-bit ARM to a 32-bit Cortex-M33 by crafting a bare-metal GCC toolchain, refactoring all 64-bit data types and atomic primitives, and writing a Thumb‑mode bootloader and linker script tailored to the new memory layout. Their nautilus.bin already boots on the MPS2‑AN505 board and runs comfortably within its 4 MB RAM budget; the remaining work is simply wiring the final branch to kernel initialization and adding minimal exception handlers to yield a fully operational embedded aerokernel.
    `,
    technologies: ['Low-Level Development', 'Boot Process', 'Linux', 'Memory Management', 'Assembly', 'Debugging'],
    githubUrl: 'https://github.com/VihaanShah26/nautilus',
    paperUrl: 'https://drive.google.com/file/d/1CRLXmeARuJuOL6dsooro1rpyEnrZdsL-/view?usp=sharing',
    imageUrl: 'src/assets/projects/nautilus.png'
  },
  {
    title: 'Mazebot Swarm',
    subtitle: 'Maze Solving through Concurrent Exploration and Radio Communication',
    description: 'Developed a real-time analytics dashboard for e-commerce metrics using React and WebSocket connections, processing 1M+ events per hour.',
    technologies: ['Microcontrollers', 'RF Communication', 'IR Sensors', 'Ultrasonic Sensors', 'C'],
    // githubUrl: 'https://github.com/vihaanshah/analytics-dashboard',
    imageUrl: 'src/assets/projects/maze.png'
  },
  {
    title: 'ScoreSight',
    subtitle: 'Sports Analysis Software',
    description: 'Created an IoT platform for smart home devices with mobile app, supporting 50+ device types and implementing end-to-end encryption.',
    technologies: ['Python', 'Pandas', 'Decision Trees', 'OpenAI API', 'Audio Processing', 'Data Processing'],
    imageUrl: 'src/assets/projects/sports.webp',
  },
  {
    title: 'Lines N\' Lyrix',
    subtitle: 'Song Guessing Game',
    description: 'Designed and implemented an ML-powered trading bot using Python and TensorFlow, achieving 12% annualized returns on paper trading.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Alpaca API', 'Docker'],
    githubUrl: 'https://github.com/VihaanShah26/LinesNLyrix',
    imageUrl: 'src/assets/projects/linesnlyrix.png'
  },
  {
    title: 'Botify',
    subtitle: 'Music Recommendation System',
    description: 'Built a full-stack web application for Northwestern students to discover and create campus events, serving 2,000+ active users.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/vihaanshah/campus-events',
    liveUrl: 'https://nu-events.vihaanshah.dev',
    imageUrl: 'src/assets/projects/botify.png'
  },
  {
    title: 'NU Maps',
    subtitle: 'Northwestern University Campus Navigation',
    description: 'Developed a collaborative coding platform with real-time editing, code execution, and video chat features for remote programming sessions.',
    technologies: ['React', 'Socket.io', 'Monaco Editor', 'Node.js', 'WebRTC'],
    githubUrl: 'https://github.com/vihaanshah/code-collab',
    imageUrl: 'src/assets/projects/numaps.png'
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