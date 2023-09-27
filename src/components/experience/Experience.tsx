import { useState } from 'react'
import { ExperienceCard } from './ExperienceCard'
import { ExperienceConst } from './ExperienceConstants'

export const Experience = () => {
  const [highlightedIdx, setHighlightedIdx] = useState<number>(-1);
  return (
    <div className="experience">
      <h1>Work <span className="color-alt">Experience</span></h1>
      <div className="exp-cards">
        {ExperienceConst.map( (experience, index) => 
          <div onMouseEnter={() => setHighlightedIdx(index)} onMouseLeave={() => setHighlightedIdx(-1)}>
            {ExperienceCard(experience,  highlightedIdx === index || highlightedIdx === -1)}
          </div>
        )}
      </div>
    </div>
  )
}