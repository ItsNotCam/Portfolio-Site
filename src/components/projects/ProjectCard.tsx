import { Center } from "@react-three/drei";
import { ILink, IProjects } from "./ProjectsConstants";

const TechnologyTag = (tag: string, key: any): JSX.Element => {
  return <li className="info-tag color-alt-brighter" key={key}> {tag} </li>
}

const TechLink = (tag: ILink, key: any): JSX.Element => {
  return (
    <li className="info-link" key={key}>
      🔗<a href={tag.link} className="color-light color-alt-hover" target="_blank">{tag.name}</a>
    </li>
  )
}

const GithubLink = (tag: ILink, key: any): JSX.Element => {
  const githublink: JSX.Element = (
    // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 64 64">
    //   <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
    // </svg>
    // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 64 64">
    //     <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
    // </svg>
    // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2rem" height="2rem" viewBox="0,0,256,256" style={{"fill":"#000000;"}}>
    //     <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path></g></g>
    // </svg>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFVUlEQVR4nO2ax0sDTxTH/Rtiw4IdjV3sIgoWbKAIiv2iouJFEY0NUY+KBysWFMGjHrxZsEZviqhgxB5F7FiwxxLfjzf8EoybTWZjVuXH7wsPQnYz+z6zb968mYmBQCCA/4IZ/LYDfw7Ezs4OsrKyoL29HSYmJmBnZwdubm7g5eWFGH7e3t4m1/CezMxMsLW1/RsgZmZmUFBQADMzM/D+/g5chb+ZmpqC/Px80pbgp0HMzc2hpqYGTk9PQV86OTmB6upqnYE4g6SkpIBUKgW+JJVKITk5mT8Q7Kmenh74KQ0ODpI3r1cQJycnWF1dhZ/W8vIyODo66gfEy8uL11DSpr29PeLDt0CwNzCN/rakUikIhULdQHBM/EY4aQozTRmNFaS/vx/+mnp7e7mBYIrVpPr6ehJ24eHh0NDQAIeHhzo7h7N9XV0dhIaGkuqgs7NT4/1JSUl0IJjytA1uNzc3RhgikEwmg7m5OaiqqoK4uDjw9fUFS0tLYn5+fuQ7kUgEY2Nj8PDwABUVFWBsbKzSVmhoqNbBry7EGCA4Y2sTW6yamppS5322e52dnbU+HztKIwg6SFN2cJmouJpQKNT6/OPjY0ZnqoBgAUijgIAA3kBiY2OpfMjLy2MHwSqWRjk5ObyBiEQiKh8mJyfVg2DGoC3Fm5qaeAMZGBig8uHt7Q2sra2ZILgootHd3R0ZkHyBBAYGwuvrK5UvGRkZTJCOjg6qH2Oe5wtC8K8NDw9T+dLW1sYEwSUojSIjI3kHyc7OpvIF5yMGCE40NHFpYmLCO4i/vz8VCBa0DJCrqyutP8R7+IYQCATg7u5OBXJ5eckEwZ0ObcJ7DA0NeQcJDg5WiQLcgUH7+PhQ8QdLIgaIIlPEx8eTesfb2xvs7e3BxcWFfFbYT4AIPhmGMk4NaPhsrCpcXV2VHcsAub29JReXlpZgbW0N9vf3SSidn5+TzwrLzc3l3fne3l7WqHh6elIOA3xLDJDd3V1ycX5+nqTYyspKkqexYg0JCSHLTUWv8A1iZGREnuXh4QFBQUEkU6alpZFZv6WlheyFKZYADJDp6Wlysbm5mVSXXV1dMDIyAgsLCyCRSMjbuL6+Jq+zsLCQ17chk8lIbx8cHMDm5iasrKzA+Pg49PX1kbWQYs77XKYoQbDsoNXj4yN5U/qGKCkpYQxoTWpsbGSCJCYmAhc9Pz9DUVGRXkINS/LW1lZOEKiEhAQmiIWFBVUK/qrFxUUylr6u9GgMV47YGRi2XCWTyVTWRSplvGKcfBWuU4qLi8kExKaLiwsYGhqCsrIy0lM+Pj5gY2OjbNvBwYGsY3A7tLa2Vrnc1VUTExMqnaICgj3LlvJwwYNrcHSYJuzQWdyhVLSNmxX4HV7Th1JTU9lBMO1hplAnzFx4PSIiAu7v7zVCIDRbOOG178JIpVLiCysIGqZeNmEuV5QQGIYYGopDnKOjIxCLxZCenq51bJSWln4LRCQSMdo0ULe7sb6+ThWXuhr2JtsztAmrDnUVuNoNupiYGJDL5YxG8Dt9zR+YFLhKLpdDVFQUty1TnEXVCWsy3FjDTbqvccrFMKtxVU9PD2t7rCAYYlh3cRGXuQTb56LZ2VmNG4AajxVwl4JLLHN9K7Ta3NzUegKs9aDH09MTtra2fg1kY2ODrBj1cvRmZWVFKs2fBhGLxdRn8dSHoRifWGKry2b6BpHL5dDd3c1po4Pz8XRYWBhZH/AFIpFIIDo6+mf+MIA9hSn48zkKHvhzbefs7Ez5e2yrvLxc5+2mb/2FA+cRLFtGR0eV5QsXwyIVf4sF4HfmJMH//w4S/D0z+G0H9AXyDxaYZON4ZbrAAAAAAElFTkSuQmCC"></img>
  )

  return (
    <li className="info-github-link" key={key}>
      {githublink}<a href={tag.link} className="color-light color-alt-hover" target="_blank">{tag.name}</a>
    </li>
  )
}

export function ProjectCard(props: IProjects, shown: boolean) {
  const date: string = `${props.start_month} ${props.start_year} - ${props.end_month} ${props.end_year}`;
  const company_name: JSX.Element = (<>
    <span className="info-title-separator"> //</span> {props.affiliated_company}
  </>);

  return (
    <div className="info-info">
      <div className="info-date">
        <p>{date}</p>
      </div>
      <h2 className="info-title">
        <span className="color-alt"> {props.name}</span>
          {props.affiliated_company ? company_name : ""} 
      </h2>
      <div className="info-description-container">
        <p className="info-p-tag">{"<p>"}</p>
        <div className="info-description">
          <div className="info-vertical-line" />
          <p>{props.description}</p>
        </div>
        <p className="info-p-tag">{"</p>"}</p>
      </div>
      {props.github_links ? (
      <div className="info-links">
        <ul>
          {props.github_links.map(link => GithubLink(link, link.name))}
        </ul>
      </div>
      ) : null}
      {props.other_links ? (
      <div className="info-links">
        <ul>
          {props.other_links.map(link => TechLink(link, link.name))}
        </ul>
      </div>
      ) : null}
      <div className="info-tags">
        <ul>
          {props.tags.map((tag, i) => TechnologyTag(tag, (i+1)*10))}
        </ul>
      </div>
    </div>
  )
}