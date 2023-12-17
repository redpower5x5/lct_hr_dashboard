import styled from 'styled-components';

const Button = styled.label`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  color: ${({ theme }) => theme.colors.base.light};
  padding: 16px 24px;
  border: 0;
  line-height: 24px;
  box-sizing: border-box;
  transition: 0.25s;
  font-weight: 500;
  height: 50px;
  font-size: 1rem;
  max-width: 435px;
  background: ${({ theme }) => theme.colors.additional.brand_blue};

  &:hover {
    background: ${({ theme }) => theme.colors.base.secondary};
    transform: scale(.95);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.base.grey[350]};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 100%;
  }
`;

export const Styled = {
  Button
};
