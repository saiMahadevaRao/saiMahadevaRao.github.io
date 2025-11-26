import React from "react";
import { TypewriterLoop } from "../ui/TypewriterLoop";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaDownload, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
    const roles = [
        "Software Engineer",
        "AI Engineer",
        "Full Stack Developer"
    ];

    return (
        <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
            <div className="z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Hi, I&apos;m <span className="text-purple-500">Sai Nithish</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-20 mb-8 flex items-center justify-center"
                >
                    <TypewriterLoop
                        words={roles}
                        className="text-2xl md:text-5xl font-semibold text-purple-300"
                        cursorClassName="bg-purple-500"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-neutral-300 text-base md:text-xl max-w-2xl mb-10 leading-relaxed"
                >
                    I build intelligent systems that bridge the gap between complex data and actionable insights.
                    Specializing in Full Stack Development, RAG Systems, and Machine Learning.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 items-center justify-center"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]">
                        View Projects
                    </a>
                    <a href="/resume.pdf" download className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2">
                        <FaDownload /> Download Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex gap-6 mt-12 text-2xl text-neutral-400"
                >
                    <a href="https://linkedin.com/in/saimahadevarao" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><FaLinkedin /></a>
                    <a href="https://github.com/saiMahadevaRao" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><FaGithub /></a>
                    <a href="mailto:saimahadevarao@gmail.com" className="hover:text-purple-400 transition-colors"><FaEnvelope /></a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    delay: 1.5,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-3xl"
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
