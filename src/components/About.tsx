import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-dark dark:text-gray-100 mb-4">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        My name is <strong>Ioannis (John) Pieris</strong>. I graduated with a BSc in Computer Science
                        from Aristotle University of Thessaloniki (01/2019 – 01/2024). My thesis was on “Dynamic Website
                        Development for the Temple of Rotonta,” where me and my colleague Thanos Bamidis built a dynamic
                        website.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        I’m passionate about programming, web development, and problem solving. I have strong perception
                        in understanding hard problems and have experience in both front-end and back-end technologies.
                        I recently completed a 3-month internship at LoopCV as a Web Developer, where I contributed to
                        core features, improved functionality of various micro-services with Node.js, and enhanced the
                        UI using Vue.js.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Outside of coding, I’m a competitive powerlifter with 2 national titles in Greece and having
                        national record in Squat (285.5 kg) and in Total (751 kg) in 83 kg weight category (HPF). I’m
                        disciplined, goal-oriented, and driven by lifelong learning.
                    </p>
                </div>
                <div className="mx-auto md:mx-0 w-48 h-48 relative rounded-full overflow-hidden ring-4 ring-accent dark:ring-yellow-400">
                    <Image src="/images/profile.jpg" alt="Ioannis Pieris" layout="fill" objectFit="cover" priority />
                </div>
            </div>
        </section>
    );
}
