import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import PhoneIcon from '@mui/icons-material/Phone'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Container from './ActionMenu.styled'
import * as contactsOperation from '../../redux/contacts/contacts-operations'
import ModalWindow from '../Modal'
import ContactsEditForm from '../ContactsEditForm/ContactsEditForm'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import s from './ConfirmDeleteForm.module.css'

const ActionMenu = ({ contact }) => {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      <ul>
        <li>
          <a href={`tel:${contact.number}`}>
            <IconButton edge="end" aria-label="call">
              <PhoneIcon />
            </IconButton>
          </a>
        </li>
        <li>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => setModalOpen(true)}
          >
            <EditIcon />
          </IconButton>
        </li>
        <li>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleClickOpen}
            variant="primary"
          >
            <DeleteIcon />
          </IconButton>
          <div className={s.confirm}>
            <Dialog
              PaperProps={{
                style: {
                  backgroundColor: '#f7d0b1',
                  borderRadius: '20px',
                  boxShadow: '-1px 3px 10px rgba(59, 22, 4, 0.76)',
                },
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                <span
                  style={{
                    margin: '20px 0 0',
                    padding: '0px',
                    color: 'rgb(83, 67, 65)',
                    fontFamily: 'Dancing, cursive',
                    fontSize: '27px',
                    fontWeight: '500',
                    textShadow: '1px 1px 2px rgba(59, 22, 4, 0.76)',
                    textAlign: 'center',
                  }}
                >
                  Deleting contact...
                </span>
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  style={{
                    fontFamily: 'Dancing',
                    color: '#ea2a2abb',
                    fontWeight: '600',
                    fontSize: '20px',
                    textAlign: 'center',
                    margin: '0px',
                    padding: '20px 0 0',
                  }}
                >
                  Are you sure?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  className={s.cancelBtn}
                  onClick={handleClose}
                >
                  No, Cancel
                </Button>
                <Button
                  variant="contained"
                  className={s.deleteBtn}
                  onClick={() => dispatch(contactsOperation.remove(contact.id))}
                  // autoFocus
                >
                  Yes, Delete
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </li>
      </ul>

      <ModalWindow modalShow={modalOpen} modalHide={() => setModalOpen(false)}>
        <ContactsEditForm
          contact={contact}
          modalHide={() => setModalOpen(false)}
        />
      </ModalWindow>
    </Container>
  )
}

ActionMenu.propTypes = {
  contact: PropTypes.object,
}

export default ActionMenu
