import React from "react";

const About = () => {
    return (
        <section id="about" className="py-20 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
                    <div className="w-full md:w-1/3">
                        <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20">
                            {/* Replace with actual image path if available, using placeholder for now or migrated asset */}
                            <img
                                src="/assets/images/MyPhoto.jpg"
                                alt="Sai Nithish"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400";
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 text-neutral-200 leading-relaxed space-y-6">
                        <p className="text-lg">
                            Hello! I&apos;m <span className="text-purple-400 font-semibold">Sai Nithish Mahadeva Rao</span>, a passionate Software Engineer and AI/ML Researcher.
                            I thrive at the intersection of full-stack development and artificial intelligence, building systems that are not only robust but also intelligent.
                        </p>
                        <p>
                            With a strong foundation in Computer Science and hands-on experience in building RAG systems, microservices, and data pipelines,
                            I enjoy tackling complex problems and turning them into scalable solutions. My journey has led me to work on diverse projects,
                            from AI-powered code review tools to personalized nutrition recommendation engines.
                        </p>
                        <p>
                            I am constantly learning and exploring new technologies to stay ahead in the rapidly evolving tech landscape.
                            Whether it&apos;s fine-tuning LLMs or optimizing React performance, I love the challenge of creating impactful software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
