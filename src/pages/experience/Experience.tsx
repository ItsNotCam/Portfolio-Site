import { uuidv4 } from "../../utilities";
import { EXPERIENCE, IExperience } from "./ExperienceList";
import './_Experience.css';

const ExperienceCard = (props: IExperience): JSX.Element => {
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

export default function Experience(): JSX.Element {
  return (
    <section id="experience">
      <h1 className="section-title">
        <span className="color-alt">Where</span>
        <span className="color-light"> I've Been</span>
      </h1>
      <div className="experience-list">
        {EXPERIENCE.map(
          exp => <ExperienceCard {...exp} key={uuidv4()} />
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  )
}