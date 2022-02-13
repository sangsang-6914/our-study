import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mint: {
      basic: string;
      darker: string;
      deepDarker: string;
      lighter: string;
      deepLighter: string;
    };
  }
}
