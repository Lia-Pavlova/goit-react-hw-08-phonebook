import { useSelector } from 'react-redux'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import defaultUserLogo from '../../images/avatar.png'

import { StyledCardContent, ImageThumb } from './UserCard.styled'
import { getUserName, getUserEmail } from '../../redux/auth/auth-selectors'

const BasicCard = () => {
  const name = useSelector(getUserName)
  const email = useSelector(getUserEmail)

  return (
    <Card sx={{ width: 275, height: 275 }}>
      <StyledCardContent>
        <Typography
          sx={{
            fontSize: 20,
          }}
          color="text.secondary"
          gutterBottom
        >
          User profile
        </Typography>
        <ImageThumb>
          <img src={defaultUserLogo} alt="" />
        </ImageThumb>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          name: <b>{name}</b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          email: <b>{email}</b>
        </Typography>
      </StyledCardContent>
    </Card>
  )
}

export default BasicCard
