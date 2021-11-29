import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContend: 'center',
  alignItems: 'center',
  width: 340,
  height: 370,
  // bgcolor: 'background.paper',
  background:
    'linear-gradient(to right,#e9ce367a 0%,#f3a15d 30%,#ea2a2abb 50%,#f3a15d 70%,#e9ce367a 100%)',
  border: '1px solid #000',
  borderRadius: '25px',
  boxShadow: 10,
  p: 3,
};

const ModalWindow = ({ modalShow, modalHide, children }) => {
  return (
    <Modal
      open={modalShow}
      onClose={modalHide}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  modalHide: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalWindow;
