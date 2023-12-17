import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';

import { type SelectProps, SelectSize } from './types';

const getSelectSizeCSS = {
  [SelectSize.SM]: css`
    padding: 2px 26px;
    min-height: 46px;
  `,
  [SelectSize.DF]: css`
    padding: 6px 32px;
    min-height: 52px;
  `,
  [SelectSize.LG]: css`
    padding: 10px 42px;
    min-height: 60px;
  `
};

const Label = styled.label<{ $fullWidth?: SelectProps['fullWidth'] }>`
  display: inline-flex;

  ${({ $fullWidth }) =>
          $fullWidth &&
          css`
      width: 100%;
    `};
`;

const Select = styled(ReactSelect).attrs({ classNamePrefix: 'select' })<{ $size: SelectProps['size'] }>`
  width: 100%;
  outline: none;
  
  .select__control {
    border: 0;
    outline: none;
    border-radius: ${({ theme }) => theme.radiuses.df}px;

    ${({ $size }) =>
      $size
        ? getSelectSizeCSS[$size]
        : null}
    
    .select__value-container {
      padding: 0;
    }
    
    &.select__control--is-focused {
      border-color: ${({ theme }) => theme.colors.base.secondary};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.base.secondary};
    }

    &.select__control--menu-is-open {
      .select__dropdown-indicator {
        transform: rotate(180deg);
      }
    }
    
    .select__input-container {
      margin: 0;
      padding: 0;
    }
    
    .select__placeholder {
      margin: 0;
      color: ${({ theme }) => theme.colors.base.grey[400]};
    }
  }

  .select__menu {
    border-radius: ${({ theme }) => theme.radiuses.df}px;
    box-shadow: 0 4px 11px hsla(0, 0%, 0%, 0.1);
    min-width: 250px;
    
    .select__option {
      padding: 12px 30px;
    }

    .select__menu-list {
      padding-top: 12px;
      padding-bottom: 12px;
      font-weight: 300;
    }
    
    .select__option--is-focused {
      outline: 1px solid ${({ theme }) => theme.colors.additional.brand_blue};
    }

    .select__option--is-selected {
      background-color: ${({ theme }) => theme.colors.additional.brand_blue};
      color: ${({ theme }) => theme.colors.base.light};
    }
  }
  
  .select__indicators {
    .select__indicator-separator {
      display: none;
    }
    
    .select__dropdown-indicator {
      padding: 0;
      transition: .15s;
    }
  }
`;

export const Styled = {
  Select,
  Label
};
