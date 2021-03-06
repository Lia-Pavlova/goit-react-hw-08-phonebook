import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './LoginForm.styled'
import * as authOperations from '../../redux/auth/auth-operations'
import { getLoadingStatus } from '../../redux/auth/auth-selectors'

const LoginForm = () => {
  const isLoading = useSelector(getLoadingStatus)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordShow, setPasswordShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.logIn({ email, password }))
  }

  return (
    <Container>
      <StyledPaper elevation={5} className="paper">
        <h2>Login form</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledTextField
            required
            label="Email"
            autoComplete="email"
            autoFocus
            variant="standard"
            color="warning"
            size="small"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            sx={{ marginTop: '10px' }}
            variant="standard"
            color="warning"
          >
            <InputLabel htmlFor="login-password">Password</InputLabel>
            <Input
              id="login-password"
              type={passwordShow ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    color="warning"
                    onClick={() => setPasswordShow(!passwordShow)}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                  >
                    {passwordShow ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <StyledButton
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            startIcon={<VpnKeyIcon />}
            variant="contained"
          >
            Login
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  )
}

export default LoginForm
