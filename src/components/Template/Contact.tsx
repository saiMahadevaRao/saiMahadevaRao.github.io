import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("https://formspree.io/f/xjkdjgqb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Oops! There was a problem submitting your form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Oops! There was a problem submitting your form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Email</h4>
                                <a href="mailto:saimahadevarao@gmail.com" className="text-neutral-400 hover:text-purple-400 transition-colors">
                                    saimahadevarao@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Phone</h4>
                                <p className="text-neutral-400">+1 (857) 405-8571</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Location</h4>
                                <p className="text-neutral-400">Boston, MA</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                                <FaLinkedin />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
                                <a href="https://linkedin.com/in/saimahadevarao" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors">
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-center justify-center text-center h-full py-10"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                                        >
                                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-neutral-300 mb-8 max-w-md">
                                            Thanks for reaching out. Let's build something great together! I'll get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-neutral-600"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-neutral-600"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 mb-6">
                                            <label htmlFor="subject" className="text-sm font-medium text-neutral-300">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-neutral-600"
                                                placeholder="Project Inquiry"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2 mb-8">
                                            <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-neutral-600"
                                                placeholder="Tell me about your project..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                        >
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
