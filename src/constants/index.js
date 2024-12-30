import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  azure,
  html,
  css,
  aws,
  googleCloud,
  excel,
  python,
  salesforce,
  git,
  streamlit,
  cSharp,
  infosys,
  persistent,
  takeItIdeas,
  surveyForm,
  cafeMenu,
  technicalPage,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "AI Enthusiast",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "C#",
    icon: cSharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "Streamlit",
    icon: streamlit,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Google Cloud",
    icon: googleCloud,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Mentee",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Gained in-depth knowledge of emerging technologies, programming, and problem-solving through curated courses and expert mentorship.", 
      "Developed foundational skills in software development, cloud computing, and agile methodologies, aligning with industry standards.",
      "Engaged in practical projects and assignments, fostering a strong understanding of real-world applications of technology.",
      "Enhanced critical thinking, teamwork, and technical proficiency, contributing to personal and professional development.",
    ],
  },
  {
    title: "Trainee",
    company_name: "Persistent",
    icon: persistent,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Gained insights into AWS cloud computing concepts and their applications through personalized guidance from industry experts.",
      "Enhanced technical skills in cloud architecture, DevOps, and problem-solving, tailored for advancing in the tech industry.",
      "Participated in workshops and practical sessions focused on AWS services, including deployment, scalability, and security practices.",
      "Engaged in an initiative designed to empower women in technology, fostering confidence, leadership, and career advancement.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Take It Ideas Innovative Solution",
    icon: takeItIdeas,
    iconBg: "#383E56",
    date: "Dec 2024 - Mar 2025",
    points: [
      "Gained hands-on exposure to the complete project lifecycle, including visual design, front-end development, database integration, and server-side programming.",
      "Applied design thinking principles to create original, user-centric front-end designs, enhancing creativity and problem-solving skills.",
      "Developed JavaScript-based features for multiple user roles (Admin, Student, TPO, HR) and implemented server-side programming for dynamic web applications.",
      "Successfully delivered an editable, functional web application while collaborating with team members and adhering to the company’s work culture and best practices.",
    ],
  },
];

const projects = [
  {
    name: "Cafe Menu",
    description:
      "Developed a responsive café menu website using HTML and CSS, showcasing a visually appealing design with intuitive navigation to enhance user experience.",
    tags: [
      {
        name: "css3",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
    ],
    image: cafeMenu,
    source_code_link: "https://github.com/wHAteverYou-66/Cafe-Menu",
  },
  {
    name: "Survey Form",
    description:
      "Designed and developed a responsive survey form using HTML and CSS, ensuring user-friendly input fields and a clean layout for seamless data collection.",
      tags: [
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "html5",
          color: "green-text-gradient",
        },
      ],
    image: surveyForm,
    source_code_link: "https://github.com/wHAteverYou-66/Survey-Form",
  },
  {
    name: "Technical Documentation Page",
    description:
      "Created a structured and responsive technical documentation page using HTML and CSS, featuring a clear layout and easy navigation for user accessibility.",
      tags: [
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "html5",
          color: "green-text-gradient",
        },
      ],
    image: technicalPage,
    source_code_link: "https://github.com/wHAteverYou-66/Technical-documentation-Page",
  },
];

export { services, technologies, experiences, projects };
