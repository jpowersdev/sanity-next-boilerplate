import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: {
        heading: string;
        body: string;
        light: string;
      };
    };
  }
}
