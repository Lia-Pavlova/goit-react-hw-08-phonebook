import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

export const StyledListItem = styled(ListItem)`
  &:nth-of-type(2n + 1) {
    background-color: rgba(241, 241, 241, 0.5);
  }

  &:nth-of-type(2n) {
    background-color: rgba(83, 67, 65, 0.1);
  }

  .name {
    width: 43%;
    flex-grow: 0;
    color: #6e5b32;
    font-weight: 600;
    font-size: 20px;
    font-family: Dancing Script;
  }

  .number {
    color: #524240;
    // text-shadow: -1px -1px 10px rgba(59, 22, 4, 0.76);
    font-weight: 600;
    font-family: Dancing Script;

    flex-grow: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(218, 209, 197);

  &:nth-of-type(1) {
    justify-self: start;
  }

  &:nth-of-type(2) {
    justify-self: center;
  }
`;

// export const NumberContainer = styled.div`
//   align-items:center;
// `
