import { BrowserView } from 'react-device-detect';

import Navbar from './components/home/Navbar';
import CustomCursor from './components/static/CustomCursor';
import Hero from './components/home/Hero';
import ScrollIcon from './components/home/ScrollIcon';
import Experience from './components/experience/Experience';
import Socials from './components/static/Socials'
import About from './components/about/About';
import Projects from './components/projects/Projects';

export default function App(): JSX.Element {
  return (
    <div className="main-container">
      <section className="home">
        <Navbar />
        <Hero />
        <ScrollIcon />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <BrowserView>
        <CustomCursor />
        <Socials />
      </BrowserView>
    </div>
  )
}
