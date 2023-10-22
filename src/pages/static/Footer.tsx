import { GitHub, LinkedIn, Email, StickyNote2Outlined } from '@mui/icons-material';

const iconStyle: React.CSSProperties = {
  transition: "transform 0.25s",
  fontSize: "2.5rem",
}

export default function Footer(): JSX.Element {
  return (
    <div className="footer" id="contact">
      <a href="https://github.com/ItsNotCam" target="_blank">
        <GitHub htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My GitHub"/>
      </a>
      <a href="https://www.linkedin.com/in/cameron-young-37b173129/" target="_blank">
        <LinkedIn htmlColor='white'  className="color-alt-hover social-icon" style={iconStyle} titleAccess="My LinkedIn"/>
      </a>
      <a href="mailto:cyoung35@gmu.edu" target="_blank">
        <Email htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="Email Me"/>
      </a>
      <a href="Resume.pdf" target="_blank">
        <StickyNote2Outlined htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="View Resume"/>
      </a>
    </div>
  )
}