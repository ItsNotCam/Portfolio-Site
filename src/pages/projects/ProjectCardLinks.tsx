import { useState } from "react";
import { GitHub, LaunchOutlined, TextSnippetOutlined } from "@mui/icons-material";

import { ILink } from "./_ProjectList";
import { styles } from './ProjectCard';

export interface IProjectCardLinkProps {
  demoLink?: ILink;
  readmeLink?: ILink;
  gitLink?: ILink;
  setShowReadmeContent: (show: boolean) => void;
  setReadmeContent: (content: string) => void;
}

export const ProjectCardLinks = (props: IProjectCardLinkProps): JSX.Element => {
  const { gitLink, readmeLink, demoLink } = props;
  const [readmeContent, setReadmeContent] = useState<string>("");

  const showReadme = (): void => {
    if (readmeContent === "" && readmeLink !== undefined) {
      fetch(readmeLink.link)
        .then(data => data.text())
        .then(text => {
          setReadmeContent(text);
          props.setReadmeContent(text);
          props.setShowReadmeContent(true);
        })
        .catch(_ => console.log(`${name} has no readme`))
    } else {
      props.setReadmeContent(readmeContent);
      props.setShowReadmeContent(true);
    }
  }

  return (
    <div className="project-card-links color-alt-hover">
      {gitLink ? (
        <div className="project-card-link color-alt-hover">
          <a href={gitLink?.link} target="_blank">
            <GitHub
              style={styles.githubStyle}
              titleAccess="Open GitHub Repository"
            />
          </a>
        </div>
      ) : null}
      {readmeLink ? (
        <div className="project-card-link color-alt-hover">
          <TextSnippetOutlined
            style={styles.githubStyle}
            onClick={showReadme}
            titleAccess="Documentation"
          />
        </div>
      ) : null}
      {demoLink ? (
        <div className="project-card-link color-alt-hover">
          <a href={demoLink?.link} target="_blank">
            <LaunchOutlined
              style={styles.githubStyle}
              titleAccess="Open Demo"
            />
          </a>
        </div>
      ) : null}
    </div>
  );
};
