import { SkillsProps } from "./types";
import minty from "@/public/assets/Portfolio/development/minty.png";
import architectWebsite from "@/public/assets/Portfolio/development/architect-website.png";
import networkWebsite from "@/public/assets/Portfolio/development/network-website.png";
import newsletterSignup from "@/public/assets/Portfolio/development/newsletter-signup.png";
import todolist from "@/public/assets/Portfolio/development/to-do-list.jpg";
import blogWebsite from "@/public/assets/Portfolio/development/blog-website.png";
import keeperApp from "@/public/assets/Portfolio/development/keeper-app.png";
import weatherApp from "@/public/assets/Portfolio/development/weather-app.jpg";
import secretlySocialNetwork from "@/public/assets/Portfolio/development/secretly-social-network.jpg";
import stockManagementSystem from "@/public/assets/Portfolio/development/stock-management-system.png";
import colab from "@/public/assets/Portfolio/development/colab.png";
import atlasEstate from "@/public/assets/Portfolio/development/atlas-estate.jpg";
import techhub from "@/public/assets/Portfolio/development/techhub.jpg";
import crazyJetBoat from "@/public/assets/Portfolio/development/crazy-jetboat.png";

import colabUI from "@/public/assets/Portfolio/ui-ux/Colab-UI-Web-Design.png";
import schoolWebpageUI from "@/public/assets/Portfolio/ui-ux/School-Website-UI.jpg";
import atlasEstateui from "@/public/assets/Portfolio/ui-ux/Atlas-Estate-Website-UI.jpg";
import issueTrackerUI from "@/public/assets/Portfolio/ui-ux/Issue-Tracker-Dashboard-UI-Design.jpg";

import personalBranding from "@/public/assets/Portfolio/graphic-design/Personal-Branding.jpg";
import mbouaBranding from "@/public/assets/Portfolio/graphic-design/MBOUA-Branding.jpg";
import hopeBranding from "@/public/assets/Portfolio/graphic-design/Hope-Branding.jpg";
import creativeEyeBranding from "@/public/assets/Portfolio/graphic-design/CreativeEye-Branding.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const categories = ["Development", "UI/UX", "Graphic Design"] as const;

export const projects = [
  {
    id: "dev-15",
    image: issueTrackerUI,
    title: "Issue Tracker",
    description:
      "Issue Tracker is an ultimate solution for efficient issue tracking and management built with Next.js, TypeScript, Tailwind CSS, and Prisma.",
    technologies: [
      "Next.js",
      "Typescript",
      "Prisma",
      "Tailwind CSS",
      "Radix UI",
    ],
    link: "https://issue-tracker-project.vercel.app",
    repo: "https://github.com/hamza-ouaddi/issue-tracker",
    category: "Development",
    preferred: true,
    color: "#868CFF",
  },
  {
    id: "dev-14",
    image: techhub,
    title: "TechHub | IT Community Platform",
    description:
      "TechHub is a community platform for IT enthusiasts. Built with Next.js, MongoDB, Shadcn UI, Tailwind CSS, and Clerk for authentication and user management.",
    technologies: ["Next.js", "MongoDB", "Clerk", "Shadcn UI", "Tailwind CSS"],
    link: "https://tech-hub-tau.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/tech-hub",
    category: "Development",
    preferred: true,
    color: "#4775F1",
  },
  {
    id: "dev-13",
    image: atlasEstate,
    title: "Atlas Estate",
    description:
      "Atlas Estate, a real estate platform built with React, Node.js with Express.js, and MongoDB with Prisma. Tailwind CSS and Mantine UI for styling. And Auth0 for authentication. ",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Auth0",
      "Tailwind CSS",
      "Mantine UI",
    ],
    link: "https://atlas-estate.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/atlas-estate-website",
    category: "Development",
    preferred: true,
    color: "#F97432",
  },
  {
    id: "dev-12",
    image: crazyJetBoat,
    title: "Crazy JetBoat",
    description:
      "CrazyJetBoat is a modern and user-friendly platform for booking boat tours across multiple destinations, equipped with admin panels for efficient management of bookings, payments, users, discounts, and loyalty points. Built with Vue.js and PHP Laravel",
    technologies: ["Vue.js", "PHP Laravel", "Tailwind CSS"],
    link: "https://crazyjetboat.com/",
    repo: "#",
    category: "Development",
    preferred: true,
    color: "#D34846",
  },
  {
    id: "dev-11",
    image: colab,
    title: "CoLab",
    description:
      "CoLab, a platform for discovering gigs and job offers, built with PHP Laravel and Tailwind CSS.",
    technologies: ["PHP Laravel", "Tailwind CSS"],
    link: "https://github.com/hamza-ouaddi/CoLab",
    repo: "https://github.com/hamza-ouaddi/CoLab",
    category: "Development",
    preferred: true,
    color: "#795FFC",
  },

  {
    id: "dev-10",
    image: stockManagementSystem,
    title: "Stock Management System",
    description:
      "The Stock Management System is a C# (.Net ) and SQL project designed to streamline stock management processes.",
    technologies: ["C#", "SQL"],
    link: "https://github.com/hamza-ouaddi/Stock-Management-System",
    repo: "https://github.com/hamza-ouaddi/Stock-Management-System",
    category: "Development",
    preferred: false,
    color: "#3263BB",
  },

  {
    id: "dev-09",
    image: keeperApp,
    title: "Keeper App",
    description:
      "Keeper App, is a website where the user can write and post notes. The project was built using React and Material UI. ",
    technologies: ["React", "Material UI"],
    link: "https://keeper-app-one-iota.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/keeper-app",
    category: "Development",
    preferred: false,
    color: "#50C4D3",
  },
  {
    id: "dev-08",
    image: todolist,
    title: "To Do List",
    description:
      "A To Do List Website, The user can have a daily list that shows today's date, or customize a list with a title. As well as cross out and delete items.  ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://to-do-list-4fft.onrender.com",
    repo: "https://github.com/hamza-ouaddi/To-Do-List",
    category: "Development",
    preferred: false,
    color: "#A682E2",
  },
  {
    id: "dev-07",
    image: secretlySocialNetwork,
    title: "Secretly Social Network",
    description:
      "Secretly, a social network website where people can post secretly. Built using EJS, Node.js, Express.js, MongoDB (Mongoose).",
    technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
    link: "https://secretly-social-network.onrender.com/",
    repo: "https://github.com/hamza-ouaddi/Secretly-Social-Network",
    category: "Development",
    preferred: false,
    color: "#6D63FF",
  },
  {
    id: "dev-06",
    image: blogWebsite,
    title: "Blog Website",
    description: "a Blog Website project, to create, read, and delete a post.",
    technologies: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://blog-website-n7w3.onrender.com/",
    repo: "https://github.com/hamza-ouaddi/Blog-Website",
    category: "Development",
    preferred: false,
    color: "#67BFC1",
  },
  {
    id: "dev-05",
    image: weatherApp,
    title: "Weather App",
    description:
      "A Weather app utilizing OpenWeatherMap API for specific city weather info. Users can either input city name or enable location detection",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Weather-App/",
    repo: "https://github.com/hamza-ouaddi/Weather-App",
    category: "Development",
    preferred: false,
    color: "#90BFE6",
  },
  {
    id: "dev-04",
    image: newsletterSignup,
    title: "Newsletter Signup",
    description:
      "A Newsletter signup page that is linked with Mailchimp API, can sync email activities, and manage audiences and campaigns.",
    technologies: ["HTML", "CSS", "Node.js", "Express.js"],
    link: "https://newsletter-signup-puce.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/Newsletter-Signup",
    category: "Development",
    preferred: false,
    color: "#810DA8",
  },
  {
    id: "dev-03",
    image: networkWebsite,
    title: "Network Website",
    description: "A social media service landing webpage.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Network/",
    repo: "https://github.com/hamza-ouaddi/Network",
    category: "Development",
    preferred: false,
    color: "#054FF1",
  },
  {
    id: "dev-02",
    image: minty,
    title: "Minty",
    description: "Minty, is an application website for Tea lovers.",
    technologies: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://hamza-ouaddi.github.io/Minty/",
    repo: "https://github.com/hamza-ouaddi/Minty",
    category: "Development",
    preferred: false,
    color: "#51C195",
  },
  {
    id: "dev-01",
    image: architectWebsite,
    title: "Architect Portfolio",
    description: "A landing webpage for Architect as a portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Caroline-Aubrey-Architect-Portfolio/",
    repo: "https://github.com/hamza-ouaddi/Caroline-Aubrey-Architect-Portfolio",
    category: "Development",
    preferred: false,
    color: "#C6CACF",
  },

  {
    id: "ui-ux-4",
    image: issueTrackerUI,
    title: "Issue Tracker Dashboard UI Design",
    description: "A web app UI design for Issue tracking and management.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/23573917-Issue-Tracker-Dashboard-UI-Design",
    category: "UI/UX",
    preferred: false,
    color: "#868CFF",
  },
  {
    id: "ui-ux-3",
    image: atlasEstateui,
    title: "Atlas Estate Website Design",
    description: "UI web design for a real estate platform.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/23136344-Atlas-Estate-Website-Design",
    category: "UI/UX",
    preferred: false,
    color: "#F97432",
  },
  {
    id: "ui-ux-02",
    image: schoolWebpageUI,
    title: "School Homepage UI Concept",
    description: "School UI webpage design.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/23081744-School-Homepage-UI-Concept",
    category: "UI/UX",
    preferred: false,
    color: "#0055A6",
  },
  {
    id: "ui-ux-01",
    image: colabUI,
    title: "CoLab",
    description:
      "CoLab, a platform for discovering gigs and job offers, built with PHP Laravel and Tailwind CSS.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/22505281-Colab-Post-Discover-Job-Offers-UI-Web-Design",
    category: "UI/UX",
    preferred: false,
    color: "#795FFC",
  },
  {
    id: "graphic-design-04",
    image: creativeEyeBranding,
    title: "CreativEye Studio Brand Identity",
    description: "Brand Identity for Creative Studio.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://dribbble.com/shots/22272622-CreativEye-Studio-Brand-Identity",
    category: "Graphic Design",
    preferred: false,
    color: "#00E0B2",
  },
  {
    id: "graphic-design-03",
    image: hopeBranding,
    title: "Hope Advertising Agency Brand",
    description: "Branding for Marketing Agency.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://dribbble.com/shots/22008588-Hope-Advertising-Agency-Brand",
    category: "Graphic Design",
    preferred: false,
    color: "#E91F38",
  },
  {
    id: "graphic-design-02",
    image: mbouaBranding,
    title: "M'BOUA | Natural mineral water brand",
    description: "Branding for Natural mineral water company.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://dribbble.com/shots/22008549-M-BOUA-Natural-mineral-water-brand",
    category: "Graphic Design",
    preferred: false,
    color: "#004A9F",
  },
  {
    id: "graphic-design-01",
    image: personalBranding,
    title: "Personal Branding",
    description: "Personal Hamza Ouâddi Branding.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://www.behance.net/gallery/148307495/Personal-Branding",
    category: "Graphic Design",
    preferred: false,
    color: "#84A0B1",
  },
] as const;

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaWordpress,
  FaFigma,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiCsharp,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const skills: SkillsProps[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Sass", icon: FaSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: FaVuejs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PHP Laravel", icon: FaLaravel },
  { name: "C#", icon: SiCsharp },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL & MySQL", icon: GrMysql },
  { name: "WordPress", icon: FaWordpress },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Blender", icon: SiBlender },
  { name: "Figma", icon: FaFigma },
] as const;
