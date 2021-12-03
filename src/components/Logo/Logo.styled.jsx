import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import styled from '@emotion/styled'

export const StyledLink = styled(Link)`
  display: flex;
  // color: #fff;
  text-decoration: none;
  background: repeating-linear-gradient(
    -5deg,
    #e9ce367a 0%,
    #f3a15d 30%,
    #ea2a2abb 50%,
    #f3a15d 70%,
    #e9ce367a 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 4px -4px 0px #fff;
`

export const StyledTypography = styled(Typography)`
  display: flex;
  flex-grow: 0;
  align-self: center;
  font-size: 45px;
  font-family: Dancing Script;
  text-shadow: -4px -4px 3px rgba(59, 22, 4, 0.425);
  font-weight: 700;
`

export const StyledIcon = styled(ContactPhoneIcon)`
  display: block;
  align-self: center;
  margin-right: 18px;
  // color: #fff;
`
