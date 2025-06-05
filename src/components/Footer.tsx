import dynamic from "next/dynamic";

const FaLinkedin = dynamic(
    () =>
        import("react-icons/fa").then((mod) => ({
            default: mod.FaLinkedin,
        })),
    { ssr: false }
);

const FaGithub = dynamic(
    () =>
        import("react-icons/fa").then((mod) => ({
            default: mod.FaGithub,
        })),
    { ssr: false }
);

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
                        <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/p1erhs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-yellow-400"
                    >
                        <FaGithub className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
