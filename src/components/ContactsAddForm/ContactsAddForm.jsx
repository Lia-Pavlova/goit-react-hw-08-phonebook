import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

import s from '../ContactsEditForm/CancelBtnStyle.module.css'
import {
  Container,
  StyledTextField,
  StyledMuiPhoneNumber,
  StyledButton,
  StyledPaper,
} from './ContactsAddForm.styled'
import { getLoadingStatus } from '../../redux/contacts/contacts-selectors'
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const contactToAdd = { name, number }

    // if (!contactDataValidationSuccess(contactToAdd)) {
    //   return
    // }

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
        <h2>Contact information:</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledTextField
            required="true"
            label="Name"
            name="name"
            type="text"
            variant="standard"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
            color="warning"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledMuiPhoneNumber
            required="true"
            label="Phone number"
            name="number"
            type="tel"
            variant="standard"
            data-cy="user-phone"
            defaultCountry={'ua'}
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
