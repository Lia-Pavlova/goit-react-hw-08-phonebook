import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const settings = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const warning = (text) => {
  toast.error(text, settings)
}

const success = (text) => {
  toast.success(text, settings)
}

const signUpSuccess = (name) => {
  notification.success(
    `The user has been successfully created. Welcome, ${name}!`,
  )
}

const signUpError = (errorCode) => {
  if (errorCode === 400) {
    notification.warning('An account with the specified mail already exists.!')
  }

  if (errorCode === 500) {
    notification.warning('There was a problem creating a user. Try again!')
  }
}

const logInSuccess = (name) => {
  notification.success(`Welcome, ${name}!`)
}

const logInError = (errorCode) => {
  if (errorCode === 400) {
    notification.warning('Wrong login or password')
  }
}

const logOutError = (errorCode) => {
  if (errorCode === 500) {
    notification.warning('Logout error, please try again')
  }
}

const duplicationNameSuccess = () => {
  notification.warning('Сontact with this name is already present')
}

const duplicationNumberSuccess = () => {
  notification.warning('Сontact with this number is already present')
}

const addContactSuccess = () => {
  notification.success('Сontact added successfully')
}

const addContactError = (errorCode) => {
  if (errorCode === 400) {
    notification.warning('Contact creation error')
  }
}

const fetchContactsError = (errorCode) => {
  if (errorCode === 500) {
    notification.warning('Server error. Try again')
  }
}

const deleteContactSuccess = () => {
  notification.success('Contact removed successfully')
}

const deleteContactError = (errorCode) => {
  if (errorCode === 500) {
    notification.warning('Server error. Try again')
  }
}

const updateContactSuccess = () => {
  notification.success('Сontact updated successfully')
}

const updateContactError = (errorCode) => {
  if (errorCode === 400) {
    notification.warning('Contact update error')
  }
}

const notification = {
  warning,
  success,
  signUpSuccess,
  logInSuccess,
  signUpError,
  logInError,
  logOutError,
  duplicationNameSuccess,
  duplicationNumberSuccess,
  addContactSuccess,
  addContactError,
  fetchContactsError,
  deleteContactSuccess,
  deleteContactError,
  updateContactSuccess,
  updateContactError,
}

export default notification
