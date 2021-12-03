import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as contactsOperations from '../../../redux/contacts/contacts-operations'
import ContactItem from '../ContactsItem'
import {
  getContacts,
  getFilteredContacts,
  getLoadingStatus,
} from '../../../redux/contacts/contacts-selectors'
import StyledList from './ContactsList.styled'
import { resetContacts } from '../../../redux/contacts/contacts-slice'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// import { CSSTransition } from 'react-transition-group'

import noContactsGif from '../../../images/travolta.gif'
// import noContacts from '../../../images/ups.png'
import s from './NoContacts.module.css'

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts)
  const allContacts = useSelector(getContacts)
  const isLoading = useSelector(getLoadingStatus)
  const dispatch = useDispatch()

  let items = allContacts

  if (filteredContacts && filteredContacts.length > 0) {
    items = filteredContacts
  }
  if (filteredContacts && filteredContacts.length === 0) {
    items = null
  }

  useEffect(() => {
    dispatch(contactsOperations.fetch())
    return () => dispatch(resetContacts())
  }, [dispatch])

  return (
    <>
      {items === null && (
        <img
          src={noContactsGif}
          alt="no contacts yet"
          style={{ maxWidth: '300px' }}
          className={s.noContactsImg}
        />
      )}
      {/* {items === null && <p className={s.message}>Contact list is empty...</p>} */}
      {/* {items === null && (
        <p className={s.info}>Click for start fulling your PhoneBook</p>
      )} */}

      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress sx={{ color: 'orange' }} />
        </Box>
      ) : (
        <StyledList>
          {filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </StyledList>
      )}
    </>
  )
}

export default ContactList
