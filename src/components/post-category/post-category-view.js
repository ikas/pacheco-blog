import styled from 'styled-components'

import Copy from '../copy'

export default styled(Copy)`
  display: inline-flex;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 4px 8px;
  margin: 0;
  margin-top: 8px;
  line-height: 16px;
  font-size: 14px;
  border-radius: 5px;
`
