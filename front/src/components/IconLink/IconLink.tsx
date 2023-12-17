import React, { type FC } from 'react';

import { Icon } from '@uiKit';

import { IconSize } from '@uiKit/Icon/types';

import { Styled } from '@component/IconLink/styled';
import { type IconLinkProps, IconLinkSize, IconLinkVariant } from '@component/IconLink/types';

export const IconLink: FC<IconLinkProps> = ({ size = IconLinkSize.DF, variant = IconLinkVariant.PRIMARY, icon, iconSize = IconSize.X20, to }) => {
  return (
      <Styled.Link $variant={variant} $size={size} to={to}>
          <Icon size={iconSize} image={icon} />
      </Styled.Link>
  );
};
