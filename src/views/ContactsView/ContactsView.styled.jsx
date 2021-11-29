import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const StyledAddButton = styled(Button)`
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    #e9ce367a 0%,
    #f7b705 50%,
    #e9ce367a 100%
  );
  background-size: 200%;
  background-position: 100%;
  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;
  transition: all 0.7s;

  &:hover {
    background: linear-gradient(
      to right,
      #e9ce367a 0%,
      #f7b705 50%,
      #e9ce367a 100%
    );
    background-size: 200%;
    background-position: 0px;
    box-shadow: none;
  }
`;

export default StyledAddButton;
