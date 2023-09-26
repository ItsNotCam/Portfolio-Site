import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/home/Hero';
import { BrowserView } from 'react-device-detect';
import { Socials } from './components/SocialLinks';
import { Credits } from './components/home/Credits';
import { ScrollIcon } from './components/home/ScrollIcon';
import Weather from './weather/Weather';


const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <section className="home">
        <Navbar />
        <Hero />
        {/* <Credits /> */}
        {/* <Weather /> */}
        <ScrollIcon />
      </section>
      <section className="about">
        <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero eligendi aliquid exercitationem 
          quasi laboriosam aperiam rerum omnis repellendus minima dolor modi nulla unde deleniti voluptatibus 
          numquam voluptas, temporibus id.
        </div>
        <img src="car_back.jpg" className="car"></img>
        <img src="car_front.jpg" className="car"></img>
      </section>
      <BrowserView>
        <CustomCursor />
        {/* <Socials /> */}
      </BrowserView>
    </div>
  )
}

export default App
