import styled from 'styled-components';

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 5px;
`;

export const ButtonOption = styled('button')`
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: 1px solid grey;
  background-color: white;
  &:active {
    background-color: rgb(61, 61, 242);
  }
`;
