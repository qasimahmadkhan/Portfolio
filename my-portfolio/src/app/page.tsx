import './HomeSection.css'

import AboutMe from './AboutMe';
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import ProjectsSection from './ProjectSection';
import Quotes from './Quote';
import SkillSection from './SkillSection';

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Quotes/>
      <ProjectsSection/>
      <SkillSection/>
      <AboutMe/>
    </div>
  );
}
