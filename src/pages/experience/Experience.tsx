import './_Experience.css';

import { uuidv4 } from "../../utilities";
import { EXPERIENCE } from "./_ExperienceList";
import ExperienceCard from "./ExperienceCard";

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
    </section>
  )
}