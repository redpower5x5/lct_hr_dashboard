import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;

  &:focus-visible {
    background: ${({ theme }) => theme.colors.focus};
  }
`;

export const StyledIconButton = {
  Button
};
