import { useState } from "react";
import { ProjectsConstants } from "./ProjectsConstants";
import ProjectCard from "./ProjectCard";



export default function Projects(): JSX.Element {
  const [highlightedIdx, setHighlightedIdx] = useState<number>(-1);

  return (
    <div className="projects">
      <h1><span className="color-alt">What</span> I've Made</h1>
      <div className="project-cards">
        {ProjectsConstants.map( (experience, index) => 
          <div onMouseEnter={() => setHighlightedIdx(index)} onMouseLeave={() => setHighlightedIdx(-1)} className="project-card">
            {ProjectCard(experience,  highlightedIdx === index || highlightedIdx === -1)}
          </div>
        )}
      </div>
    </div>
  )
}