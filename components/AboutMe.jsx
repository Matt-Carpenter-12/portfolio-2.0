import React from "react";
import avatar from "../assets/avatar.jpg";

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={avatar} alt="Your Name" />
      <p>Short bio about you...</p>
    </section>
  );
}

export default AboutMe;
