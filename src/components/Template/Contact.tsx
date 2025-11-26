import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                alert("Thank you for your message! I will get back to you soon.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Oops! There was a problem submitting your form.");
        }
    };

    return (
        <section id="contact" className="py-20 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Email</h4>
                                <a href="mailto:saimahadevarao@gmail.com" className="text-neutral-400 hover:text-purple-400 transition-colors">
                                    saimahadevarao@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Phone</h4>
                                <p className="text-neutral-400">+1 (857) 405-8571</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Location</h4>
                                <p className="text-neutral-400">Boston, MA</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-500 text-xl shrink-0 border border-white/10">
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
                        <form onSubmit={handleSubmit} className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10">
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
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600"
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
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600"
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
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600"
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
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none placeholder:text-neutral-600"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
