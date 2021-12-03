import styled from '@emotion/styled'
import CardContent from '@mui/material/CardContent'

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: -1px 3px 10px rgba(59, 22, 4, 0.76);
  background-color: #f7d0b1;
`

export const ImageThumb = styled.div`
  margin: 10px auto;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 5px solid #ea2a2abb;
  box-shadow: -1px 3px 10px rgba(59, 22, 4, 0.76);
  // background-color: #f7d0b1;

  img {
    display: block;
    height: 100%;
    border-radius: 50%;
  }
`
