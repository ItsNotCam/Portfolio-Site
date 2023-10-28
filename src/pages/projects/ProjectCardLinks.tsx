import { GitHub, InfoOutlined, LaunchOutlined } from "@mui/icons-material";
import { styles } from "./Projects";
import { ILink } from "./ProjectList";
import { useEffect, useState } from "react";

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
    if(readmeContent === "") {
      fetch(readmeLink?.link ?? "")
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
    <div className="project-card-links">
      {gitLink ? (
        <a href={gitLink?.link} target="_blank">
          <GitHub 
            className="color-light color-alt-hover" 
            style={styles.githubStyle} 
            titleAccess="Open GitHub Repository" 
          />
        </a>
      ) : null}
      {readmeLink ? (
        <InfoOutlined 
          className="color-light color-alt-hover" 
          style={styles.githubStyle} 
          onClick={showReadme} 
          titleAccess="Show Info" 
        />
      ) : null}
      {demoLink ? (
        <a href={demoLink?.link} target="_blank">
          <LaunchOutlined 
            className="color-light color-alt-hover" 
            style={styles.githubStyle} 
            titleAccess="Open Demo" 
          />
        </a>
      ) : null}
    </div>
  );
};
