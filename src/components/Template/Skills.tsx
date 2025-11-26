import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiFastapi, SiPytorch, SiTensorflow, SiPostgresql, SiTypescript } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: <FaPython className="text-yellow-400" /> },
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
                { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
                { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
                { name: "HTML5/CSS3", icon: <FaDatabase className="text-orange-500" /> }, // Placeholder icon
            ]
        },
        {
            title: "AI & Machine Learning",
            skills: [
                { name: "PyTorch", icon: <SiPytorch className="text-orange-600" /> },
                { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
                { name: "LLMs (RAG)", icon: <FaDatabase className="text-purple-500" /> }, // Placeholder
                { name: "NLP", icon: <FaDatabase className="text-blue-400" /> }, // Placeholder
            ]
        },
        {
            title: "Tools & Cloud",
            skills: [
                { name: "AWS", icon: <FaAws className="text-orange-400" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl font-bold mb-6 text-purple-400">{category.title}</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex flex-col items-center gap-2 group">
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
