import './HomeSection.css'

import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import ProjectsSection from './ProjectSection';
import Quotes from './Quote';

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Quotes/>
      <ProjectsSection/>
    </div>
  );
}
