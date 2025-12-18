import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Layout,
  Server,
  Smartphone,
  Database,
  Code,
  Users,
} from "lucide-react";

import certGraphicDesign from "./assets/c1.jpg";
import certReactDev from "./assets/u8.jpg";
import cv from "./assets/Swochhanda 1 cv.pdf";

export const portfolioData = {
  //  Personal Information
  personalInfo: {
    name: "SwocXanda Karanjeet",
    role: "FrontEnd Developer",
    logoText: "< Swoc",
    logoAccent: "Xanda >",
    bio: "I am a dedicated Frontend Developer with a passion for building robust and scalable web applications. With over 1 year of hands-on experience, I specialize in React.js and modern frontend technologies, working closely with Laravel-based backends. My approach focuses on clean, maintainable code and thoughtful UI design to deliver reliable and user-friendly experiences.",
    email: "swochhanda14@gmail.com",
    phone: "+977 8763422162",
    location: "Kathmandu, Nepal",
    cvUrl: cv, // Add CV download link here
    githubUsername: "Swochhanda14",
  },

  //  Social Links
  socialLinks: [
    {
      platform: "Github",
      url: "https://github.com/Swochhanda14",
      icon: Github,
      show: true,
    },
    {
      platform: "Linkedin",
      url: "https://www.linkedin.com/in/swocxanda-karanjeet-91868021b/",
      icon: Linkedin,
      show: true,
    },
    { platform: "Twitter", url: "#", icon: Twitter, show: false },
    {
      platform: "Email",
      url: "swochhanda14@gmail.com",
      icon: Mail,
      show: true,
    },
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    greeting: "HELLO, I'M A FRONTEND DEVELOPER",
    headline: "Building Digital Experiences",
    description:
      "I craft reliable, scalable, and visually stunning web applications using modern technologies.",
    image:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t51.82787-15/565713952_17972441600952553_8922890402426139405_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ylxItuvBuUAQ7kNvwFwNL81&_nc_oc=AdklfCvPk0ciNekmtpWPEQ-29rAAsbWQduI20eiViIp544UOEl8hXgB2HbOh6umddS0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=RoQ0fA5OUbSdtfAx-dZ-YQ&oh=00_AfmE5z1BMzI52N-9z9yEHGy1u1NCMvUXbXfDhDOsGMtE9A&oe=6948A84C",
    stats: [
      { value: "1+", label: "Years Experience" },
      { value: "10+", label: "Projects Built" },
    ],
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Passionate About Technology",
    image:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t51.82787-15/565713952_17972441600952553_8922890402426139405_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ylxItuvBuUAQ7kNvwFwNL81&_nc_oc=AdklfCvPk0ciNekmtpWPEQ-29rAAsbWQduI20eiViIp544UOEl8hXgB2HbOh6umddS0&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=RoQ0fA5OUbSdtfAx-dZ-YQ&oh=00_AfmE5z1BMzI52N-9z9yEHGy1u1NCMvUXbXfDhDOsGMtE9A&oe=6948A84C",
    stats: [
      { value: "01+", label: "Years Experience" },
      { value: "10+", label: "Projects Completed" },
    ],
  },

  // Skills Section
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 80, color: "bg-cyan-400" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-300" },
        { name: "JavaScript", level: 85, color: "bg-blue-400" },
        { name: "TypeScript", level: 70, color: "bg-blue-400" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 70, color: "bg-green-400" },
        { name: "Laravel", level: 60, color: "bg-green-300" },
        { name: "MySQL", level: 60, color: "bg-green-500" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 90, color: "bg-orange-400" },
        { name: "Docker", level: 50, color: "bg-blue-500" },
        { name: "Figma", level: 80, color: "bg-pink-400" },
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      id: 1,
      title: "Room Rental Portal",
      category: "Traditional Stack",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      description:
        "A full-stack room rental platform allowing users to browse, book, and manage rooms. Includes an admin panel for room management, user handling, and booking control.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      repoLink: "https://github.com/Swochhanda14/Dreamyrental",
      demoLink: "#",
      show: true,
    },
    {
      id: 2,
      title: "Employee Leave Management System",
      category: "Traditional Stack",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      description:
        "A web-based system for managing employee leave requests, approvals, and leave records with role-based access for admins and employees.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      repoLink: "https://github.com/Swochhanda14/ELMS",
      demoLink: "#",
      show: true,
    },
    {
      id: 3,
      title: "Attendance Management System",
      category: "Traditional Stack",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      description:
        "An attendance tracking system to record, manage, and monitor employee or student attendance with reports and basic analytics.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      repoLink: "https://github.com/Swochhanda14/AMS",
      demoLink: "#",
      show: true,
    },
    {
      id: 4,
      title: "BrewBox Coffee Shop E-commerce Platform",
      category: "Modern Stack",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
      description:
        "An e-commerce platform for a coffee shop featuring product listings, cart functionality, order management, and a responsive user interface.",
      tech: ["React", "Node.js", "Laravel", "MySQL"],
      repoLink: "https://github.com/Swochhanda14/brewbox_laravel12",
      demoLink: "#",
      show: true,
    },
    {
      id: 5,
      title: "Handcrafted Products E-commerce Platform",
      category: "Modern Stack",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      description:
        "An online marketplace for handcrafted products with product browsing, user authentication, cart functionality, and order processing.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      repoLink: "https://github.com/Swochhanda14/kkd-project",
      demoLink: "#",
      show: true,
    },
  ],

  // Services Section
  services: [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive, pixel-perfect user interfaces with React and Tailwind CSS.",
      colSpan: "md:col-span-2",
      color: "text-cyan-400",
      show: true,
    },
    {
      icon: Server,
      title: "Backend Systems",
      description:
        "Robust API development using Node.js, Express, and scalable databases.",
      colSpan: "md:col-span-1",
      color: "text-purple-400",
      show: true,
    },
    {
      icon: Smartphone,
      title: "Mobile App Dev",
      description: "Cross-platform mobile applications using React Native.",
      colSpan: "md:col-span-1",
      color: "text-pink-400",
      show: true,
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized schema design for SQL and NoSQL databases.",
      colSpan: "md:col-span-2",
      color: "text-blue-400",
      show: true,
    },
  ],

  // Testimonials Section
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechFlow",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      content:
        "Working with this developer was an absolute pleasure. They delivered high-quality code on time and went above and beyond to ensure the application was performant and scalable.",
      rating: 5,
      show: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      content:
        "The attention to detail in the UI/UX design is outstanding. Our user engagement increased by 40% after the redesign. Highly recommended!",
      rating: 5,
      show: true,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Founder, StartupX",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      rating: 5,
      show: true,
    },
  ],

  // Experience Section
  experience: [
    {
      title: "FrontEnd Developer",
      company: "Personal Projects & Freelancing",
      period: "2023 - 2024",
      description:
        "Developed various React-based applications, focusing on clean code, responsive design, and user experience. Built several portfolio pieces and worked with modern frontend tools.",
      type: "Work",
      show: true,
    },
    {
      title: "Computer Science Coursework",
      company: "Self-Taught & Online Platforms",
      period: "2022 - 2023",
      description:
        "Focused on mastering JavaScript, React, and Laravel. Completed multiple comprehensive bootcamps and projects to build a solid foundation in web development.",
      type: "Education",
      show: true,
    },
  ],

  //Education Section

  education: [
    {
      degree: "School Leaving Certificate (SLC)",
      school: "Celebration Co-Ed",
      period: "2019",
      description:
        "Completed secondary-level education with a strong academic foundation and interest in computer studies.",
      show: true,
    },
    {
      degree: "Higher Secondary Education (+2)",
      school: "The Kist College & SS",
      period: "2019 - 2021",
      description:
        "Completed higher secondary education with a focus on science and foundational knowledge in computer and information technology.",
      show: true,
    },
    {
      degree: "Bachelor in Computer Application",
      school: "St.Lawrence College",
      period: "2022 - 2026",
      description:
        "Specialized in Software Development and Web Technologies. Currently pursuing a Bachelor’s degree with a strong academic focus.",
      show: true,
    },
  ],

  // Certifications Section
  certifications: [
    {
      name: "Graphic Design Masterclass",
      issuer: "Animax Anmation Academy",
      date: "2023",
      link: certGraphicDesign,
      image: certGraphicDesign,
      show: true,
    },
    {
      name: "Frontend Development & React js",
      issuer: "Udemy",
      date: "2025",
      link: certReactDev,
      image: certReactDev,
      show: true,
    },
  ],

  // Section Visibility
  visibility: {
    hero: true,
    about: true,
    experience: true,
    education: true,
    github: true,
    skills: true,
    projects: true,
    services: true,
    testimonials: false,
    contact: true,
  },
};
