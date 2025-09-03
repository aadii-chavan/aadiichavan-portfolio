import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutTeam from './components/AboutTeam';
import OurSkillsSection from './components/TeamSection';
import ProjectsSection from './components/ProjectsSection';
import StrengthsSection from './components/StrengthsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <AboutTeam />
        <OurSkillsSection />
        <ProjectsSection />
        <StrengthsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;