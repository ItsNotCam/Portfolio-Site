import { GitHub } from "@mui/icons-material";
import { CodeOutlined, LaunchOutlined } from '@mui/icons-material';
import React, { useState } from "react";

import { ILink, IProject } from "./ProjectList";
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
  const [readme, setReadme] = useState<string>("");
  const [gettingReadme, setGettingReadme] = useState<boolean>(false);
  
  const UpdateReadme = (text: string): void => {   
    setReadme(text);
    props.setReadmeContent(text); 
  }
  
  const OpenReadme = () => {
    if(readme.length < 1) {
      let readme_link: string = PROJECT.readme_link?.link ?? "";
      setGettingReadme(true);
      
      fetch(readme_link)
        .then(res => res.text())
        .then(text => UpdateReadme(text))
        .catch(() => {
          const failedText: string = `# Failed to retrieve README file from GitHub. 
          Please visit the GitHub link to read more about this project.`;
          setReadme(failedText);
          props.setReadmeContent(failedText);
        })
        .finally(() => setGettingReadme(false));
    } else {
      props.setReadmeContent(readme);
    }
  }
  
  const { project: PROJECT } = props;
  const link: ILink | null = PROJECT.github_links ? PROJECT.github_links[0] : null;
  return (
    <>
      <div className="project-card-header" id={PROJECT.name.replaceAll(" ", "_")}>
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
            PROJECT.readme_link ? (
              <LaunchOutlined className="color-light color-alt-hover" style={styles.githubStyle} onClick={OpenReadme}/>
            ) : null
          }
        </div>
      </div>
      <div className="project-card-body">
        <h3>{PROJECT.name}</h3>
        <ul className="project-tech-tags">
          {PROJECT.tags.map(tag => 
            <li className="project-color-dark" key={uuidv4()}>
              <i>{tag}</i>
            </li>
          )}
        </ul>
        <p>{PROJECT.description}</p>
      </div>
      { gettingReadme ? <h1>Loading Readme...</h1> : null }
    </>
  )
}

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
