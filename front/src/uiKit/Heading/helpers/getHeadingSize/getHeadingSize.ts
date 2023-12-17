import { HeadingSize, HeadingType } from '../../types';

export const getHeadingSize = (type: HeadingType): HeadingSize => {
  switch (type) {
    case HeadingType.H1:
      return HeadingSize.LG;
    case HeadingType.H2:
      return HeadingSize.MD;
    case HeadingType.H3:
      return HeadingSize.DF;
    case HeadingType.H4:
      return HeadingSize.SM;
  }
};
