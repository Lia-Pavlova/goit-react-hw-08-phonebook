import styled from '@emotion/styled';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

export const Container = styled.div`
  box-sizing: border-box;
  margin: 60px auto;
  width: 340px;
`;

export const StyledPaper = styled(Paper)`
  padding: 10px;
  border-radius: 20px;

  h2 {
    margin: 20px 0 0;
    text-align: center;
    color: rgb(83, 67, 65);
    text-shadow: 1px 1px 3px rgba(59, 22, 4, 0.76);
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    padding: 30px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`;

export const StyledButton = styled(LoadingButton)`
  margin: 30px auto 0;
  width: 140px;
  border-radius: 3em;
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
