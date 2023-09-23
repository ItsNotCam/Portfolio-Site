import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Credits } from './components/Credits';
import { Hero } from './components/Hero';
import { BrowserView } from 'react-device-detect';


const App = (): JSX.Element => {
  return (<>
    <Navbar />
    <Hero />
    <Credits />
    <BrowserView>
      <CustomCursor />
    </BrowserView>
  </>)
}

export default App
