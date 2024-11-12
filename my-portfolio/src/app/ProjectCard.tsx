import Image from "next/image";
interface Project {
    imageSrc: string;
    title: string;
    description: string;
    tags: string[];
    buttons: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="project-card">
            <Image src={project.imageSrc} alt={project.title} width={400} height={300} />
            <div className="project-tags">
                {project.tags.join(" ")}
            </div>
            <hr className="line-separator"></hr>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="card-buttons">
                <a href="Livelink" className="card-button">Live Link</a>
            </div>
        </div>
    )
}
export default ProjectCard;