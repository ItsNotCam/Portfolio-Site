import './_Nav.css'

import { useState } from "react";
import { uuidv4 } from "../../utilities"
import { BrowserView, MobileView } from 'react-device-detect';

export default function Nav(): JSX.Element {
  const NAV_ITEMS: Array<string> = [
    "home", "about", "projects", "experience"
  ]

  const [navIsSticky, setNavIsSticky] = useState<boolean>(false);

  window.onscroll = () => {
    if (window.scrollY > 500) {
      setNavIsSticky(true);
    } else if (window.scrollY < 50) {
      setNavIsSticky(false);
    }
  }

  var classNames: string = "nav-container";
  if (navIsSticky) {
    classNames = classNames.concat(" nav-sticky");
  }

  return (<>
    <BrowserView>
      <nav className={classNames}>
        <ul>
          {NAV_ITEMS.map(item =>
            <li key={uuidv4()}>
              <a href={`#${item}`} id="" className="color-light color-alt-hover">
                // {item}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </BrowserView>
    <MobileView>
      {navIsSticky ? null : (
        <nav className="nav-container">
          <ul>
            {NAV_ITEMS.map(item =>
              <li key={uuidv4()}>
                <a href={`#${item}`} id="" className="color-light color-alt-hover">
                  // {item}
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </MobileView>
  </>)
}