import React from "react";
import { projects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt, FaPython, FaBrain, FaRobot, FaDatabase, FaCode } from "react-icons/fa";
import { SiPytorch, SiLangchain, SiHuggingface, SiOpencv, SiOpencv as SiComputerVision, SiTensorflow, SiScikitlearn } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { TbBrain } from "react-icons/tb";

// Icon Mapping
const iconMap: { [key: string]: React.ReactNode } = {
    "Python": <FaPython className="text-yellow-400" />,
    "LangChain": <SiLangchain className="text-green-500" />,
    "Pinecone": <FaDatabase className="text-blue-400" />, // Generic DB icon for Pinecone
    "HuggingFace": <SiHuggingface className="text-yellow-500" />,
    "PyTorch": <SiPytorch className="text-orange-600" />,
    "OpenAIGym": <FaRobot className="text-gray-300" />,
    "MuJoCo": <FaCode className="text-red-400" />,
    "RL": <FaBrain className="text-purple-400" />,
    "EfficientNet": <BiNetworkChart className="text-blue-500" />,
    "GradCAM": <TbBrain className="text-pink-500" />,
    "LIME": <FaCode className="text-green-400" />,
    "GNN": <BiNetworkChart className="text-cyan-400" />,
    "tSNE": <FaCode className="text-yellow-600" />,
    "CNN": <BiNetworkChart className="text-blue-600" />,
    "ResNet": <BiNetworkChart className="text-indigo-500" />,
    "OpenCV": <SiOpencv className="text-green-600" />,
    "Transformers": <FaRobot className="text-yellow-600" />,
    "NLP": <FaCode className="text-blue-300" />,
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Project+Image";
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.link !== "/#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition-colors">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 text-white rounded-full hover:bg-purple-500 transition-colors">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-neutral-300 text-sm mb-4 line-clamp-3 flex-1">
                                    {project.des}
                                </p>

                                {/* Keywords */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.keywords?.map((keyword, i) => (
                                        <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded border border-purple-500/20">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.iconLists.map((iconKey, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xl" title={iconKey}>
                                            {iconMap[iconKey] || <FaCode className="text-gray-500" />}
                                        </div>
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

export default Projects;
