import { skills, Skill } from "../data/skills";
import Image from "next/image";

export default function Skills() {
    return (
        <section id="skills" className="bg-neutral dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-dark dark:text-gray-100 mb-8">Skills & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map((skill: Skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 relative mb-2">
                                <Image
                                    src={skill.iconPath}
                                    alt={`${skill.name} icon`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
