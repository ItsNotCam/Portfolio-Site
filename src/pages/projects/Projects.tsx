import './_Projects.css';

import { useState } from "react";

import { uuidv4 } from "../../utilities";
import { PROJECTS } from "./_ProjectList";
import { ProjectCard } from "./ProjectCard";
import { ReadmeContent } from "./ReadmeContent";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { GITHUB } from '../static/_LINKS';


export default function Projects(): JSX.Element {
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [showReadmeContent, setShowReadmeContent] = useState<boolean>(false);

  // stop body scrolling when readme content is showing
  showReadmeContent ? disableBodyScroll(document.body) : enableBodyScroll(document.body);

  return (
    <section id="projects">
      <ReadmeContent
        content={readmeContent}
        visible={showReadmeContent}
        setShowReadmeVisible={setShowReadmeContent}
      />
      <p className="projects-title">
        <h1>
          <span className="color-alt">What</span>
          <span className="color-light"> I've Made</span>
        </h1>
        <i className="color-dark">
          (Some of it - the rest is on my <a href={GITHUB} target="_blank" className="color-darker color-alt-hover">GitHub</a>)
        </i>
      </p>
      <div className="project-list">
        {PROJECTS.map(project =>
          <ProjectCard
            PROJECT={project}
            setReadmeContent={setReadmeContent}
            setShowReadmeContent={setShowReadmeContent}
            key={uuidv4()}
          />
        )}
      </div>
    </section>
  )
}