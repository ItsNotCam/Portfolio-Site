import { IExperience, ILink } from "./ExperienceConstants";

const TechnologyTag = (tag: string, key: any): JSX.Element => {
  return <li className="exp-tag color-alt-brighter" key={key}> {tag} </li>
}

const TechLink = (tag: ILink, key: any): JSX.Element => {
  return (
    <li className="exp-link" key={key}>
      🔗<a href={tag.link} className="color-light color-alt-hover" target="_blank">{tag.name}</a>
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
            {props.links.map(link => TechLink(link, link.name))}
          </ul>
        </div>
        ) : null}
        <div className="exp-tags">
          <ul>
            {props.tags.map((tag, i) => TechnologyTag(tag, (i+1)*10))}
          </ul>
        </div>
      </div>
    </div>
  )
}