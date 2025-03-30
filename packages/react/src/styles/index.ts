import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
  },

  theme: {
    colors: colors,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    radii: radii,
    space: space,
  },
});
