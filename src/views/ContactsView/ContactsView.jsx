import { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import ContactsList from '../../components/Contacts/ContactsList'
import StyledAddButton from './ContactsView.styled'
import ContactsAddForm from '../../components/ContactsAddForm'
import ModalWindow from '../../components/Modal'
// import NoContactsView from '../../components/NoContactsView/NoContactsView'
// import { Container, Box } from '@mui/material'
// import { fetch } from '../../redux/contacts/contacts-operations'
// import { getFilteredContacts } from '../../redux/contacts/contacts-selectors'

const ContactsView = () => {
  const [modalOpen, setModalOpen] = useState(false)

  // const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false)
  // const [currentContactId, setCurrentContactId] = useState(null)
  // const contacts = useSelector(getFilteredContacts)
  // const contactsAll = useSelector((state) => state.contacts.items)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetch())
  // }, [dispatch])

  //   return (
  //     <Box component="section" sx={{ flexGrow: 1, paddingTop: '80px' }}>
  //       <Container>
  //         {/* <h1 className="visuallyHidden">Contacts</h1> */}
  //         {contactsAll?.length > 0 && contacts?.length > 0 ? (
  //           <ContactsList
  //             contacts={contacts}
  //             openAddContactModal={setIsOpenAddContactModal}
  //             setCurrentContactId={setCurrentContactId}
  //           />
  //         ) : (
  //           <NoContactsView
  //             message={
  //               contactsAll?.length === 0 && contacts?.length === 0
  //                 ? 'You have no contacts yet ...'
  //                 : 'No results were found for this request'
  //             }
  //           />
  //         )}

  //         <StyledAddButton variant="contained" onClick={() => setModalOpen(true)}>
  //           <AddIcon />
  //         </StyledAddButton>
  //         <ModalWindow
  //           modalShow={modalOpen}
  //           modalHide={() => setModalOpen(false)}
  //         >
  //           <ContactsAddForm modalHide={() => setModalOpen(false)} />
  //         </ModalWindow>
  //       </Container>
  //     </Box>
  //   )
  // }

  return (
    <>
      <ContactsList />
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
