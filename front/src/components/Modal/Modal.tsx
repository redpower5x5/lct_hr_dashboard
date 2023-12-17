import React, { type FC } from 'react';

import ReactModal from 'react-modal';
import { useTheme } from 'styled-components';

import { Flex, Heading, Icon, IconButton, Spacer } from '@uiKit';

import { FlexJustifyContent } from '@uiKit/Flex/types';
import { HeadingSize } from '@uiKit/Heading/types';
import { Images } from '@uiKit/Icon/constants/images';

import { Styled } from '@component/Modal/styled';
import { type ModalProps } from '@component/Modal/types';

export const Modal: FC<ModalProps> = ({ title, onRequestClose, children, ...props }) => {
  const theme = useTheme();

  return (
    <ReactModal {...props} onRequestClose={onRequestClose} className='modal' overlayClassName='overlay'
                contentElement={(props, children) => (
                  <Styled.ModalContent {...props}>{children}</Styled.ModalContent>
                )}
                overlayElement={(props, contentElement) => (
                  <Styled.OverlayContent {...props}>{contentElement}</Styled.OverlayContent>
                )}
    >
      <Flex justifyContent={FlexJustifyContent.SPACE_BETWEEN}>
        <Heading size={HeadingSize.SM}>{title}</Heading>
        <IconButton onClick={onRequestClose as VoidFunction} label='Закрыть модальное окно'>
          <Icon image={Images.CLOSE} color={theme.colors.base.dark} />
        </IconButton>
      </Flex>
      <Spacer space={theme.spacings.x36} />
      {children}
    </ReactModal>
  );
};
