import styled from 'styled-components'

import * as Colors from '../../style/colors'

export const H2 = styled.h2`
  color: ${Colors.PRIMARY_COLOR};
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: uppercase;

  &::after {
    border: 2px solid ${Colors.PRIMARY_COLOR};
    content: ' ';
    display: block;
    width: 30px;
    margin: 0.25rem 0;
  }
`

export const H2White = styled.h2`
  color: ${Colors.SECONDARY_COLOR};
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: uppercase;

  &::after {
    border: 2px solid ${Colors.SECONDARY_COLOR};
    content: ' ';
    display: block;
    width: 30px;
    margin: 0.25rem 0;
  }
`

export const H3 = styled.h3`
  color: ${Colors.PRIMARY_COLOR};
`
