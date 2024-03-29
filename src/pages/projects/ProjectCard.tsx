import { useState } from "react";
import { ArrowLeftOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material';

import { ProjectCardLinks } from "./ProjectCardLinks";
import { IProject } from "./_ProjectList";
import { uuidv4 } from "../../utilities";


export interface IProjectCardProps {
  PROJECT: IProject;
  setReadmeContent: (content: string) => void;
  setShowReadmeContent: (show: boolean) => void;
}

export const styles = {
  iconStyle: {
    fontSize: "3em",
    color: "inherit"
  },
  githubStyle: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "inherit"
  }
}

const hasLinks = (PROJECT: IProject): boolean => {
  return PROJECT.github_link !== undefined || PROJECT.demo_link !== undefined || PROJECT.readme_link !== undefined;
}


export const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const [droppedDown, setDroppedDown] = useState<boolean>(false);

  const { PROJECT } = props;
  
  const CARD_LARGE = (): JSX.Element => (
    <div className="project-card-lg">
      <p className="project-date color-darker">
        {PROJECT.year}
      </p>
      <div className="project-card-lg-header">
        <h1>{PROJECT.name}</h1>
        <ProjectCardLinks
          demoLink={PROJECT.demo_link}
          readmeLink={PROJECT.readme_link}
          gitLink={PROJECT.github_link}
          setShowReadmeContent={props.setShowReadmeContent}
          setReadmeContent={props.setReadmeContent}
        />
      </div>
      <ul className="project-tags-lg">
        {PROJECT.tags.map(tag =>
          <li key={uuidv4()}>
            <span className="project-tag">{tag}</span>
          </li>
        )}
      </ul>
      {PROJECT.description.map(
        description => <p key={uuidv4()}>{description}</p>
      )}
    </div>)

  //<div className="project-card-sm" {...mouseEvents}>
  const CARD_SMALL = (): JSX.Element => (
    <div className="project-card-sm">
      <div className="project-card-sm-info">
        <div className="project-card-sm-header">
          <div className="project-card-header-l">
            <span className="project-date color-darker">
              {PROJECT.year}
            </span>
            <h1 className="color-light">{PROJECT.name}</h1>
            <ul className="project-tags-sm">
              {PROJECT.tags.map(tag =>
                <li key={uuidv4()}>
                  <span className="project-tag">{tag}</span>
                </li>
              )}
            </ul>
          </div>
          <div className="project-card-sm-dropdown">
            <IconButton onClick={() => setDroppedDown(!droppedDown)}>
              {droppedDown
                ? <ArrowDropDownOutlined className="project-icon-button" style={{ fontSize: "2.5rem" }} />
                : <ArrowLeftOutlined className="project-icon-button" style={{ fontSize: "2.5rem" }} />}
            </IconButton>
          </div>
        </div>
        <div className={droppedDown ? `project-dropdown-sm shown` : "project-dropdown-sm hidden"}>
          <div className="project-card-sm-desc">
            {PROJECT.description.map(description => (
              <p key={uuidv4()} className="color-light" style={{ opacity: 0.9 }}>{description}</p>
            ))}
          </div>

          {hasLinks(PROJECT) ? (<>
            <ProjectCardLinks
              demoLink={PROJECT.demo_link}
              readmeLink={PROJECT.readme_link}
              gitLink={PROJECT.github_link}
              setShowReadmeContent={props.setShowReadmeContent}
              setReadmeContent={props.setReadmeContent}
            />
          </>) : null}
        </div>
      </div>
    </div>)

  return (<>
    <CARD_LARGE />
    <CARD_SMALL />
  </>);
};
