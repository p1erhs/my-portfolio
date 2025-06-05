// src/components/Hero.tsx
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
    const [text] = useTypewriter({
        words: ["Full-Stack Developer", "Competitive Powerlifter"],
        loop: 0,
        delaySpeed: 2000,
    });

    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center min-h-screen bg-neutral dark:bg-dark px-4 text-center"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark dark:text-gray-100 mb-4">
                Hi, I’m Ioannis Pieris
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 h-12">
                <span>{text}</span>
                <Cursor cursorColor="#2563EB" />
            </h2>
            <p className="max-w-2xl text-gray-700 dark:text-gray-300 mb-8">
                I’m a Computer Science graduate from Aristotle University of Thessaloniki. Passionate about programming,
                web development, and competitive powerlifting. I love tackling complex problems and building scalable,
                accessible solutions.
            </p>
            <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition"
            >
                Learn More ↓
            </a>
        </section>
    );
}
