import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ioannis Pieris | Full-Stack Developer & Powerlifter</title>
                <meta
                    name="description"
                    content="Ioannis Pieris - Computer Science graduate, Web Developer, and Competitive Powerlifter from Thessaloniki, Greece."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Ioannis Pieris – Portfolio" />
                <meta
                    property="og:description"
                    content="Full-Stack Developer | Node.js, React, Next.js | Powerlifter with national records."
                />
                <meta property="og:image" content="/images/profile.jpg" />
                <meta property="og:url" content="https://my-portfolio-nocj.vercel.app/" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
