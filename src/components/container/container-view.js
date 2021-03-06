import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

export default styled.div`
  max-width: ${props => props.maxWidth || 1440}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  ${space}
  ${layout}
  ${color}
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
`
