import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/home/Hero';
import { BrowserView } from 'react-device-detect';
// import { Socials } from './components/SocialLinks';
// import { Credits } from './components/home/Credits';
import { ScrollIcon } from './components/home/ScrollIcon';
// import Weather from './weather/Weather';
import { Experience } from './components/experience/Experience';


const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <section className="home">
        <Navbar />
        <Hero />
        <ScrollIcon />
      </section>
      <section id="about">
      </section>
      <section id="experience">
        <Experience />
      </section>
      <BrowserView>
        <CustomCursor />
      </BrowserView>
    </div>
  )
}

export default App
