import React from "react";
import avatar from "../assets/IMG_7221.png";

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={avatar} alt="Your Name" />
      <p> I am currently working as a pro product development representative for Service Titan based out of Glendale California. My background is pretty diverse, ranging from manufacturing operations, sales, customer, success, and onboarding. I recently completed a full stack software development course through University of Central Florida. Some of my main technical skills are Git, Github, HTML, CSS, JavaScript, Express.js, Nod.js, MongoDB, MySQL and React.js. </p>
    </section>
  );
}

export default AboutMe;
