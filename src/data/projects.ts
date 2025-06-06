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
        title: "LoopCV Internship (Web Developer)",
        description:
            "Completed a 3-month internship at LoopCV as a Web Developer. Contributed to feature development, bug fixes, and UI enhancements. Worked primarily with Next.js, Node.js, and MongoDB, helping to improve performance and add user-request features.",
        techStack: ["Vue.js", "Node.js", "MongoDB", "JavaScript", "Python"],
        imageSrc: "/images/projects/loopcv-screenshot.svg",
        githubUrl: "https://github.com/p1erhs",
        demoUrl: "https://loopcv.com",
    },
    {
        title: "Dynamic Website for Rotonta Temple (Thesis)",
        description:
            "A full-stack educational platform developed as my BSc thesis. Built with PHP, MySQL, HTML/CSS. Included hierarchical roles (students/tutors), announcements, lesson modules, and project submissions. I handled front-end, back-end logic, and database design.",
        techStack: ["HTML", "CSS", "PHP", "WordPress"],
        imageSrc: "/images/projects/rotonta-screenshot.svg",
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        title: "Fitness Mobile App (Team Project)",
        description:
            "Designed a Java-based mobile app with stored exercises and generating personalized fitness plans. Adapted workout routines based on user goals and tracked progress over time.",
        techStack: ["Java"],
        imageSrc: "/images/projects/fitness-app-screenshot.svg",
        githubUrl: "https://github.com/p1erhs/ProWorkout",
        //demoUrl: "#",
    },
    {
        title: "Cryptography Algorithms (University Project)",
        description:
            "Implemented symmetric (AES-style) and asymmetric (RSA-style) encryption algorithms in Python. Focused on secure key management, performance optimization, and practical uses like file encryption and digital signatures.",
        techStack: ["Python"],
        imageSrc: "/images/projects/crypto-screenshot.svg",
        //githubUrl: "#",
        //demoUrl: "#",
    },
    {
        title: "Gym Appointment Automation",
        description:
            "Implemented a script that uses the credentials given to login to Aristotle's university website for gym and appoints the first available session for the next day.",
        techStack: ["Javascript"],
        imageSrc: "/images/projects/crypto-screenshot.svg",
        githubUrl: "https://github.com/p1erhs/AuthGymAppointment/tree/main",
        //demoUrl: "",
    },
    {
        title: "Alarm Point",
        description:
            "Implemented a Node.js script that connects to a IOredis client, takes a list with queues and sends a notification to a slack url if a number of waiting jobs overcomes the number of 30000.",
        techStack: ["Javascript"],
        imageSrc: "/images/projects/crypto-screenshot.svg",
        //githubUrl: "https://github.com/p1erhs/AuthGymAppointment/tree/main",
        //demoUrl: "",
    },
    {
        title: "Job Search Optimizer",
        description:
            "A Node.js tool that ingests user search logs (CSV), calculates success rates, " +
            "and applies an exponential backoff algorithm to schedule future searches efficiently. " +
            "It groups searches by user and query, computes metrics like total searches, total jobs found, " +
            "and consecutive failures, then outputs an optimized search schedule (CSV) ranked by priority. " +
            "Includes analytics for zero‐result searches per platform to measure search efficiency.",
        techStack: ["Node.js"],
        imageSrc: "/images/projects/crypto-screenshot.svg",
        //githubUrl: "https://github.com/p1erhs/AuthGymAppointment/tree/main",
        //demoUrl: "",
    },
];
