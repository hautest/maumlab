import styled from "styled-components";
import { ThemeColorType, theme } from "../style";

import { css } from "styled-components";

const TypographyConstant = {
  title: css`
    font-weight: 700;
    font-size: 40px;
  `,
  subtitle: css`
    font-weight: 700;
    font-size: 36px;
  `,
  body1: css`
    font-weight: 700;
    font-size: 32px;
  `,
  body2: css`
    font-weight: 400;
    font-size: 28px;
  `,
  body3: css`
    font-weight: 700;
    font-size: 24px;
  `,
  body4: css`
    font-weight: 400;
    font-size: 20px;
  `,
};

type TypographyConstantKey = keyof typeof TypographyConstant;

export const Typography = styled.p<{
  type: TypographyConstantKey;
  color?: ThemeColorType;
  pointer?: boolean;
}>`
  ${({ type }) => TypographyConstant[type]};
  color: ${({ color }) => theme.colors[color]};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;
