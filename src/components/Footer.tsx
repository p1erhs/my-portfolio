// src/components/Footer.tsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import type { ComponentType } from "react";

const LinkedInIcon = FaLinkedin as unknown as ComponentType<any>;
const GitHubIcon = FaGithub as unknown as ComponentType<any>;
const EmailIcon = FaEnvelope as unknown as ComponentType<any>;

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-dark py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Ioannis Pieris. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    <a
                        href="https://linkedin.com/in/ioannis-pieris-435465256"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-yellow-400"
                    >
                        <LinkedInIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/p1erhs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-yellow-400"
                    >
                        <GitHubIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="mailto:piergiannis@hotmail.com"
                        aria-label="Email"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-yellow-400"
                    >
                        <EmailIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
