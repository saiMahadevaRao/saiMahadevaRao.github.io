
import { AuroraBackground } from "../ui/aurora-background";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
    const words = "Building intelligent systems with deep learning, reinforcement learning, and NLP";

    return (
        <section id="hero">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Sai Nithish Mahadeva Rao
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        AI/ML Engineer | M.S. in Artificial Intelligence
                    </div>
                    <TextGenerateEffect words={words} className="text-center text-[40px] md:text-5xl lg:text-6xl" />

                    <div className="flex gap-4 mt-8">
                        <a href="#projects">
                            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                                View My Work
                            </button>
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="bg-transparent border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-4 py-2">
                                Download Resume
                            </button>
                        </a>
                    </div>

                    <div className="flex gap-6 mt-8 text-2xl dark:text-white">
                        <a href="https://linkedin.com/in/saimahadevarao" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/saiMahadevaRao" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="mailto:saimahadevarao@gmail.com" className="hover:text-red-500 transition-colors">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </AuroraBackground>
        </section>
    );
};

export default Hero;
