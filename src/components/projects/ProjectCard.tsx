import { ConstructionOutlined, Folder, GitHub } from "@mui/icons-material";
import { ILink, IProjects } from "./ProjectsConstants";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';


export default function ProjectCard(props: IProjects, shown: boolean): JSX.Element {
  const date: string = `${props.month} ${props.year}`;
  const link: ILink | null = props.github_links ? props.github_links[0] : null;
  
  const folderStyle: React.CSSProperties = {
    transition: "transform 0.25s",
    fontSize: "3rem",
  }

  const githubStyle: React.CSSProperties = {
    transition: "transform 0.25s",
    fontSize: "2rem",
    cursor: "pointer"
  }

  const TechTag = (tag: string): JSX.Element => {
    return (
      <li className="project-color-dark"><i>{tag}</i></li>
    )
  }

  return (
    <>
      <div className="project-card-header" id={props.name.replaceAll(" ", "_")}>
        <CodeOutlinedIcon className="color-light" style={folderStyle}/>
        <div className="project-card-links">
          {
            link !== null ? (
              <a href={link.link} target="_blank">
                <GitHub className="color-light color-alt-hover" style={githubStyle}/>
              </a>
            ) : null
          }
          <LaunchOutlinedIcon className="color-light color-alt-hover" style={githubStyle} onClick={() => console.log("lol")}/>
        </div>
      </div>
      <div className="project-card-body">
        <h3>{props.name}</h3>
        <ul className="project-tech-tags">
          {props.tags.map(tag => TechTag(tag))}
        </ul>
        <p>{props.description}</p>
      </div>
    </>
  )
}