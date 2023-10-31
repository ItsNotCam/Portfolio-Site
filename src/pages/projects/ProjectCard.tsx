import { useState } from "react";
import { CodeOutlined, ArrowLeftOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material';

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

const hasLinks = (PROJECT: IProject): boolean => {
  return PROJECT.github_link !== undefined || PROJECT.demo_link !== undefined || PROJECT.readme_link !== undefined;
}


export const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const [highlighted, setHighlighted] = useState<boolean>(false);
  const [droppedDown, setDroppedDown] = useState<boolean>(false);

  const { PROJECT } = props;
  const mouseEvents: any = {
    onMouseEnter: () => setHighlighted(true),
    onMouseLeave: () => setHighlighted(false)
  };

  const CARD_LARGE = (): JSX.Element => (<>
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
          <span className="project-tag">{tag}</span>
        </li>
      )}
    </ul>
    {PROJECT.description.map(
      description => <p key={uuidv4()}>{description}</p>
    )}
  </>)

  const CARD_SMALL = (): JSX.Element => (<>
    <div className="project-card-sm-info">
      <div className="project-card-sm-header">
        <div className="project-card-header-l">
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
              ? <ArrowDropDownOutlined className="project-icon-button" style={{fontSize: "3rem"}} />
              : <ArrowLeftOutlined className="project-icon-button" style={{fontSize: "3rem"}}/>}
          </IconButton>
        </div>
      </div>

      <div className={droppedDown ? `project-dropdown-sm shown` : "project-dropdown-sm hidden"}>
        <div className="project-card-sm-desc">
          {PROJECT.description.map(description => (
            <p key={uuidv4()} className="color-light" style={{opacity: 0.9}}>{description}</p>
          ))}
        </div>

        {hasLinks(PROJECT) ? (<>
          <h2 className="color-alt">Links</h2>
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
  </>)

  return (<>
    <div className="project-card-lg" {...mouseEvents}>
      <CARD_LARGE />
    </div>
    <div className="project-card-sm" {...mouseEvents}> {/*onClick={() => setDroppedDown(!droppedDown)}>*/}
      <CARD_SMALL />
    </div>
  </>);
};
