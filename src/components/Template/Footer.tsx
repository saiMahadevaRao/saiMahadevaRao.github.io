import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-neutral-950 py-10 border-t border-neutral-800 text-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
                <div className="flex gap-6 text-2xl text-neutral-400">
                    <a href="https://linkedin.com/in/saimahadevarao" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/saimahadevarao" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                        <FaGithub />
                    </a>
                    <a href="mailto:saimahadevarao@gmail.com" className="hover:text-purple-500 transition-colors">
                        <FaEnvelope />
                    </a>
                </div>

                <div className="text-center">
                    <p className="text-neutral-500 text-sm">
                        &copy; {new Date().getFullYear()} Sai Nithish. All Rights Reserved.
                    </p>
                    <p className="text-neutral-600 text-xs mt-1">
                        Software Engineer & AI/ML Researcher
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
