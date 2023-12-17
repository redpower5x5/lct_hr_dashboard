import 'styled-components';
import { type theme } from './src/lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors
    spacings: typeof theme.spacings
    radiuses: typeof theme.radiuses
    breakpoints: typeof theme.breakpoints
  }

  export function useTheme (): DefaultTheme
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
