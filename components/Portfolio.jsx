import React from "react";

function Portfolio() {
  const projects = [
    { title: "Project 1", deployed: "#", github: "#" },
    // Add five more projects...
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
