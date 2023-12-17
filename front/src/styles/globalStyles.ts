import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    font-family: 'Manrope', sans-serif;
  }
  
  :root {
    --layout-padding-side: clamp(16px, 8vw, 135px);
  }
  
  .stopScroll {
    overflow: hidden;
  }
  
  .react-player {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background-color: black;
  }
  
  .react-player > video {
    position: relative;
    left: 0;
    top: 0;
    border-radius: 20px;
    overflow: hidden;
  }

  .Toastify__toast {
    border-radius: 12px;
  }
`;
