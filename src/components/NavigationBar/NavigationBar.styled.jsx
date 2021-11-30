import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  // font-size: 25px;
  font-weight: 600;
  font-family: Dancing;
  text-shadow: -2px -1px 2px rgba(59, 22, 4, 0.425);

  color: #fff;
  text-decoration: none;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    width: 100%;
    transform: translate(-50%, 19px) scaleX(0);
    border: 1.5px solid #fff;
  }
  &.selected::after {
    transform: translate(-50%, 19px) scaleX(1);
  }
`

export const Container = styled.div`
  box-sizing: content-box;
  align-self: center;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
  }

  li:not(:last-of-type) {
    margin-right: 20px;
  }
`
