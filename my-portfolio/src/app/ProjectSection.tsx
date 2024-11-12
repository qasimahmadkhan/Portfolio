import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {

    const projects = [
        {
            imageSrc: "/chert.jpg",
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            tags: ["HTML", "SCSS", "Python", "Flask"],
            buttons: ["Live", "Cached"]
        },
        {
            imageSrc: "/source.png",
            title: "ProtectX",
            description: "Discord anti-crash bot",
            tags: ["React", "Express", "Discord.js", "Node.js"],
            buttons: ["Live"]
        },
        {
            imageSrc: "/kahoot.png",
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            tags: ["CSS", "Express", "Node.js"],
            buttons: ["Live"]
        }
    ];

    return (
        <section className="projects-section">
            <div className="projects-header">
                <h1 className="projects-heading">projects</h1>
                <a>View all
                    <span>&#8669;</span>
                </a>
            </div>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}