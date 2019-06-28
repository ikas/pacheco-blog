import React, { useState } from 'react'
import styled from 'styled-components'

import DatesCopy from './dates-copy'
import SkillsCopy from './skills-copy'
import TitleCopy from './title-copy'

import Heading from '../heading'
import Copy from '../copy'

const Wrapper = styled.div`
  margin-bottom: 26px;
  max-height: ${props => props.isOpen ? '450px' : '80px'};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }

  &:hover h4 {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary}
  }
  
  &:hover h4 {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary}
  }
`

const TitleWrapper = styled.div`
  flex: 1;
`

export default ({ experiences }) => {
  // Use open indexes to manage collapsible sections currently opened
  const [ openIndexes, setOpenIndexes ] = useState([])

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
          <Wrapper key={idx} isOpen={openIndexes.includes(idx)}>
            <HeadingWrapper onClick={() => setOpenIndexes(getNewIndexes(openIndexes, idx))}>
              <TitleWrapper>
                <TitleCopy active={openIndexes.includes(idx)}>
                  {exp.title}
                </TitleCopy>
                <SkillsCopy>{exp.skills}</SkillsCopy>
              </TitleWrapper>
              
              <DatesCopy active={openIndexes.includes(idx)}>
                {exp.from} - {exp.to}
              </DatesCopy>
            </HeadingWrapper>

            { exp.items.map((item, idx) => (<Copy key={idx} mb={0} mt={3}>- {item}</Copy>)) }
          </Wrapper>
      ))}
    </div>
  )
}