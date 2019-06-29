import styled from 'styled-components'

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-style: solid;
  border-color: ${props => props.theme.colors.primary};
  border-width: ${props => props.theme.space[3]}px;

  @media (max-width: 544px) {
    border-width: ${props => props.theme.space[2]}px;  
  }
`