export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Dynamic Website for Rotonta Temple (Thesis)",
    description:
      "A full-stack educational platform developed as my BSc thesis. Built with PHP, MySQL, HTML/CSS. Included hierarchical roles (students/tutors), announcements, lesson modules, and project submissions. I handled front-end, back-end logic, and database design.",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    imageSrc: "/images/projects/rotonta-screenshot.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "LoopCV Internship (Web Developer)",
    description:
      "Completed a 3-month internship at LoopCV as a Web Developer. Contributed to feature development, bug fixes, and UI enhancements. Worked primarily with Next.js, Node.js, and MongoDB, helping to improve performance and add user-request features.",
    techStack: ["Next.js", "Node.js", "MongoDB", "JavaScript"],
    imageSrc: "/images/projects/loopcv-screenshot.svg",
    githubUrl: "https://github.com/p1erhs",
    demoUrl: "https://loopcv.com",
  },
  {
    title: "Fitness Mobile App (Personal Project)",
    description:
      "Designed a Java-based mobile app with a backend database for storing exercises and generating personalized fitness plans. Adapted workout routines based on user goals and tracked progress over time.",
    techStack: ["Java", "SQLite"],
    imageSrc: "/images/projects/fitness-app-screenshot.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Cryptography Algorithms (Personal Project)",
    description:
      "Implemented symmetric (AES-style) and asymmetric (RSA-style) encryption algorithms in Python. Focused on secure key management, performance optimization, and practical uses like file encryption and digital signatures.",
    techStack: ["Python"],
    imageSrc: "/images/projects/crypto-screenshot.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
];
