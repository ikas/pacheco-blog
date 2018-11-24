import styled from 'styled-components'

import * as Colors from '../../style/colors'

export const H2 = styled.h2`
  color: ${Colors.PRIMARY_COLOR};

  &::after {
    border: 2px solid ${Colors.PRIMARY_COLOR};
    content: ' ';
    display: block;
    width: 30px;
    margin: 0.25rem 0;
  }
`

export const H3 = styled.h3`
  color: ${Colors.PRIMARY_COLOR};
`
