import React, { forwardRef, useMemo } from 'react';

import { Styled } from './styled';
import { ImageObjectFit, type ImageProps } from './types';

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      images,
      alt,
      fullWidth,
      fullHeight,
      radius,
      objectFit = ImageObjectFit.COVER,
      ...props
    },
    ref
  ) => {
    const preferableImage = useMemo(() => images?.find(({ isPreferable }) => isPreferable)?.image, [images]);

    return (
      <picture style={{ display: 'grid', width: fullWidth ? '100%' : 'initial', height: fullHeight ? '100%' : 'initial' }}>
        {images.map(({ image, type }, index) => <source key={index} srcSet={image} type={`image/${type as string}`} />)}
        <Styled.Image {...props} src={preferableImage ?? images[0].image} $objectFit={objectFit} $fullWidth={fullWidth} $fullHeight={fullWidth} $borderRadius={radius} alt={alt} ref={ref} />
      </picture>
    );
  }
);

Image.displayName = 'Image';
