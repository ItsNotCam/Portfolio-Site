import './_Home.css'

import ScrollIcon from "./ScrollIcon";

export default function Home(): JSX.Element {
  return (
    <section id="home">
      <div className="home-title">

        <div className="home-title-lg">
          <h1>
            <span className="color-alt">CAM</span>
            <span className="color-light">ERON YOUNG</span>
            <span className="blinking-text color-light">_</span>
          </h1>
        </div>

        <div className="home-title-md">
          <h1>
            <span className="color-alt">CAM</span>
            <span className="color-light">ERON Y</span>
            <span className="blinking-text color-light">_</span>
          </h1>
        </div>

        <div className="home-title-sm">
          <h1>
            <span className="color-alt">CAM</span>
            <span className="color-light"> Y</span>
            <span className="blinking-text color-light">_</span>
          </h1>
        </div>

        <br />

        <p>
          <span className="color-light">SOFTWARE, CARS, and</span>
          <span className="color-alt"> COFFEE</span>
        </p>
      </div>
      <ScrollIcon />
    </section>
  )
}