const colors = {
  black: "#000000",
  white: "#ffffff",
  navy: "#142850",
  turquoise1: "#27496D",
  turquoise2: "#0C7B93",
  skyblue: "#00A8CC",
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
