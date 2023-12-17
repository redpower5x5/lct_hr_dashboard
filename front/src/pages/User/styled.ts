import styled from 'styled-components';

import { Text } from '@uiKit';

const StatisticsList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacings.x24}px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

const PercentBlock = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacings.x16}px ${theme.spacings.x24}px`};
  border: 1px solid ${({ theme }) => theme.colors.additional.brand_blue};
  border-radius: 48px;
`;

const PercentBlockText = styled(Text)`
  white-space: nowrap;
`;

export const Styled = {
  StatisticsList,
  PercentBlock,
  PercentBlockText
};
