
import { experience } from "../../data/experience";

const Experience = () => {
    return (
        <section id="experience" className="py-20 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l border-white/20 ml-4 md:ml-10 space-y-12">
                    {experience.map((item) => (
                        <div key={item.id} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10"></div>

                            {/* Date Pill - Above Card */}
                            <div className="mb-3">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium backdrop-blur-sm">
                                    {item.period}
                                </span>
                            </div>

                            {/* Card */}
                            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:bg-black/40">
                                <div className="flex flex-col mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <h4 className="text-lg font-medium text-neutral-200">
                                        {item.company} {item.client && <span className="text-neutral-400 text-base">| {item.client}</span>}
                                    </h4>
                                </div>

                                <p className="text-sm text-neutral-400 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                                    {item.location}
                                </p>

                                <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-6">
                                    {item.desc.map((descItem, i) => (
                                        <li key={i} className="text-sm leading-relaxed text-neutral-300/90">
                                            {descItem}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.skills.map((skill, i) => (
                                        <span key={i} className="text-xs font-medium bg-white/5 text-purple-200/80 px-2.5 py-1 rounded-md border border-white/5 hover:bg-purple-500/10 hover:text-purple-200 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
