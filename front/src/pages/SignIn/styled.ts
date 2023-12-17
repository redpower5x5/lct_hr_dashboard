import styled from 'styled-components';

import { Flex, Input } from '@uiKit';

import { Line as _Line } from '@pages/SignIn/components';

const Container = styled(Flex)`
  overflow: hidden;
`;

const TitleHighlight = styled.strong`
  color: ${({ theme }) => theme.colors.additional.brand_blue};
`;

const SignInInput = styled(Input)`
  background: ${({ theme }) => theme.colors.base.light};
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
`;

const Line = styled(_Line)`
  height: 100vh;
`;

export const Styled = {
  TitleHighlight,
  Form,
  SignInInput,
  Container,
  Line
};
