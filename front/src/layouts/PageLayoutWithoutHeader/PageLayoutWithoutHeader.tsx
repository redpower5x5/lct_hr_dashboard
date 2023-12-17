import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Layout } from '@layouts/Layout';

import { Styled } from './styled';
import { type PageLayoutProps } from './types';

export const PageLayoutWithoutHeader: FC<PageLayoutProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
      <Layout {...props} backgroundColor={theme.colors.base.background}>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Layout>
  );
};
