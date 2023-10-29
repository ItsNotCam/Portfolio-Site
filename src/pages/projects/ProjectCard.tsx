import { useState } from "react";
import { CodeOutlined } from "@mui/icons-material";
import { ProjectCardLinks } from "./ProjectCardLinks";
import { IProject } from "./ProjectList";
import { uuidv4 } from "../../utilities";

export interface IProjectCardProps {
  PROJECT: IProject;
  setReadmeContent: (content: string) => void;
  setShowReadmeContent: (show: boolean) => void;
}

export const styles = {
  iconStyle: {
    fontSize: "3rem",
    color: "inherit"
  },
  githubStyle: {
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "inherit"
  }
}

const ProjectTag = (props: { tag: string }): JSX.Element => {
  return (
    <span className="project-tag">{props.tag}</span>
  );
}

export const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  const { PROJECT } = props;
  const mouseEvents: any = {
    onMouseEnter: () => setHighlighted(true),
    onMouseLeave: () => setHighlighted(false)
  };

  return (
    <div className="project-card" {...mouseEvents}>
      <div className="project-card-header">
        <CodeOutlined className="color-light color-alt-hover" style={styles.iconStyle} />
        <ProjectCardLinks 
          demoLink={PROJECT.demo_link} 
          readmeLink={PROJECT.readme_link} 
          gitLink={PROJECT.github_link} 
          setShowReadmeContent={props.setShowReadmeContent}
          setReadmeContent={props.setReadmeContent}
        />
      </div>
      {highlighted
        ? <h1 className="color-alt">{PROJECT.name}</h1>
        : <h1 className="color-light">{PROJECT.name}</h1>}
      <ul className="project-tags">
        {PROJECT.tags.map(tag => 
          <li key={uuidv4()}>
            <ProjectTag tag={tag}/>
          </li>
        )}
      </ul>
      <p>{PROJECT.description}</p>
    </div>
  );
};
