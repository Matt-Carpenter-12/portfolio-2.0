import React from "react";
import resume from "../assets/resume.pdf";

function Resume() {
  const proficiencies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resume} download>
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
