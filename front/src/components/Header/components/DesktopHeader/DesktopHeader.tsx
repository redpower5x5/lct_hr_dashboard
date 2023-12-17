import React, { type ChangeEvent, type FC, useEffect } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { useTheme } from 'styled-components';

import { Avatar, Flex, Spacer, Text } from '@uiKit';

import { FlexAlignItems, FlexDirection } from '@uiKit/Flex/types';
import { TextSize } from '@uiKit/Text/types';

import { FileUploadButton } from '@component/FileUploadButton';
import { Logo } from '@component/Logo';
import { useAPI } from '@hooks/useAPI';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { uploadMetrics } from '@lib/api';
import { type UploadMetricsRequest, type UploadMetricsResponse } from '@lib/api/rest/admin/uploadMetrics/types';
import { ROUTES } from '@router/routes/constants';

import { userState } from '../../../../store';

import { Styled } from './styled';

export const DesktopHeader: FC = () => {
  const theme = useTheme();
  const isMobile = useBreakpoint(theme.breakpoints.mobile);
  const [user] = useRecoilState(userState);

  const { data, runRequest: uploadMetricsFile, clearData } = useAPI<UploadMetricsRequest, UploadMetricsResponse>({ apiService: uploadMetrics as any });

  const onUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    clearData();

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files?.[0] as Blob);

    if (file) {
      uploadMetricsFile({ file });
    }
  };

  useEffect(() => {
    if (data?.status) {
      toast.info('Перезагрузите страницу через несколько секунд');
    }
  }, [data?.message]);

  return (
    <Styled.Header>
      <Flex alignItems={FlexAlignItems.CENTER}>
        <RouterLink to={ROUTES.home.path}>
          <Logo />
        </RouterLink>
        <Spacer space={theme.spacings.x64} />
        {user.role === 'admin' && <FileUploadButton onUpload={onUploadFile} name='data' accept='.csv'>{isMobile ? 'Загрузить' : 'Загрузить новые данные'}</FileUploadButton>}
      </Flex>
      <Flex gap={theme.spacings.x36} alignItems={FlexAlignItems.CENTER}>
        {!isMobile && (
          <>
            <Flex direction={FlexDirection.COLUMN}>
              <Text size={TextSize.M1} fontWeight={500}>{user.username}</Text>
              <Text size={TextSize.S2} color={theme.colors.base.grey['400']}>{user.department}</Text>
            </Flex>
            <Avatar src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </>
        )}
      </Flex>
    </Styled.Header>
  );
};
