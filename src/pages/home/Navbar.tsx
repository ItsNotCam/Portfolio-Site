import { useState } from "react";
import { uuidv4 } from "../../utilities"

const NavItem = (props: {page: string, index: number, sticky: boolean}): JSX.Element => {
	const {page, index, sticky} = props;
	return (
		<li className="nav-item" key={index}>
			<div className="nav-numbered-list color-light">
				{sticky ? null : <span className="nav-text-above">0{index}</span>}
				<a href={`#${page}`}
					className="nav-link color-light"
					id={`nav-hover-${index}`}
					key={uuidv4()}
				>// {page}
				</a>
			</div>
		</li>
	)
}

export default function Navbar(): JSX.Element {
	const [navIsSticky, setNavIsSticky] = useState<boolean>(false);
	
	window.onscroll = () => {
		if(window.scrollY > 500) {
			setNavIsSticky(true);
		} else if(window.scrollY < 50) {
			setNavIsSticky(false);
		}
	}

	const pages: Array<string> = [
		"home", "about", "projects",
		"experience"//, "contact"
	]
	
	return (
		<header>
			<div className={navIsSticky ? "nav-sticky" : "nav-static"}>
				<nav className="navbar" id="navbar">
					<ul className="navbar-list">
						{pages.map((p, i) => <NavItem page={p} index={i} sticky={navIsSticky} key={uuidv4()}/>)}
					</ul>
				</nav>
			</div>
		</header>
	)
}