import React from 'react';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { EMAIL, GITHUB, LINKED_IN } from './_LINKS';

export default function Socials() {
  const iconStyle: React.CSSProperties = {
    transition: "transform 0.25s",
    fontSize: "1.8rem",
  }


  return (<>
    <div className='lol'>
      <div className="contact-line overlay bg-color-light" style={{opacity: 0.5}} />
      <p style={{opacity: 0.7}} >Written by Cameron Young</p>
    </div>
    <div className="contact overlay">
      <a href={GITHUB} target="_blank">
        <GitHub htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My GitHub"/>
      </a>
      <a href={LINKED_IN} target="_blank">
        <LinkedIn htmlColor='white'  className="color-alt-hover social-icon" style={iconStyle} titleAccess="My LinkedIn"/>
      </a>
      <a href={EMAIL} target="_blank">
        <Email htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="Email Me"/>
      </a>
      <div className="contact-line overlay bg-color-light" style={{opacity: 0.5}} />
    </div>
  </>)
}