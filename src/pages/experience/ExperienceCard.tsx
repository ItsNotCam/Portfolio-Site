import { useState } from "react";
import { uuidv4 } from "../../utilities";
import { IExperience } from "./ExperienceList";

import { ArrowLeftOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material';

export default function ExperienceCard(props: IExperience): JSX.Element {
  const [droppedDown, setDroppedDown] = useState<boolean>(false);

  const LARGE = (): JSX.Element => {
    return (
      <div className="experience-card-lg">
        <p className="experience-date color-darker">
          {props.start_month} {props.start_year} - {props.end_month} {props.end_year}
        </p>
        <h1>
          <span className="color-alt">{props.title}</span> 
          <span className="color-dark"> //</span>
          <span className="color-light"> {props.company}</span>
        </h1>
        <div className="experience-description">
          {props.job_description.map(
            description => <p className="color-light" style={{opacity: "85%"}} key={uuidv4()}>{description}</p>
          )}
        </div>
        <ul className="experience-tags">
          {props.tags.map(tag => 
            <li className="experience-tag" key={uuidv4()}>
              {tag}
            </li>
          )}
        </ul>
      </div>
    )
  }

  const SMALL = (): JSX.Element => {
    return (
      <div className="experience-card-sm">
        <div className="experience-card-sm-header">
          <div className="info">
            <p className="experience-date color-darker">
              {props.start_month} {props.start_year} - {props.end_month} {props.end_year}
            </p>
            <h1>
              <span className="color-alt">{props.title}</span> 
              <span className="color-dark"> //</span>
              <span className="color-light"> {props.company}</span>
            </h1>
            <ul className="experience-tags">
              {props.tags.map(tag => 
                <li className="experience-tag" key={uuidv4()}>
                  {tag}
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
        {droppedDown ?( 
            <div className="experience-description">
              {props.job_description.map(
                description => <p className="color-light" style={{opacity: "85%"}} key={uuidv4()}>{description}</p>
              )}
            </div>
          ): null}
      </div>
    )
  }


  return (<>
    <LARGE />
    <SMALL />
  </>);
}