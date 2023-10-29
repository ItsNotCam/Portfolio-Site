import { useState } from "react";
import { uuidv4 } from "../../utilities"
import './_Nav.css'

const NavItem = (props: {name: string, index: number, sticky: boolean}): JSX.Element => {
  const {name: NAME, index: INDEX, sticky: STICKY} = props;
  return (
    <li className="nav-item">
      {
        STICKY ? null
        : <span className="color-light nav-item-index">0{INDEX}</span>
      } 
      <a href={`#${NAME}`} className="color-light color-alt-hover"> 
        // {NAME}
      </a>
    </li>
  )
}

export default function Nav(): JSX.Element {
  const NAV_ITEMS: Array<string> = [
    "home", "about", "projects", "experience"
  ]

  const [navIsSticky, setNavIsSticky] = useState<boolean>(false);
	
	window.onscroll = () => {
		if(window.scrollY > 500) {
			setNavIsSticky(true);
		} else if(window.scrollY < 50) {
			setNavIsSticky(false);
		}
	}

  var classNames: string = "nav-container";
  if(navIsSticky) {
    classNames = classNames.concat(" nav-sticky");
  }

  return (
    <nav className={classNames}>
      <ul>
        {NAV_ITEMS.map((item, i) => 
          <NavItem index={i} name={item} sticky={navIsSticky} key={uuidv4()}/>
        )}
      </ul>
    </nav>
  )
}