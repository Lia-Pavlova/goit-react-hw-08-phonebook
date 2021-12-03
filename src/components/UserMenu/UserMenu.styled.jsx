import styled from '@emotion/styled'
import MenuItem from '@mui/material/MenuItem'

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  // color: #f00;
  background-color: #ea2a2abb;
  color: #fff;
  font-size: 20px;

  &:hover {
    background-color: #f00;
  }
`
