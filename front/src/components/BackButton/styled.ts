import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding-block: 0;
  padding-inline: 0;
  border-width: 0;
  outline: none;
  background: none;
  
  &:focus-visible {
    background: ${({ theme }) => theme.colors.focus};
  }
`;

export const Styled = {
  Button
};
