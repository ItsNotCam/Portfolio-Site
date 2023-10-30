import { uuidv4 } from "../../utilities";
import { IExperience } from "./ExperienceList";

export default function ExperienceCard(props: IExperience): JSX.Element {
  return (
    <div className="experience-card">
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
  );
}