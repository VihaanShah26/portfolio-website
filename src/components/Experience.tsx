import { WorkCard } from './WorkCard';

const experiences = [
  {
    company: 'Oracle',
    role: 'Software Engineering Intern',
    period: 'Jun 2025 - Sept 2025',
    description: 'Developed AI solutions for the OCI Security team to automate and optimize processes in vulnerability detection and resolution for all cloud services.',
    skills: ['Generative AI', 'RAG', 'Autonomous Databases', 'Semantic Search', 'OCI', 'Jira'],
    detailedDescription: "I'm working within the Security Central team responsible for handling security vulnerabilities within Oracle Cloud Infrastructure. I am working on multiple projects centered around improving developer efficiency and results through AI technologies.I built a RAG on top of existing models by utilizing FAQs about Oracle cloud services, history of Slack messages describing vulnerabilities and the deployed solution and Jira tickets issued by security scanners along with the associated fixes implemented. I used T-few fine tuning and dedicated AI clusters to efficiently complete this process using minimal resources. The resulting model has been integrated in a Slack channel with 8000+ engineers. I’m working on training an ML model to use attributes of a vulnerability to predict how long a particular process will take to complete scanning that vulnerability. This will help engineers prioritize vulnerabilities to fix. Lastly, I’m working on setting up an automation for data transformation and replication from an Autonomous Database to OCI OpenSearch, enabling faster and better search as well as visualization of data about security findings.",
    companyUrl: 'https://oracle.com',
    logo: 'src/assets/logos/oracle.jpg'
  },
  {
    company: 'Atomera',
    role: 'Software Engineering and Data Management Intern',
    period: 'Jun 2024 - Aug 2024',
    description: 'Engineered Python-based analytics and computer-vision pipelines leveraging SciPy for Raman-spectra deconvolution, OpenCV for microscope-image processing, and ML algorithms inside an interactive web app',
    skills: ['Computer Vision', 'Pandas', 'Dash App', 'Data Analysis', 'DevOps'],
    detailedDescription: `
    Developed a tool to study and analyse semiconductor material data obtained from Raman Spectroscopy through deconvolution of the spectrum peak into a primary and shoulder peak. This enabled users to study the amorphous state of the semiconductor material. 
    Designed a robust and interactive app that connects to laboratory microscopes and processes the images from the slide being viewed under the microscope. Added multiple features and tools within the app that would allow end-to-end analysis of the images to perform quality checks and detect defects in semiconductor wafers. Utilised analytical techniques and artificial intelligence algorithms to automate the creation of statistical reports providing real-time information that aids the user in analysing the semiconductor wafers and making important decisions.
    `,
    companyUrl: 'https://atomera.com/',
    logo: 'src/assets/logos/atomera.png'
  },
  {
    company: 'Billed',
    role: 'Backend Developer',
    period: 'Jan 2024 - Dec 2024',
    description: 'Delivered a highly scalable, low-latency iOS app using AWS services, OCR, and payment APIs, streamlining restaurant checkout and eliminating account setup for all diners.',
    skills: ['Serverless Architecture', 'Optical Character Recognition', 'Swift', 'SwiftUI', 'Git', 'CI/CD'],
    detailedDescription: `
    I am part of a startup called Billed which focuses on designing a lightweight mobile app tailored for restaurant diners that simplifies the often frustrating and error-prone process of bill splitting. It allows you to snap a photo of the bill, calculates local taxes and tips, integrates effortlessly with Venmo, and offers versatile splitting options without requiring other diners to have an account. 
    I am the sole backend developer responsible for setting up the entire infrastructure using AWS. My responsibilities include using OCR for converting snapshots of bills to text and parsing that text to find relevant information, making the app scalable using S3 and RDS to store user information, increasing security by facilitating payments on the backend and integrating it with the frontend using an API Gateway, and performing computation through lambda functions.
    `,
    companyUrl: "https://billed-app.com/",
    logo: 'src/assets/logos/billed.jpeg'
  },
  {
    company: 'FoodFight',
    role: 'Software Engineering Intern',
    period: 'Nov 2023 - Feb 2024',
    description: 'Developed a real-time bet-tracking service that lets users place bets, polls status until resolution, and pushes instant results — driving seamless, always-on engagement.',
    skills: ['RDBMS', 'MySQL', 'REST API', 'Event-Driven Processing', 'Real-Time Notification', 'AWS'],
    detailedDescription: "I worked as a Software Engineer focusing on the backend. The app facilitated live sports betting using food as a currency. I focused on collecting information about ongoing games using a sports API, generating outcomes for each game and storing them in a table in the database and designing a bet tracker to allow users to place bets and constantly check for status updates until an outcome has been decided and then informs the players about it. I utilised AWS RDS while working with the database and S3 while storing information about users and live bets.",
    companyUrl: "https://www.getfoodfight.com/",
    logo: 'src/assets/logos/foodfight.png'
  },
  {
    company: 'Accenture',
    role: 'Software Engineering Intern',
    period: 'Jun 2023 - Aug 2023',
    description: 'Designed and prototyped a Generative-AI "buddy” that converses with factory operators, surfaces historical machine data, runs on-the-fly analytics, and recommends preventive maintenance actions.',
    skills: ['Python', 'Langchain', 'Stremlit', 'OpenAI API', 'MLOps', 'Tech Consulting'],
    detailedDescription: "I worked on a project consulting for a large consumer goods company to increase their productivity and manufacturing plant's overall efficiency. I designed an AI buddy to interact with the plant operators and provide them with essential information about the machinery, provide easy access to past data, evaluate and perform calculations on this past data to provide useful insights, and make future recommendations to prevent potential issues. This strongly developed my skills in Generative AI.",
    companyUrl: "https://www.accenture.com/us-en",
    logo: 'src/assets/logos/accenture.png'
  },
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