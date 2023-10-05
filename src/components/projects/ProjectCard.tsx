import { GitHub } from "@mui/icons-material";
import { ILink, IProject } from "./ProjectList";
import {CodeOutlined, LaunchOutlined} from '@mui/icons-material';
import React, { useState } from "react";

import { uuidv4 } from '../../utilities';

export interface IProjectCardProps {
  project: IProject,
  shown: boolean,
  setReadmeContent: (content: string) => void;
}

const TechTag = (tag: {tag: string}): JSX.Element => {
  return <li className="project-color-dark"><i>{tag.tag}</i></li>
}

export default function ProjectCard(props: IProjectCardProps): JSX.Element {
  const { project } = props;

  const [readme, setReadme] = useState<string>("");
  
  const styles: {folderStyle: React.CSSProperties, githubStyle: React.CSSProperties} = {
    folderStyle: {
      transition: "transform 0.25s",
      fontSize: "3rem",
    },
    githubStyle: {
      transition: "transform 0.25s",
      fontSize: "2rem",
      cursor: "pointer"
    }
  }

  const OpenReadme = () => {
    let readme: string = "";
    if(readme.length < 1) {
      let readme_link: string = project.readme_link?.link ?? "";
      fetch(readme_link)
      .then(res => res.text())
      .then(text => {
        setReadme(text);
        props.setReadmeContent(text)
      })
    } else {
      props.setReadmeContent(readme);
    }
  }
  
  const link: ILink | null = project.github_links ? project.github_links[0] : null;
  return (
    <>
      <div className="project-card-header" id={project.name.replaceAll(" ", "_")}>
        <CodeOutlined className="color-light" style={styles.folderStyle}/>
        <div className="project-card-links">
          {
            link !== null ? (
              <a href={link.link} target="_blank">
                <GitHub className="color-light color-alt-hover" style={styles.githubStyle}/>
              </a>
            ) : null
          }
          {
            project.readme_link ? (
              <LaunchOutlined className="color-light color-alt-hover" style={styles.githubStyle} onClick={OpenReadme}/>
            ) : null
          }
        </div>
      </div>
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <ul className="project-tech-tags">
          {project.tags.map(tag => <TechTag tag={tag} key={uuidv4()}/>)}
        </ul>
        <p>{project.description}</p>
      </div>
    </>
  )
}