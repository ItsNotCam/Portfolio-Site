import { GitHub, LinkedIn, Email, StickyNote2Outlined } from '@mui/icons-material';
import { LINKED_IN, GITHUB, EMAIL, RESUME } from './_LINKS';

const iconStyle: React.CSSProperties = {
  transition: "transform 0.25s",
  fontSize: "2.5rem",
}

export default function Footer(): JSX.Element {
  return (
    <div className="footer" id="contact">
      <a href={GITHUB} target="_blank">
        <GitHub htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My GitHub" />
      </a>
      <a href={LINKED_IN} target="_blank">
        <LinkedIn htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="My LinkedIn" />
      </a>
      <a href={EMAIL} target="_blank">
        <Email htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="Email Me" />
      </a>
      <a href={RESUME} target="_blank">
        <StickyNote2Outlined htmlColor='white' className="color-alt-hover social-icon" style={iconStyle} titleAccess="View Resume" />
      </a>
    </div>
  )
}