import styled from 'styled-components';

const Container = styled.div`
  width: 100%; 
  
  .dialog-sheet {
    background: ${({ theme }) => theme.colors.base.primary};
    border-radius: ${({ theme }) => theme.radiuses.df}px;
    margin-top: ${({ theme }) => theme.spacings.x16}px;
  }

  .rdp {
    --rdp-cell-size: 40px; /* Size of the day cells. */
    --rdp-caption-font-size: 18px; /* Font size for the caption labels. */
    --rdp-accent-color: ${({ theme }) => theme.colors.additional.brand_blue}; /* Accent color for the background of selected days. */
    --rdp-background-color: #e7edff; /* Background color for the hovered/focused elements. */
    --rdp-accent-color-dark: ${({ theme }) => theme.colors.additional.brand_blue}; /* Accent color for the background of selected days (to use in dark-mode). */
    --rdp-background-color-dark: #e7edff; /* Background color for the hovered/focused elements (to use in dark-mode). */
    --rdp-outline: 2px solid ${({ theme }) => theme.colors.base.grey['400']}; /* Outline border for focused elements */
    --rdp-outline-selected: 3px solid ${({ theme }) => theme.colors.base.grey['400']}; /* Outline border for focused _and_ selected elements */
    --rdp-selected-color: #fff; /* Color of selected day text */
  }
`;

export const Styled = {
  Container
};
