import styled from 'styled-components';

import { type FlexProps } from './types';

const Container = styled.div<{
  $fullWidth?: FlexProps['fullWidth']
  $fullHeight?: FlexProps['fullHeight']
  $alignItems?: FlexProps['alignItems']
  $alignContent?: FlexProps['alignContent']
  $justifyItems?: FlexProps['justifyItems']
  $justifyContent?: FlexProps['justifyContent']
  $direction?: FlexProps['direction']
  $flex?: FlexProps['flex']
  $flexWrap?: FlexProps['flexWrap']
  $gap?: FlexProps['gap']
}>`
  display: flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : 'auto')};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-direction: ${({ $direction }) => $direction};
  flex: ${({ $flex }) => $flex && $flex};
  flex-wrap: ${({ $flexWrap }) => $flexWrap && $flexWrap};
  gap: ${({ $gap }) => $gap && $gap + 'px'}};
`;

export const StyledFlex = {
  Container
};
