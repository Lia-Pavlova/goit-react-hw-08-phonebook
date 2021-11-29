import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  flex-grow: 0;
  align-self: center;
  font-size: 45px;
  font-family: Dancing Script, cursive;
  text-shadow: -4px -4px 3px rgba(59, 22, 4, 0.425);
  font-weight: 700;
`;

export const StyledIcon = styled(ContactPhoneIcon)`
  display: block;
  align-self: center;
  margin-right: 18px;
  color: #fff;
`;
