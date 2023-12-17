import styled, { css } from 'styled-components';

import { type LayoutProps } from './types';

const Wrapper = styled.div<{
  $backgroundImage?: LayoutProps['backgroundImage']
  $backgroundColor?: LayoutProps['backgroundColor']
}>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  ${({ $backgroundImage }) =>
    $backgroundImage &&
    css`
      background-image: ${$backgroundImage};
    `}

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const StyledLayout = {
  Wrapper,
  Container
};
