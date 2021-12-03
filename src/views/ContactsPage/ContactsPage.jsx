import { useState } from 'react'

import ContactsList from '../../components/Contacts/ContactsList'

import AddIcon from '@mui/icons-material/Add'
import StyledAddButton from './ContactsPageStyled'

import ModalWindow from '../../components/Modal'
import ContactsAddForm from '../../components/ContactsAddForm'
import { CSSTransition } from 'react-transition-group'
import ContactListTransition from '../../transitionStyles/ContactListTransition.module.css'

const ContactsView = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <CSSTransition
        in={true}
        appear
        timeout={500}
        classNames={ContactListTransition}
        unmountOnExit
      >
        <ContactsList />
      </CSSTransition>
      <StyledAddButton variant="contained" onClick={() => setModalOpen(true)}>
        <AddIcon />
      </StyledAddButton>
      <ModalWindow modalShow={modalOpen} modalHide={() => setModalOpen(false)}>
        <ContactsAddForm modalHide={() => setModalOpen(false)} />
      </ModalWindow>
    </>
  )
}

export default ContactsView
