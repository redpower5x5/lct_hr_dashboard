import arrowDown from '../../../../assets/icons/arrow_down.svg';
import arrowLeft from '../../../../assets/icons/arrow_left.svg';
import arrowRight from '../../../../assets/icons/arrow_right.svg';
import close from '../../../../assets/icons/close.svg';
import danger from '../../../../assets/icons/danger.svg';
import file from '../../../../assets/icons/file.svg';
import info from '../../../../assets/icons/info.svg';
import { Images } from '../../constants/images';

export const getImage = (image: Images): string | undefined => {
  switch (image) {
    case Images.DANGER:
      return danger;
    case Images.ARROW_RIGHT:
      return arrowRight;
    case Images.ARROW_LEFT:
      return arrowLeft;
    case Images.INFO:
      return info;
    case Images.CLOSE:
      return close;
    case Images.FILE:
      return file;
    case Images.ARROW_DOWN:
      return arrowDown;
    default:
      return undefined;
  }
};
