import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.x16}px calc(var(--layout-padding-side));
  min-height: 80px;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.base.primary};
`;

export const Styled = {
  Header
};
