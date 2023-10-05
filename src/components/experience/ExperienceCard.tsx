import { uuidv4 } from "../../utilities";
import { IExperience, ILink } from "./ExperienceList";

const TechnologyTag = (props: {tag: string}): JSX.Element => {
  return <li className="exp-tag color-alt-brighter"> {props.tag} </li>
}

const TechLink = (props: {tag: ILink}): JSX.Element => {
  const {link, name} = props.tag;
  return (
    <li className="exp-link">
      🔗<a href={link} className="color-light color-alt-hover" target="_blank">{name}</a>
    </li>
  )
}

export default function ExperienceCard(props: IExperience, shown: boolean): JSX.Element {
  const date: string = `${props.start_month} ${props.start_year} - ${props.end_month} ${props.end_year}`;
  return (
    <div className={`exp-card ${!shown ? "exp-hidden" : ""}`}>
      <div className="exp-info">
        <div className="exp-date">
          {date}
        </div>
        <h2 className="exp-title">
          <span className="color-alt"> {props.title} </span> <span className="exp-title-separator">//</span> {props.company}
        </h2>
        <div className="exp-description-container">
          <p className="exp-p-tag">{"<p>"}</p>
          <div className="exp-description">
            <div className="exp-vertical-line" />
            <p>{props.job_description}</p>
          </div>
          <p className="exp-p-tag">{"</p>"}</p>
        </div>
        {props.links.length > 0 ? (
        <div className="exp-links">
          <ul>
            {props.links.map(link => <TechLink tag={link} key={uuidv4()}/>)}
          </ul>
        </div>
        ) : null}
        <div className="exp-tags">
          <ul>
            {props.tags.map(tag => <TechnologyTag tag={tag} key={uuidv4()} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}