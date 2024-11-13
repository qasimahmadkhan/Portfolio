import './HomeSection.css'

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
    </div>
  );
}
