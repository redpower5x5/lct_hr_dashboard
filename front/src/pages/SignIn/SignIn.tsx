import React, { type FC, type FormEvent, useCallback, useEffect } from 'react';

import 'react-medium-image-zoom/dist/styles.css';
import { Navigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button, Flex, Heading, Link, Spacer } from '@uiKit';

import { ButtonVariant } from '@uiKit/Button/types';
import { FlexAlignItems, FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { HeadingAlign } from '@uiKit/Heading/types';
import { LinkSize } from '@uiKit/Link/types';

import { useAPI, useAuthToken, useBreakpoint, useRedirect } from '@hooks/index';
import { PageLayoutWithoutHeader } from '@layouts/PageLayoutWithoutHeader';
import { signIn } from '@lib/api';
import { type SignInRequest, type SignInResponse } from '@lib/api/rest/auth/signIn/types';
import { Styled } from '@pages/SignIn/styled';
import { ROUTES } from '@router/routes/constants';

export const SignIn: FC = () => {
  const theme = useTheme();
  const isLaptop = useBreakpoint(1500);

  const { getAccessToken, addAccessToken } = useAuthToken();
  const { redirect } = useRedirect();

  if (getAccessToken()) return <Navigate to={ROUTES.home.path} />;

  const { runRequest, isError, data, isLoading } = useAPI<
  SignInRequest,
  SignInResponse
  >({
    apiService: signIn
  });

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const formDate = new FormData(e.currentTarget as HTMLFormElement);
      formDate.append('scrope', '');
      formDate.append('client_id', '');
      formDate.append('client_secret', '');
      formDate.append('grant_type', '');
      runRequest(formDate as unknown as SignInRequest);
    },
    [runRequest]
  );

  useEffect(() => {
    if (!isLoading && !isError && data?.access_token) {
      addAccessToken(data.access_token);
      redirect(ROUTES.home.path);
    }
  }, [data, isLoading, isError]);

  return (
    <PageLayoutWithoutHeader>
      <Styled.Container gap={theme.spacings.x64} justifyContent={FlexJustifyContent.SPACE_BETWEEN} direction={FlexDirection.ROW_REVERSE} fullHeight alignItems={FlexAlignItems.CENTER}>
        <Flex fullWidth={isLaptop} alignItems={isLaptop ? FlexAlignItems.CENTER : undefined} direction={FlexDirection.COLUMN}>
          <Heading fontWeight={500} align={isLaptop ? HeadingAlign.CENTER : undefined}>Добро пожаловать <br/> в <Styled.TitleHighlight>HRStat</Styled.TitleHighlight></Heading>
          <Spacer space={isLaptop ? theme.spacings.x64 : theme.spacings.x128} />
          <Styled.Form onSubmit={onSubmit}>
            <Styled.SignInInput fullWidth placeholder='Почта' name='username' type='email' />
            <Spacer space={theme.spacings.x24} />
            <Styled.SignInInput fullWidth placeholder='Пароль' name='password' type='password' />
            <Spacer space={theme.spacings.x48} />
            <Button type='submit' fullWidth variant={ButtonVariant.SECONDARY}>Войти</Button>
            <Spacer space={theme.spacings.x24} />
            <Link size={LinkSize.MD}>Забыли пароль?</Link>
          </Styled.Form>
        </Flex>
        {!isLaptop && <Styled.Line />}
      </Styled.Container>
    </PageLayoutWithoutHeader>
  );
};
