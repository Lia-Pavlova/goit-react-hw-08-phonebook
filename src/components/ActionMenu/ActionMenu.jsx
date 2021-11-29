import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Container from './ActionMenu.styled';
import * as contactsOperation from '../../redux/contacts/contacts-operations';
import ModalWindow from '../Modal';
import ContactsEditForm from '../ContactsEditForm';

const ActionMenu = ({ contact }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

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
            onClick={() => dispatch(contactsOperation.remove(contact.id))}
          >
            <DeleteIcon />
          </IconButton>
        </li>
      </ul>
      <ModalWindow modalShow={modalOpen} modalHide={() => setModalOpen(false)}>
        <ContactsEditForm
          contact={contact}
          modalHide={() => setModalOpen(false)}
        />
      </ModalWindow>
    </Container>
  );
};

ActionMenu.propTypes = {
  contact: PropTypes.object,
};

export default ActionMenu;
