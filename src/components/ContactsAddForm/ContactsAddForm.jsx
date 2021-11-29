import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import MuiPhoneNumber from 'material-ui-phone-number';
import s from '../ContactsEditForm/CancelBtnStyle.module.css';
import {
  Container,
  StyledTextField,
  StyledMuiPhoneNumber,
  StyledButton,
  StyledPaper,
} from './ContactsAddForm.styled';
import { getLoadingStatus } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { duplicateChekingSuccess } from '../../utils/utils';

const ContactsAddForm = ({ modalHide }) => {
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const formSubmitHandler = value => dispatch(contactsOperations.post(value));

  const handleChange = e => {
    if (!e.target) {
      const value = e;
      setNumber(value);
    } else {
      const { value } = e.target;
      setName(value);
    }
  };
  // const handleSubmit = e => {
  //   e.preventDefault();

  //   formSubmitHandler({ name, number });

  //   reset();
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    const contactToAdd = { name, number };

    // if (!contactDataValidationSuccess(contactToAdd)) {
    //   return;
    // }

    if (duplicateChekingSuccess(contactToAdd, { type: 'add' })) {
      return;
    }

    await dispatch(contactsOperations.post(contactToAdd));
    await modalHide();
  };
  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Container>
      <StyledPaper elevation={3} className="paper">
        <h2>Contact information:</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <StyledTextField
            required="true"
            label="Name"
            variant="standard"
            rules={{
              pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$/,
              required: 'Enter name',
            }}
            color="warning"
            size="small"
            value={name}
            onChange={handleChange}
            // onChange={e => setName(e.target.value)}
          />
          <StyledMuiPhoneNumber
            required
            label="Phone number"
            variant="standard"
            data-cy="user-phone"
            defaultCountry={'ua'}
            color="warning"
            size="small"
            title="Must be 3-15 digits only"
            value={number}
            onChange={handleChange}
            // onChange={e => setNumber(e.target.value)}
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
  );
};

ContactsAddForm.propTypes = {
  modalHide: PropTypes.func.isRequired,
};

export default ContactsAddForm;
