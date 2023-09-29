import { useState } from "react";
import { ProjectsConstants, IProjects } from "./ProjectsConstants";
import { ProjectCard } from "./ProjectCard";



export function Projects() {
  const [highlightedIdx, setHighlightedIdx] = useState<number>(-1);


  const getClassNames = (index: number): string => {
    return `project-info-card ${!(highlightedIdx === index || highlightedIdx === -1) ? "info-hidden" : ""}`
  }

  return (
    <div className="experience">
      <h1><span className="color-alt">What</span> I've Made</h1>
      <div className="project-info-cards">
        {ProjectsConstants.map( (project, index) => 
          <div className={getClassNames(index)}
            onMouseEnter={() => setHighlightedIdx(index)} onMouseLeave={() => setHighlightedIdx(-1)} 
            id={project.name.replace(" ", "_")}>
            {ProjectCard(project,  highlightedIdx === index || highlightedIdx === -1)}
          </div>
        )}
      </div>
    </div>
  )
}