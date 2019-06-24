import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

export default styled.div`
  ${space}
  ${layout}
  ${color}
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 320px;
  max-width: 1440px;
`
