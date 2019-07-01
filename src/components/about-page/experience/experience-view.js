import React, { useState } from 'react'
import styled from 'styled-components'
import Breakpoint from 'react-socks'
import { space } from 'styled-system'
import Expand from 'react-expand-animated'

import DatesCopy from './dates-copy'
import SkillsCopy from './skills-copy'
import TitleCopy from './title-copy'

import Heading from '../../heading'
import Copy from '../../copy'

const ExperienceItemWrapper = styled.div`
  ${space}
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // margin-bottom: 8px;

  @media (max-width: 544px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const TitleWrapper = styled.div`
  flex: 1;
`

export default ({ experiences }) => {
  // Use open indexes to manage collapsible sections currently opened
  const [ openIndexes, setOpenIndexes ] = useState([])
  const [ hoveredIndex, setHoveredIndex ] = useState()

  // Method that toggles as open or closed the provided idx
  const getNewIndexes = (current, idx) => { 
    // If idx exists in current, remove it
    if (current.includes(idx)) {
      const currIdx = current.indexOf(idx)
      return [
        ...current.slice(0, currIdx), 
        ...current.slice(currIdx + 1)
      ]
    // If it does not exist, add it
    } else {
      return current.concat([idx])
    }
  }
  
  return (
    <div>
      <Heading level={2} mt={6} mb={5}>Experience</Heading>
      { experiences.map((exp, idx) => (
          <ExperienceItemWrapper key={idx} mb={5}>
            <HeadingWrapper 
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(undefined)}
              onClick={() => setOpenIndexes(getNewIndexes(openIndexes, idx))}
            >
              <TitleWrapper>
                <TitleCopy 
                  hovered={idx === hoveredIndex} 
                  active={openIndexes.includes(idx)}
                >
                  {exp.title}
                </TitleCopy>
                <Breakpoint s down>
                  <DatesCopy hovered={idx === hoveredIndex}>
                    {exp.from} - {exp.to}
                  </DatesCopy>
                </Breakpoint>
                <SkillsCopy>{exp.skills}</SkillsCopy>
              </TitleWrapper>
              
              <Breakpoint m up>
                <DatesCopy hovered={idx === hoveredIndex}>
                  {exp.from} - {exp.to}
                </DatesCopy>
              </Breakpoint>
            </HeadingWrapper>

            <Expand open={openIndexes.includes(idx)}>
              { exp.items.map((item, idx) => (
                  <Copy key={idx} mb={0} mt={3} fontSize={[ '1rem', '1.25rem' ]}>
                    - {item}
                  </Copy>
              ))}
            </Expand>
          </ExperienceItemWrapper>
      ))}
    </div>
  )
}