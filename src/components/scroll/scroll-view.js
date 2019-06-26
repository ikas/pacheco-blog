import React from 'react'
import styled from 'styled-components'

import Copy from '../copy'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ScrollText = styled(Copy)`
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 8px;
`

const Ellipsis = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${props => props.theme.colors.primary};
  margin-bottom: 19px;
`

export default () => (
  <Wrapper>
    <ScrollText>Scroll</ScrollText>
    <Ellipsis />
  </Wrapper>
)
