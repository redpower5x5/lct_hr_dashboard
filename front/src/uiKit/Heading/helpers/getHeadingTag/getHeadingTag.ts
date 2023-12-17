import { HeadingType } from '../../types';

export const getHeadingTag = (type?: HeadingType): string | undefined => {
  switch (type) {
    case HeadingType.H1:
      return 'h1';
    case HeadingType.H2:
      return 'h2';
    case HeadingType.H3:
      return 'h3';
    case HeadingType.H4:
      return 'h4';
    default:
      return undefined;
  }
};
