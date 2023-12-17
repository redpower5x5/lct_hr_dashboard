import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Header } from '@component/Header/Header';
import { Layout } from '@layouts/Layout';

import { Styled } from './styled';
import { type PageLayoutProps } from './types';

export const PageLayout: FC<PageLayoutProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
      <Layout {...props} header={<Header />} backgroundColor={theme.colors.base.background}>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Layout>
  );
};
