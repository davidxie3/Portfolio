import { extendTheme, theme as base } from "@chakra-ui/react";

const fonts = {
  Heading: `'Clash Display Medium', ${base.fonts?.heading}, sans-serif`,
  Body: `'FKDisplay Regular', ${base.fonts?.body}, sans-serif`,
};

const theme = extendTheme({ fonts });

export default theme;