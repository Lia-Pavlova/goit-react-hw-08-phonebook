import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import 'react-phone-number-input/style.css'
import s from '../ContactsEditForm/CancelBtnStyle.module.css'
import {
  Container,
  StyledTextField,
  StyledMuiPhoneNumber,
  StyledButton,
  StyledPaper,
} from './ContactsAddForm.styled'
import {
  getLoadingStatus,
  getContacts,
} from '../../redux/contacts/contacts-selectors'
import * as contactsOperations from '../../redux/contacts/contacts-operations'
import {
  contactDataValidationSuccess,
  duplicateNameChekingSuccess,
  duplicateNumberChekingSuccess,
} from '../../utils/utils'

const ContactsAddForm = ({ modalHide }) => {
  const isLoading = useSelector(getLoadingStatus)
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const [number, setNumber] = useState('')
  const items = useSelector(getContacts)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      items.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return toast.error(`${name} already exist`)
    }

    const contactToAdd = { number, name }

    if (!contactDataValidationSuccess(contactToAdd)) {
      return
    }

    if (duplicateNameChekingSuccess(contactToAdd, { type: 'add' })) {
      return
    }

    if (duplicateNumberChekingSuccess(contactToAdd, { type: 'add' })) {
      return
    }

    await dispatch(contactsOperations.post(contactToAdd))
    await modalHide()
  }

  return (
    <Container>
      <StyledPaper elevation={3} className="paper">
        <h2>Add the information:</h2>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            required="The name must consist only in letters"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
            label="Name"
            name="name"
            type="text"
            variant="standard"
            title="Can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
            color="warning"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <StyledMuiPhoneNumber
            required="true"
            autoComplete="off"
            label="Phone number"
            name="number"
            type="tel"
            variant="standard"
            data-cy="user-phone"
            defaultCountry={'ua'}
            preferredCountries={['ua', 'ru']}
            enableSearch={true}
            color="warning"
            size="small"
            // title="Must be 3-15 digits only"
            value={number}
            onChange={(e) => setNumber(e)}
          />

          <StyledButton
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            startIcon={<AddCircleIcon />}
            variant="contained"
          >
            Add
          </StyledButton>
          <StyledButton
            className={s.cancelBtn}
            type="submit"
            onClick={modalHide}
            loadingPosition="center"
            startIcon={<RemoveCircleOutlineIcon />}
            variant="contained"
          >
            Cancel
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  )
}

ContactsAddForm.propTypes = {
  modalHide: PropTypes.func.isRequired,
}

export default ContactsAddForm
