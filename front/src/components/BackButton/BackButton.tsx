import React, { type FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Icon, Text } from '@uiKit';

import { Images } from '@uiKit/Icon/constants/images';
import { IconSize } from '@uiKit/Icon/types';
import { TextSize } from '@uiKit/Text/types';

import { Styled } from '@component/BackButton/styled';

export const BackButton: FC = () => {
  const theme = useTheme();
  const navigation = useNavigate();

  return (
    <Styled.Button onClick={() => { navigation(-1); }}>
      <Icon color={theme.colors.additional.brand_blue} image={Images.ARROW_LEFT} size={IconSize.X32} />
      <Text color={theme.colors.additional.brand_blue} size={TextSize.M1}>Назад</Text>
    </Styled.Button>
  );
};
