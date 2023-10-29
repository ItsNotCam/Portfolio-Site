import { useState } from "react";
import { CodeOutlined } from "@mui/icons-material";
import { ProjectCardLinks } from "./ProjectCardLinks";
import { IProject, PROJECTS } from "./ProjectList";
import { uuidv4 } from "../../utilities";

import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { IconButton } from '@mui/material';

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

const hasLinks = (PROJECT: IProject): boolean => {
  return PROJECT.github_link !== undefined || PROJECT.demo_link !== undefined || PROJECT.readme_link !== undefined;
}

const ProjectTag = (props: { tag: string }): JSX.Element => {
  return (
    <span className="project-tag">{props.tag}</span>
  );
}

export const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const [highlighted, setHighlighted] = useState<boolean>(false);
  const [droppedDown, setDroppedDown] = useState<boolean>(false);

  const { PROJECT } = props;
  const mouseEvents: any = {
    onMouseEnter: () => setHighlighted(true),
    onMouseLeave: () => setHighlighted(false)
  };

  const card_large: JSX.Element = (<>
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
    <ul className="project-tags-lg">
      {PROJECT.tags.map(tag => 
        <li key={uuidv4()}>
          <ProjectTag tag={tag}/>
        </li>
      )}
    </ul>
    {PROJECT.description.map(
      description => <p key={uuidv4()}>{description}</p>
    )}
  </>)

  const card_small: JSX.Element = (
    <>
      <div className="project-card-sm-info">
        {droppedDown
        ? <h1 className="color-alt">{PROJECT.name}</h1>
        : <h1 className="color-light">{PROJECT.name}</h1>}
        <ul className="project-tags-sm">
          {PROJECT.tags.map(tag => 
            <li key={uuidv4()}>
              <ProjectTag tag={tag}/>
            </li>
          )}
        </ul>
        {droppedDown
          ? (<>
            <div className="project-card-sm-desc">
              {PROJECT.description.map(
                description => <p key={uuidv4()}>{description}</p>
              )}
            </div>
            {hasLinks(PROJECT)
              ? <h2 className="color-alt">Links</h2>
              : null}

            <ProjectCardLinks 
              demoLink={PROJECT.demo_link} 
              readmeLink={PROJECT.readme_link} 
              gitLink={PROJECT.github_link} 
              setShowReadmeContent={props.setShowReadmeContent}
              setReadmeContent={props.setReadmeContent}
            />
          </>)
          : null
        }
      </div>
      <div className="project-card-sm-dropdown">
        <IconButton onClick={() => setDroppedDown(!droppedDown)}>
          {droppedDown
            ? (
              <ArrowDropDownOutlinedIcon  
                className="project-icon-button"
                style={{
                  fontSize: "2rem"
                }}
              />
            ) : (
              <ArrowLeftOutlinedIcon
                className="project-icon-button"
                style={{
                  fontSize: "2rem"
                }}
              />
            )}
        </IconButton>
      </div>
    </>
  )

  return (<>
    <div className="project-card-lg" {...mouseEvents}>
      {card_large}
    </div>
    <div className="project-card-sm" {...mouseEvents} onClick={() => setDroppedDown(!droppedDown)}>
      {card_small}
    </div>
  </>);
};
