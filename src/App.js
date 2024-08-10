import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; //footer
import AboutMe from "./pages/AboutMe.jsx"; //aboutme
import Portfolio from "./pages/Portfolio.jsx"; //portfolio
import Contact from "./pages/Contact.jsx"; //contact
import Resume from "./pages/Resume.jsx"; //resume

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");

  const renderSection = () => {
    switch (currentSection) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header
        currentSection={currentSection}
        handleSectionChange={setCurrentSection}
      />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
