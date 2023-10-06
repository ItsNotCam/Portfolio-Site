import { BrowserView } from 'react-device-detect';

import CustomCursor from './pages/static/CustomCursor';
import Experience from './pages/experience/Experience';
import Socials from './pages/static/Socials'
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Home from './pages/home/Home';

export default function App(): JSX.Element {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Experience />
      <BrowserView>
        <CustomCursor />
        <Socials />
      </BrowserView>
    </>
  )
}
