import { useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { EXPERIENCE } from './ExperienceList'
import { uuidv4 } from '../../utilities';

export default function Experience(): JSX.Element {
  const [highlightedIdx, setHighlightedIdx] = useState<number>(-1); 
  return (
    <section id="experience">
      <div className="experience">
        <h1><span className="color-alt">Where</span> I've Been</h1>
        <div className="exp-cards">
          {EXPERIENCE.map( (experience, index) => 
            <div onMouseEnter={() => setHighlightedIdx(index)} onMouseLeave={() => setHighlightedIdx(-1)} key={uuidv4()}>
              <ExperienceCard experience={experience} shown={highlightedIdx === index || highlightedIdx === -1} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}