const SkillSection = () => {
    const skillsData = [
        {
            title: "Languages",
            description: "TypeScript Lua Python JavaScript"
        },
        {
            title: "Databases",
            description: "SQLite PostgreSQL Mongo"
        },
        {
            title: "Tools",
            description: "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
        },
        {
            title: "Other",
            description: "HTML CSS EJS SCSS REST Jinja"
        },
        {
            title: "Frameworks",
            description: "React Vue Dismake Discord.js Flask Express.js"
        }
    ];

    return (
        <div className="skills-area">
            <div className="skills-heading-container">
                <h1 className="skills-heading">skills</h1>
                <div className="line-divider"></div>
            </div>
            <div className="skills-section">
                <div className="decorative-elements">
                </div>
                <div className="skills-boxes">
                    {skillsData.map((skill, index) => (
                        <article key={index} className="skills-box">
                            <h3 className="skill-box-heading">{skill.title}</h3>
                            <p className="line-separator skill-box-desc">{skill.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillSection;