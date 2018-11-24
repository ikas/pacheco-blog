import styled from 'styled-components'
import hexToRgba from 'hex-rgba'

import * as Colors from '../../style/colors'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  box-shadow: 0 0 15px 0 ${hexToRgba(Colors.PRIMARY_COLOR, 20)};
  background-color: ${hexToRgba(Colors.SECONDARY_COLOR, 50)};

  &:hover {
    box-shadow: 0 0 15px 0 ${hexToRgba(Colors.PRIMARY_COLOR, 60)};
  }
`
