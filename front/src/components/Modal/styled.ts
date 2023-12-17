import styled from 'styled-components';

const ModalContent = styled.div`
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.base.light};
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  outline: none;
`;

const OverlayContent = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: rgba(0, 0, 0, .15);
`;

export const Styled = {
  ModalContent,
  OverlayContent
};
