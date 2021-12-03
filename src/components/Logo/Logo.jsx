import { StyledLink, StyledTypography } from './Logo.styled'
import logo from './logo.png'
import s from '../Logo/LogoIcon.module.css'

const Logo = () => {
  return (
    <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <StyledLink to="/">
        <img
          src={logo}
          alt="logo"
          style={{ height: '50px' }}
          className={s.logoIcon}
        />
        PhoneBook
      </StyledLink>
    </StyledTypography>
  )
}

export default Logo
