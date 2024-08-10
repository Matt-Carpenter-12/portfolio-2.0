import React from "react";

function Header({ currentSection, handleSectionChange }) {
  const sections = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                onClick={() => handleSectionChange(section)}
                className={currentSection === section ? "active" : ""}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
