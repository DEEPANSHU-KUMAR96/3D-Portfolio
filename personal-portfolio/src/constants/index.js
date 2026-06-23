import {
  mobile,
  backend,
  snapcart,
  neurixa,
  frostedbliss,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "3D Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Full Stack Training",
    company_name: "Ducat Institute",
    icon: starbucks, // apna custom icon use kar lena
    iconBg: "#383E56",
    date: "2023-2024",
    points: [
      "Learned Core Java, JDBC, Servlets, and MySQL.",
      "Built full-stack applications using Java technologies.",
      "Worked on database design and backend development concepts.",
      "Practiced problem-solving and object-oriented programming.",
    ],
  },
  {
    title: "MERN Stack Development",
    company_name: "Sheryians Coding School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2025 - 2026",
    points: [
      "Learned React.js, Node.js, Express.js, and MongoDB.",
      "Built multiple full-stack MERN applications.",
      "Implemented authentication using JWT and cookies.",
      "Integrated APIs and deployed applications on Render.",
    ],
  },
  {
    title: "Frontend & Animation Development",
    company_name: "Personal Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Built responsive websites using React and Tailwind CSS.",
      "Created interactive UI experiences with GSAP and Three.js.",
      "Developed modern portfolio and landing page projects.",
      "Focused on performance optimization and user experience.",
    ],
  },
  {
    title: "Full Stack & AI Projects",
    company_name: "Personal Projects",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2026 - Present",
    points: [
      "Developed SnapCart, Moodify, and Neurixa AI projects.",
      "Integrated Gemini AI, LangChain, and external APIs.",
      "Worked with Redis, ImageKit, and cloud deployments.",
      "Built scalable backend services using Node.js and MongoDB.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SnapCart",
    description:
      "A full-stack MERN e-commerce platform featuring secure authentication, seller dashboard, product management, shopping cart, online payments, and responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: snapcart,
    source_code_link: "https://github.com/DEEPANSHU-KUMAR96/SnapCart",
  },
  {
    name: "Neurixa AI",
    description:
      "AI-powered chatbot inspired by Perplexity AI using LangChain, Gemini API, and real-time web search to provide intelligent responses.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: neurixa,
    source_code_link: "https://github.com/DEEPANSHU-KUMAR96/Neurixa-AI",
  },
  {
    name: "Frosted Bliss",
    description:
      "Premium cake shop website built with React, Vite, and Tailwind CSS featuring elegant UI, responsive design, and smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: frostedbliss,
    source_code_link: "https://github.com/DEEPANSHU-KUMAR96/Frosted-Bliss-Premium-Cake-Shop",
  },

];

export { services, technologies, experiences, testimonials, projects };