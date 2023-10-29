import { BrowserView } from 'react-device-detect';

import CustomCursor from './pages/static/CustomCursor';
import Home from './pages/home/Home';
import Nav from './pages/static/Nav';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Experience from './pages/experience/Experience';

export default function App(): JSX.Element {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Experience />
      <BrowserView>
        <CustomCursor />
      </BrowserView>
    </>
  )
}
