import { Email, GitHub, LinkedIn, StickyNote2Outlined } from '@mui/icons-material'
import './_About.css'
import { RESUME } from '../static/_LINKS'

const iconStyle: React.CSSProperties = {
  transition: "transform 0.25s",
  fontSize: "2.5em",
}

export default function About(): JSX.Element {
  return (
    <section id="about">
      <h1 className="section-title">
        <span className="color-alt">Who</span>
        <span className="color-light"> I Am</span>
      </h1>
      <div className="about-container">
        <div className="about-description">
          <h2>Hello!</h2>

          <br />

          <p>My name is <span className="color-alt">Cameron Young.</span></p>
          <p><span className="color-light">I enjoy telling computers what to do.</span></p>

          <br />

          <p>I am a current student at <span className="color-alt">George Mason University.</span></p>
          <p>
            In the
            <span className="color-light"> Fall of 2025 </span>
            (god willing) I will be receiving my
            <span className="color-light"> Major in Information Technology </span>
            with a concentration in
            <span className="color-light"> Software Engineering </span>
            and a
            <span className="color-light"> Minor in Computer Sience.</span>
          </p>

          <br />

          <p>
            I am a lifelong learner and am currently looking for internships
            and experience within the Software Engineering field.
          </p>

          <br />

          <div className="connections">
            <div className="resume">
              <a href={RESUME} target="_blank" className="color-light bg-dark resume-link">
                <StickyNote2Outlined htmlColor='white' className="color-alt-hover social-icon" style={{ fontSize: "2rem" }} titleAccess="View Resume" />
                My Resume
                <StickyNote2Outlined htmlColor='white' className="color-alt-hover social-icon" style={{ fontSize: "2rem" }} titleAccess="View Resume" />
              </a>
            </div>
            <div className="about-connect">
              <div className="about-connect-links">
                <a href="https://github.com/ItsNotCam" target="_blank">
                  <GitHub htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/cameron-young-37b173129/" target="_blank">
                  <LinkedIn htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My LinkedIn" />
                </a>
                <a href="mailto:cyoung35@gmu.edu" target="_blank">
                  <Email htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="Email Me" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src="me.jpg" className="about-image" />
      </div>
    </section>
  )
}