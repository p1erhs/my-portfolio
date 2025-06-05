import { projects } from "../data/projects";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-dark dark:text-gray-100 text-center mb-12">
                    Projects & Experience
                </h2>
                <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
                    {projects.map((proj) => (
                        <div
                            key={proj.title}
                            className="flex flex-col md:flex-row bg-neutral dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <div className="relative w-full h-48 md:h-auto md:w-48">
                                <Image
                                    src={proj.imageSrc}
                                    alt={proj.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-top"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-dark dark:text-gray-100 mb-2">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-sm bg-accent dark:bg-yellow-500 text-white px-2 py-1 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-4">
                                    {proj.githubUrl && (
                                        <a
                                            href={proj.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent dark:text-yellow-400 hover:underline"
                                        >
                                            GitHub Repo →
                                        </a>
                                    )}
                                    {proj.demoUrl && (
                                        <a
                                            href={proj.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent dark:text-yellow-400 hover:underline"
                                        >
                                            Live Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
