import React, { type FC, type PropsWithChildren } from 'react';

import { useTheme } from 'styled-components';

import { Flex, Icon } from '@uiKit';

import { FlexAlignItems, FlexJustifyContent } from '@uiKit/Flex/types';
import { Images } from '@uiKit/Icon/constants/images';
import { IconSize } from '@uiKit/Icon/types';

import { type FileUploadButtonProps } from '@component/FileUploadButton/types';

import { Styled } from './styled';

export const FileUploadButton: FC<PropsWithChildren<FileUploadButtonProps>> = ({ onUpload, accept, name, children }) => {
  const theme = useTheme();

  return (
    <Styled.Button>
      <input accept={accept} type='file' name={name} hidden onChange={onUpload} />
      <Flex justifyContent={FlexJustifyContent.CENTER} fullWidth gap={theme.spacings.x16} alignItems={FlexAlignItems.CENTER}>
        {children}
        <Icon size={IconSize.X24} image={Images.FILE} />
      </Flex>
    </Styled.Button>
  );
};
