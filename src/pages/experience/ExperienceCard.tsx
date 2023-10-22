import { uuidv4 } from "../../utilities";
import { IExperience, ILink } from "./ExperienceList";

export interface IExperienceCardProps {
  experience: IExperience;
  shown: boolean;
}

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

export default function ExperienceCard(props: IExperienceCardProps): JSX.Element {
  const {experience: EXPERIENCE } = props;

  const date: string = `${EXPERIENCE.start_month} ${EXPERIENCE.start_year} - ${EXPERIENCE.end_month} ${EXPERIENCE.end_year}`;
  // <div className={`exp-card ${!shown ? "exp-hidden" : ""}`}>
  return (
    <div className={`exp-card`}>
      <div className="exp-info">
        <div className="exp-date">
          {date}
        </div>
        <h2 className="exp-title">
          <span className="color-alt"> {EXPERIENCE.title} </span> <span className="exp-title-separator">//</span> {EXPERIENCE.company}
        </h2>
        <div className="exp-description-container">
          <p className="exp-p-tag">{"<p>"}</p>
          <div className="exp-description">
            <div className="exp-vertical-line" />
            <p>{EXPERIENCE.job_description}</p>
          </div>
          <p className="exp-p-tag">{"</p>"}</p>
        </div>
        {EXPERIENCE.links.length > 0 ? (
            <div className="exp-links">
              <ul>
                {EXPERIENCE.links.map(link => <TechLink tag={link} key={uuidv4()}/>)}
              </ul>
            </div>
          ) : null
        }
        <div className="exp-tags">
          <ul>
            {EXPERIENCE.tags.map(tag => <TechnologyTag tag={tag} key={uuidv4()} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}