import { theme } from "../style/theme";
import styled from "styled-components";

export const Button = styled.button`
  padding: ${theme.spacing[8]} ${theme.spacing[16]};
  background-color: ${theme.colors.skyblue};
  width: 100%;
  border-radius: ${theme.spacing[8]};
  outline: none;
  border: none;
  :active {
    background-color: ${theme.colors.turquoise2};
  }
  :disabled {
    background-color: ${theme.colors.gray};
  }
`;
