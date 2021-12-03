import { useEffect, lazy, Suspense } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import * as authOperations from './redux/auth/auth-operations'
import ApplicationBar from './components/ApplicationBar'
import Container from './App.styled'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { getLoadingStatus } from './redux/auth/auth-selectors'

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */),
)
const AsyncLoginView = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
)
const AsyncRegisterView = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
)
const AsyncContactsView = lazy(() =>
  import(
    './views/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
)
const ContactsPage = lazy(() =>
  import(
    './views/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
)
const AsyncPageErrorView = lazy(() =>
  import('./views/PageErrorView' /* webpackChunkName: "404-page" */),
)

const App = () => {
  const isUserDataLoading = useSelector(getLoadingStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.refresh())
  }, [dispatch])

  return (
    <>
      <ApplicationBar />

      <ToastContainer
        autoClose={2500}
        position="top-center"
        backgroundColor="red"
      />

      <Container>
        <Suspense
          fallback={
            <Box sx={{ width: '100%' }}>
              <LinearProgress sx={{ background: '#eacb04' }} />
            </Box>
          }
        >
          <Switch>
            <PublicRoute path="/" redirectTo="/contacts" restricted exact>
              <HomePage />
            </PublicRoute>
            <PrivateRoute path="/contacts" exact>
              <ContactsPage />
            </PrivateRoute>

            <PublicRoute path="/" exact restricted>
              <Redirect to="/login" />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <AsyncLoginView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <AsyncRegisterView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              {!isUserDataLoading && <AsyncContactsView />}
            </PrivateRoute>
            <PublicRoute>
              <AsyncPageErrorView />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  )
}

export default App
