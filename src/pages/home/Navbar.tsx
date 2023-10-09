import { useState } from "react";
import { uuidv4 } from "../../utilities"

const NavItem = (props: {page: string, index: number}): JSX.Element => {
	const {page: p, index: i} = props;
	return (
		<li className="nav-item" key={i}>
			<div className="nav-numbered-list color-light">
				<span className="nav-text-above">0{i}</span>
				<a href={`#${p}`}
					className="nav-link color-light"
					id={`nav-hover-${i}`}
					key={uuidv4()}
				>// {p}
				</a>
			</div>
		</li>
	)
}

const pages: Array<string> = [
	"home", "about", "projects",
	"experience"//, "contact"
]

export default function Navbar(): JSX.Element {
	const [navIsSticky, setNavIsSticky] = useState<boolean>(false);
	
	window.onscroll = () => {
		if(window.scrollY > 500)
			setNavIsSticky(true);
		else if(window.scrollY < 50)
			setNavIsSticky(false);
	}


	return (
		<header>
			<div className={navIsSticky ? "nav-sticky" : "nav-static"}>
				<nav className="navbar" id="navbar">
					<ul className="navbar-list">
						{pages.map((p, i) => <NavItem page={p} index={i} key={uuidv4()}/>)}
					</ul>
				</nav>
			</div>
		</header>
	)
}