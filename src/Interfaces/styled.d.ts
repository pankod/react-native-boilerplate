import "styled-components";

declare module "styled-components" {
    interface DefaultTheme {
        colors: {
            primary: string;
        };
        dimensions: {
            screenWidth: number;
            screenHeight: number;
        };
    }
}
