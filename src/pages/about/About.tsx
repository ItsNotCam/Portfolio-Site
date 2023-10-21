import { ClassRounded, Email, GitHub, LinkedIn, StickyNote2Outlined } from "@mui/icons-material";
import React, { useState } from "react";

export default function About(): JSX.Element {
  const [isShowingResume, setIsShowingResume] = useState<boolean>(false);

  const iconStyle: React.CSSProperties = {
    transition: "transform 0.25s",
    fontSize: "2.5rem",
  }

  const resume: JSX.Element = (
    <div className="overlay-dark">
      <embed src="https://github.com/ItsNotCam/HeaterPi-Server/files/13060518/Complex.Machine.pdf" 
        width="100%" 
        height="50%" 
        />
    </div>
  )

  return (
    <section id="about">
      <div className="about">
        <h1> 
          <span className="color-alt">Who</span> I am
        </h1>
        <div className="about-body">
          <div className="about-text">
            <span className="about-text-title">Hello! </span>
            <br />
            <h2>
              <span className="about-color-dark">My name is</span>
              <span className="color-alt"> Cameron Young.</span>
              <br />
              <span className="about-color-dark">I enjoy telling computers what to do.</span>
            </h2> 
            <br />
            <p className="about-color-dark">
              I am a current student at 
              <span className="color-alt"> George Mason University</span>.
              <br/>
              In 
              <span className="color-light"> the Fall of 2024 </span>
              I will be receiving my
              <span className="color-light"> Major in Information Technology </span> 
              with a concentration in 
              <span className="color-light"> Software Engineering </span> 
              and a 
              <span className="color-light"> Minor in Computer Science</span>.
            </p>
            <br />
            <p className="about-color-dark">
              I am a lifelong learner and am currently looking for 
              <span className="color-light"> internships </span> 
              and experience within the 
              <span className="color-light"> Software Engineering </span> 
              field.
            </p>
            <br />
            <br />
            <h2><span className="color-alt">Connect</span> with Me</h2>
            <div className="about-links">
              <a href="https://github.com/ItsNotCam" target="_blank">
                <GitHub htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My GitHub"/>
              </a>
              <a href="https://www.linkedin.com/in/cameron-young-37b173129/" target="_blank">
                <LinkedIn htmlColor='white'  className="color-alt-hover social-icon" style={iconStyle} titleAccess="My LinkedIn"/>
              </a>
              <a href="mailto:cyoung35@gmu.edu" target="_blank">
                <Email htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="Email Me"/>
              </a>
              <a href="" target="_blank">
                <StickyNote2Outlined htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="View Resume"/>
              </a>
            </div>
          </div>
          <div className="about-profile-pic">
            <img src="me.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  )
}