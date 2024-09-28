import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

const HERO_CONTENT = 'I am a passionate full stack developer specializing in the MERN stack, with a focus on building dynamic and scalable web applications. As a final-year student at VIT Vellore, pursuing a degree in Computer Science Engineering, I have gained hands-on experience with front-end technologies like React, and back-end technologies including Node.js, MongoDB, and Express. My goal is to leverage my expertise in the MERN stack to develop innovative solutions that enhance user experiences and drive business growth.'
const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Growing up in Bangalore, I developed a love for problem-solving and technology, which led me to pursue a degree in Computer Science and Engineering at Vellore Institute of Technology, where I am now a final-year student. Specializing in the MERN stack, I enjoy working with technologies like React, Node.js, MongoDB, and Express to build scalable solutions. Outside of coding, I am passionate about playing and watching football. I also enjoy staying active, exploring new technologies, and continuously seeking opportunities to learn and grow."

const EXPERIENCES = [
  {
    year: "September 2023 – November 2023",
    role: "Automation Intern",
    company: "Capgemini",
    description:
      "Engineered and optimized server configurations for diverse projects utilizing Ansible and vRealize Orchestrator, enhancing systemefficiency and reliability through collaborative teamwork. Orchestrated and managed efficient server ecosystems using automated vRO workflows, achieving 99.95% uptime and partnering with cross-functional teams to support uninterrupted business operations.",
    technologies: ["Javascript", "Ansible", "vRealize Orchestrator"],
  },
  {
    year: "June 2019 – July 2023",
    role: "Frontend Developer",
    company: "Orom Corp",
    description:
      "Developed a high-performance static website using Next.js, a React framework for server-rendered static pages, to deliver fast and reliable web experiences. Leveraged React components to design and implement a visually appealing and user-friendly landing page, enhancing user engagement and satisfaction. Applied SEO best practices to optimize the landing page for search engine rankings, increasing visibility and traffic.",
    technologies: ["HTML", "CSS", "Next.js", "Vercel"],
  },
];

const PROJECTS = [
  {
    title: "Sociopedia",
    image: project1,
    description:
      "Engineered a comprehensive full stack social networking platform using React.js, Redux, and Material-UI for the frontend, coupled with a Node.js and Express backend, and MongoDB database. Constructed key features including JWT authentication, RESTful API endpoints for user and post management, and responsive design for seamless user experience across devices.",
    technologies: ["Javascript", "JWT", "React.js", "Node.js", "MongoDB", "Express.js", "Mongoose"],
  },
  {
    title: "Ethereum Deposit Tracker",
    image: project2,
    description:
      "Built a real-time Ethereum deposit tracking system using the Alchemy API, resulting in a 98% accuracy rate in transaction details. Implemented a notification system via Telegram and integrated Prometheus and Grafana for metrics collection and visualization, enabling performance monitoring and operational insights.",
    technologies: ["Typescript", "Alchemy", "web3.js", "Prometheus", "Grafana"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind-CSS", "React.js", "framer-motion"],
  },
  {
    title: "Weather Monitoring App",
    image: project4,
    description:
      "Architected a sophisticated weather monitoring system utilizing embedded sensors for temperature, humidity, noise levels, and fire alerts. Integrated a microcontroller that processed data with a 95% accuracy rate. Built a dynamic front-end with React and Recharts, utilizing Axios for API calls to display real-time data.",
    technologies: ["HTML", "CSS", "React.js"],
  },
];

const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+12 4555 666 00 ",
  email: "goyalkush096@gmail.com",
};

export { HERO_CONTENT, ABOUT_TEXT, EXPERIENCES, PROJECTS, CONTACT };
