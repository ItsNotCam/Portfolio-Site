import { useState } from "react";
import { IProject, PROJECTS } from "./ProjectList";
import ProjectCard, { IProjectCardProps } from "./ProjectCard";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { uuidv4 } from "../../utilities";


export default function Projects(): JSX.Element {
  const [highlightedIdx, setHighlightedIdx] = useState<number>(-1);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  const src = (data: string) => {
    setReadmeContent(data);
    console.log(readmeContent);
  }

  const DrawProjectCard = (props: {PROJECT: IProject, index: number}): JSX.Element => {
    let projectProps: IProjectCardProps = {
      project: props.PROJECT,
      shown: highlightedIdx === props.index || highlightedIdx === -1,
      setReadmeContent: src
    }

    let id: string = props.PROJECT.name.replaceAll(" ", "_");
    
    return (
      <div onMouseEnter={() => setHighlightedIdx(props.index)} onMouseLeave={() => setHighlightedIdx(-1)} className="project-card" id={id}>
        <ProjectCard {...projectProps} />
      </div>
    )
  }

  return (
    <div className="projects">
      <h1><span className="color-alt">What</span> I've Made</h1>
      {
        readmeContent !== null ? (
          <Markdown remarkPlugins={[remarkGfm]} className="markdown">
            {readmeContent} 
          </Markdown>
        ) : null
      }
      {
        <div className="project-cards" id="project-div-ok">
          {PROJECTS.map((PROJECT, index) => (
            <DrawProjectCard PROJECT={PROJECT} index={index} key={uuidv4()} />
          ))}
        </div>
      }
    </div>
  )
}