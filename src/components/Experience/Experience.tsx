import { experience, education } from "../../data/experience";

const Experience = () => {
    return (
        <div className="py-20 w-full bg-neutral-950 relative z-20" id="experience">
            <h1 className="heading text-4xl font-bold text-center text-white mb-12">
                My <span className="text-purple-500">Work Experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-4 md:px-10">
                {experience.map((card) => (
                    <div
                        key={card.id}
                        className="flex-1 text-white border-neutral-800 border rounded-xl p-6 hover:border-purple-500 transition-colors duration-300 lg:col-span-2"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.company} {card.client && `| ${card.client}`}
                                </p>
                                <p className="text-start text-neutral-400 text-sm mt-1">
                                    {card.period} | {card.location}
                                </p>
                                <ul className="list-disc list-inside mt-4 text-neutral-300 space-y-2">
                                    {card.desc.map((item, i) => (
                                        <li key={i} className="text-sm md:text-base">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {card.skills.map((skill, i) => (
                                        <span key={i} className="text-xs bg-neutral-800 px-2 py-1 rounded text-neutral-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="heading text-4xl font-bold text-center text-white my-12">
                <span className="text-purple-500">Education</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 px-4 md:px-10 max-w-6xl mx-auto">
                {education.map((edu) => (
                    <div
                        key={edu.id}
                        className="flex-1 text-white border-neutral-800 border rounded-xl p-6 hover:border-purple-500 transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl md:text-2xl font-bold">
                                {edu.title}
                            </h1>
                            <p className="text-white-100 font-semibold">
                                {edu.institution}
                            </p>
                            <p className="text-neutral-400 text-sm">
                                {edu.period} {edu.gpa && `| GPA: ${edu.gpa}`}
                            </p>
                            <p className="text-neutral-300 mt-2">
                                {edu.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
