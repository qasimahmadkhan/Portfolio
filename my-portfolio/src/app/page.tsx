import './HomeSection.css'

import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import Quotes from './Quote';

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Quotes/>
    </div>
  );
}
