import { GitHub, CodeOutlined, LaunchOutlined, InfoOutlined } from '@mui/icons-material';
import React, { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

import { IProject } from "./ProjectList";
import { uuidv4 } from '../../utilities';

export interface IProjectCardProps {
  project: IProject;
  shown: boolean;
  setReadmeContent: (content: string) => void;
  setShowReadmeContent: (show: boolean) => void;
}

export default function ProjectCard(props: IProjectCardProps): JSX.Element {
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [isGettingReadme, setIsGettingReadme] = useState<boolean>(false);
  const hasLinks: boolean = props.project.github_link !== null || props.project.readme_link !== null || props.project.demo_link !== null;  

  const UpdateReadme = (text: string): void => {   
    setReadmeContent(text);
    props.setReadmeContent(text); 
    props.setShowReadmeContent(true);
  }
  
  // add any custom styling based on keywords
  const FormatText = (text: string): string => {
    return text.replaceAll(":)", "😃");
  }

  const OpenReadme = () => {
    console.log(readmeContent);
    if(readmeContent) {
      UpdateReadme(readmeContent);
    } else {
      let readme_link: string = PROJECT.readme_link?.link ?? "";
      setIsGettingReadme(true);
      
      fetch(readme_link)
        .then(res => res.text())
        .then(text => {
          const formattedText: string = FormatText(text);
          UpdateReadme(formattedText);
        })
        .catch(() => {
          const failedText: string = `# Failed to retrieve README file from GitHub. 
          Please exit and visit the GitHub link to read more about this project.`;
          UpdateReadme(failedText);
          setReadmeContent(null);
        })
        .finally(() => setIsGettingReadme(false));
    }
  }

  const OpenDemo = () => {
    window.open(PROJECT.demo_link?.link, "_blank") 
  }
  
  const { project: PROJECT } = props;
  return (
    <>
      <div className="project-card-header" id={PROJECT.name.replaceAll(" ", "_")}>
        <CodeOutlined className="color-light" style={styles.iconStyle} />
        {hasLinks ? (
          <div className="project-card-links">
            {
              PROJECT.github_link ? (
                <a href={PROJECT.github_link?.link} target="_blank">
                  <GitHub className="color-light color-alt-hover" style={styles.githubStyle} titleAccess="Open GitHub Repository"/>
                </a>
              ) : null
            }
            {
              PROJECT.readme_link ? (
                <InfoOutlined className="color-light color-alt-hover" style={styles.githubStyle} onClick={OpenReadme} titleAccess="Show Info" />
              ) : null
            }
            {
              PROJECT.demo_link ? (
                <LaunchOutlined className="color-light color-alt-hover" style={styles.githubStyle} onClick={OpenDemo} titleAccess="Open Demo"/>
              ) : null
            }
          </div>
          ) : null
        }
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
      
      { isGettingReadme ? 
        (
          <div className="readme-loading">
            <CircularProgress /> 
          </div>
        )
        : null
      }
    </>
  )
}

const styles: {iconStyle: React.CSSProperties, githubStyle: React.CSSProperties} = {
  iconStyle: {
    transition: "transform 0.25s",
    fontSize: "3rem",
  },
  githubStyle: {
    transition: "transform 0.25s",
    fontSize: "2rem",
    cursor: "pointer"
  }
}
