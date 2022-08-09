import styled from "styled-components";
import { flexJustCenter } from "./common";
import { theme } from "./theme";

export const Box = styled.div`
  padding: ${theme.spacing[16]} ${theme.spacing[64]};
  height: 100%;
  ${flexJustCenter}
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
