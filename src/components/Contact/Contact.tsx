import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "saimahadevarao@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full py-20 bg-neutral-950 relative z-20" id="contact">
            <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
                <h1 className="heading text-4xl font-bold text-white mb-10">
                    Ready to take <span className="text-purple-500">your digital presence</span> to the next level?
                </h1>
                <p className="text-neutral-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 mt-10">
                    <div
                        className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer hover:border-purple-500 transition-all group"
                        onClick={handleCopy}
                    >
                        <FaEnvelope className="text-2xl text-purple-500" />
                        <span className="text-xl text-white">{email}</span>
                        <div className="ml-2 p-2 rounded-full bg-neutral-800 group-hover:bg-purple-500/20 transition-colors">
                            {copied ? <FaCheck className="text-green-500" /> : <FaCopy className="text-neutral-400" />}
                        </div>
                    </div>

                    <a
                        href="https://linkedin.com/in/saimahadevarao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-300 hover:text-purple-500 transition-colors"
                    >
                        <FaLinkedin className="text-xl" />
                        <span>Connect on LinkedIn</span>
                    </a>
                </div>

                <div className="mt-20 text-neutral-500 text-sm">
                    <p>Copyright © 2025 Sai Nithish Mahadeva Rao</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
