import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ProjectCard, { IProjectCardProps } from "./ProjectCard";
import { IProject, PROJECTS } from "./ProjectList";
import { uuidv4 } from "../../utilities";

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


export default function Projects(): JSX.Element {
  const [highlightedIdx, setHighlightedIdx] = useState<number>(-1);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [canCloseReadme, setCanCloseReadme] = useState<boolean>(false);

  const DrawProjectCard = (props: {PROJECT: IProject, index: number}): JSX.Element => {
    let projectProps: IProjectCardProps = {
      project: props.PROJECT,
      shown: highlightedIdx === props.index || highlightedIdx === -1,
      setReadmeContent: setReadmeContent
    }

    let id: string = props.PROJECT.name.replaceAll(" ", "_");
    let mouseEvents: any = {
      onMouseEnter: () => setHighlightedIdx(props.index),
      onMouseLeave: () => setHighlightedIdx(-1)
    }

    return (
      <div className="project-card" {...mouseEvents} id={id}>
        <ProjectCard {...projectProps} />
      </div>
    )
  }

  // can only close the readme if the user has clicked on the x button or the outer div
  const tryCloseReadme = () => {
    if(canCloseReadme) {
      setReadmeContent(null);
    }
  }

  let mouseContext: any = {
    onMouseEnter: () => setCanCloseReadme(false),
    onMouseLeave: () => setCanCloseReadme(true)
  }

  return (
    <div className="projects">
      <h1><span className="color-alt">What</span> I've Made</h1>
      {
        readmeContent !== null ? (
          <div className="overlay-dark" onClick={tryCloseReadme}>
            <ClearOutlinedIcon 
              className="md-icon-button color-light" 
              style={{fontSize: "3rem"}} 
              onClick={() => setReadmeContent(null)}/>
            <div className="markdown" {...mouseContext}>
              <Markdown remarkPlugins={[remarkGfm]} className="slide-in">
                {readmeContent}
              </Markdown>
              <br/>
              <i className="color-light" style={{opacity: 0.5}}>(Pulled directly from this repo's README)</i>
            </div>
          </div>
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