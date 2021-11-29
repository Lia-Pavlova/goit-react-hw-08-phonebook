import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavigationBar from '../NavigationBar';
import { Container } from './ApplicationBar.styled';
import FilterBar from '../FilterBar';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu';
import { getAuthStatus } from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import Clock from '../../components/Clock/Clock';

const ApplicationBar = () => {
  const history = useHistory();
  const auth = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogOut = async () => {
    dispatch(authOperations.logOut());
    setAnchorEl(null);
    history.push({ pathname: '/login' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          background:
            'linear-gradient(to right,#e9ce36c2 0%,#f3a15d 30%,#ea2a2abb 50%,#f3a15d 70%,#e9ce36c2 100%)',
          border: '#e98e185e',
        }}
      >
        <Toolbar>
          <Container>
            <Logo />
            <Clock />
            {auth && <FilterBar />}
            {!auth && <NavigationBar />}
            {auth && (
              <UserMenu
                handleMenu={e => {
                  setAnchorEl(e.currentTarget);
                }}
                anchorEl={anchorEl}
                handleClose={() => {
                  setAnchorEl(null);
                }}
                handleLogout={handleLogOut}
              />
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ApplicationBar;
