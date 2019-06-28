import React, { useState } from 'react'
import styled from 'styled-components'

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
`

const TitleWrapper = styled.div`
  flex: 1;
`

const SkillsCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;
`

const FromToCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;
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
          <Wrapper 
            key={idx} 
            isOpen={openIndexes.includes(idx)}
            onClick={() => setOpenIndexes(getNewIndexes(openIndexes, idx))}
          >
            <HeadingWrapper>
              <TitleWrapper>
                <Heading level={4} my={0}>{exp.title}</Heading>
                <SkillsCopy color="secondary" mb={0} mt={1}>{exp.skills}</SkillsCopy>
              </TitleWrapper>
              <FromToCopy color="primaryShade2" mb={0}>{exp.from} - {exp.to}</FromToCopy>
            </HeadingWrapper>

            { exp.items.map((item, idx) => (<Copy key={idx} mb={0} mt={3}>- {item}</Copy>)) }
          </Wrapper>
      ))}
    </div>
  )
}