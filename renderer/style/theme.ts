const colors = {
  black: "#000000",
  white: "#ffffff",
  beige: "#F9F3DF",
  yellow: "#FDFCE5",
  skyblue: "#D7E9F7",
  orange: "#F4D19B",
};

const spacing = {
  "4": "4px",
  "8": "8px",
  "16": "16px",
  "32": "32px",
  "62": "64px",
};

export const theme = {
  colors,
  spacing,
};

export type ThemeColorType = keyof typeof colors;
export type ThemeSpacingType = keyof typeof spacing;
