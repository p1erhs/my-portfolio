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
            "Completed a 3-month internship at LoopCV as a Web Developer. Contributed to feature development, bug fixes, and UI enhancements. Worked primarily with Vue.js, Node.js, and MongoDB, helping to improve performance and add user-request features.",
        techStack: ["Vue.js", "Node.js", "MongoDB", "JavaScript", "Python"],
        imageSrc: "/images/projects/loopcv-screenshot.png",
        githubUrl: "https://github.com/p1erhs",
        demoUrl: "https://loopcv.com",
    },
    {
        title: "Dynamic Website for Rotonta Temple (Thesis)",
        description:
            "A dynamic platform developed as my BSc thesis. Built with PHP, MySQL, HTML/CSS. This website is dedicated to temple of Rotonta in Thessaloniki, it was needed to show people all history behind this historical temple so we used the best practises to create a modern responsive website so it can be displayed with great user experience.",
        techStack: ["HTML", "CSS", "PHP", "WordPress"],
        imageSrc: "/images/projects/rotonta-screenshot.svg",
    },
    {
        title: "Job Search Optimizer (Internship Project)",
        description:
            "A Node.js tool that ingests user search logs (CSV), calculates success rates, " +
            "and applies an exponential backoff algorithm to schedule future searches efficiently. " +
            "It groups searches by user and query, computes metrics like total searches, total jobs found, " +
            "and consecutive failures, then outputs an optimized search schedule (CSV) ranked by priority. " +
            "Includes analytics for zero‐result searches per platform to measure search efficiency.",
        techStack: ["Node.js"],
        imageSrc: "/images/projects/backoff.png",
        githubUrl: "https://github.com/p1erhs/Exponential-back-off-algorithm-for-job-searching",
        //demoUrl: "",
    },
    {
        title: "Rpe Calculator (Personal Project)",
        description:
            "This tool is inspired by RPECalculator.com, but extended to include RPE values down to 4.0 based on my own training needs." +
            "By offering a wider RPE range and an integrated Back-off planner, you can tailor your intensity and volume precisely.",
        techStack: ["HTML", "CSS", "Javascipt"],
        imageSrc: "/images/projects/rpe-calculator.png",
        githubUrl: "https://github.com/p1erhs/RPE-Calculator",
        demoUrl: "https://p1erhs.github.io/RPE-Calculator/",
    },
    {
        title: "LinkedIn OpenToWork Automator (Internship Project)",
        description:
            "A dual-version tool to automate commenting on LinkedIn post with hashtag #OpenToWork  \n" +
            "1. **CLI Script** this script automates the process with simplicity you just have to copy paste on your browser's console.  \n" +
            "2. **Chrome Extension** (Manifest v3) for a one-click toggle from your browser toolbar with its own settings page.",
        imageSrc: "/images/projects/crypto-screenshot.svg",
        techStack: ["JavaScript"],
        githubUrl: "https://github.com/p1erhs/linkedin-opentowork",
    },
    {
        title: "Softone vs Stripe Export Comparator (Internship Project)",
        description:
            "This Flask web app allows authenticated users to upload financial export files from Softone and Stripe, and automatically compare them to identify:" +
            "Missing Mark Codes in Stripe" +
            "Missing Invoice IDs in Softone" +
            "Differences in total amounts per invoice" +
            "Softone entries with missing Mark Codes",
        techStack: ["Html", "CSS", "Flask"],
        imageSrc: "/images/projects/accounting.png",
        githubUrl: "https://github.com/p1erhs/ExportsComparison",
        demoUrl: "https://loopcv.pythonanywhere.com/",
    },
    {
        title: "Educontent (University project)",
        description:
            "Dynamic website with educational content . Implemented tutor and student roles, so they can have specific properties and acceses to website's content.",
        techStack: ["Html", "CSS", "PHP"],
        imageSrc: "/images/projects/fitness-app-screenshot.svg",
        githubUrl: "https://github.com/p1erhs/Educontent",
        //demoUrl: "#",
    },
    {
        title: "Alarm Point",
        description:
            "Implemented a Node.js script that connects to a IOredis client, takes a list with queues and sends a notification to a slack url if a number of waiting jobs overcomes the number of 30000.",
        techStack: ["Javascript"],
        imageSrc: "/images/projects/crypto-screenshot.svg",
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
        title: "Gym Appointment Automation (Personal Project)",
        description:
            "Implemented a script that uses the credentials given to login to Aristotle's university website for gym and appoints the first available session for the next day.",
        techStack: ["Javascript"],
        imageSrc: "/images/projects/crypto-screenshot.svg",
        githubUrl: "https://github.com/p1erhs/AuthGymAppointment.git",
        //demoUrl: "",
    },
];
