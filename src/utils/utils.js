import notification from './notification'
import { store } from '../redux/store'

const NAME_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
const PASSWORD_PATTERN =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{7,16})'
// const PHONE_NUMBER_PATTERN = '^[0-9]{3,15}$';

export const registrationDataValidationSuccess = (userData) => {
  const { name, email, password, verificationPassword } = userData
  const nameRegex = new RegExp(NAME_PATTERN)
  const emailRegex = new RegExp(EMAIL_PATTERN)
  const passwordRegex = new RegExp(PASSWORD_PATTERN)

  if (!nameRegex.test(name)) {
    notification.warning('Name does not meet the requirements!')
    return false
  }

  if (!emailRegex.test(email)) {
    notification.warning('Incorrect Email format entered!')
    return false
  }

  if (!passwordRegex.test(password)) {
    notification.warning('Password value does not meet requirements!')
    return false
  }

  if (password !== verificationPassword) {
    notification.warning('Password values do not match!')
    return false
  }
  return true
}

// export const contactDataValidationSuccess = contactData => {
//   const { number } = contactData;
//   // const numberRegex = new RegExp(PHONE_NUMBER_PATTERN);

//   if (!numberRegex.test(number)) {
//     notification.warning('Incorrect number format entered!');
//     return false;
//   }
//   return true;
// };

export const contactDataValidationSuccess = (contactData) => {
  const { name } = contactData
  const nameRegex = new RegExp(NAME_PATTERN)

  if (!nameRegex.test(name)) {
    notification.warning('Incorrect name format entered!')
    return false
  }
  return true
}

export const duplicateNumberChekingSuccess = (contact, action = {}) => {
  const { contacts } = store.getState()
  let isDuplicateNumber = false

  switch (action.type) {
    case 'add':
      isDuplicateNumber = Boolean(
        contacts.items.find(({ number }) => number === contact.number),
      )
      if (isDuplicateNumber) notification.duplicationNumberSuccess()
      return isDuplicateNumber
    case 'edit':
      isDuplicateNumber = Boolean(
        contacts.items
          .filter(({ id }) => id !== contact.id)
          .find(({ number }) => number === contact.number),
      )
      if (isDuplicateNumber) notification.duplicationNumberSuccess()
      return isDuplicateNumber
    default:
      notification.warning('something went wrong')
  }
}

export const duplicateNameChekingSuccess = (contact, action = {}) => {
  const { contacts } = store.getState()
  let isDuplicateName = false

  switch (action.type) {
    case 'add':
      isDuplicateName = String(
        contacts.items.find(({ name }) => name === contact.name),
      )
      if (isDuplicateName) notification.duplicationNameSuccess()
      return isDuplicateName
    case 'edit':
      isDuplicateName = String(
        contacts.items
          .filter(({ id }) => id !== contact.id)
          .find(({ name }) => name === contact.name),
      )
      if (isDuplicateName) notification.duplicationNameSuccess()
      return isDuplicateName
    default:
      notification.warning('something went wrong')
  }
}
