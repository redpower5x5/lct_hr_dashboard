import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Avatar, Flex, Text } from '@uiKit';

import { AvatarSizes } from '@uiKit/Avatar/types';
import { FlexAlignItems, FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { TextSize } from '@uiKit/Text/types';

import { Card } from '@component/Card';
import { type UserCardProps } from '@component/UserCard/types';

export const UserCard: FC<UserCardProps> = ({ name, avatar, probability, position }) => {
  const theme = useTheme();

  return (
    <Card>
      <Flex alignItems={FlexAlignItems.CENTER} justifyContent={FlexJustifyContent.SPACE_BETWEEN}>
        <Flex alignItems={FlexAlignItems.CENTER} gap={theme.spacings.x20}>
          {avatar && <Avatar size={AvatarSizes.LARGE} src={avatar} />}
          <Flex gap={theme.spacings.x8} direction={FlexDirection.COLUMN}>
            {name && <Text fontWeight={600} size={TextSize.M1}>{name}</Text>}
            {position && <Text size={TextSize.S3}>{position}</Text>}
          </Flex>
        </Flex>
        {probability != null && <Text size={TextSize.ML} color={theme.colors.additional.brand_blue}>{probability}%</Text>}
      </Flex>
    </Card>
  );
};
