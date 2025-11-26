
import { projects } from "../../data/projects";
import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
    return (
        <div className="py-20 w-full bg-neutral-950" id="projects">
            <h1 className="heading text-4xl font-bold text-center text-white mb-10">
                A small selection of <span className="text-purple-500">recent projects</span>
            </h1>
            <div className="max-w-7xl mx-auto px-8">
                <HoverEffect items={projects.map(project => ({
                    title: project.title,
                    description: project.des,
                    link: project.link,
                }))} />
            </div>
        </div>
    );
};

export default Projects;
