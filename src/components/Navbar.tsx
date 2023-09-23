export const Navbar = (): JSX.Element => {
    const pages: Array<string> = [
        "home", "about", "projects",
        "experience", "contact"
    ]
    const NavItem = (p: string, i: number): JSX.Element => {
        return (
            <li className="nav-item">
                <div className="nav-numbered-list color-light">
                    <span className="nav-text-above">0{i}</span>
                    <a href={`#${p}`} 
                        className="nav-link color-light" 
                        id={`nav-hover-${i}`} 
                        key={i}
                        >// {p}
                    </a>
                </div>
            </li>
        )
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                { pages.map( (p, i) => NavItem(p, i)) }
            </ul>
        </nav>
    )
}