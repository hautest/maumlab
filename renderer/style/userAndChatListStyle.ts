import styled from "styled-components";
import { theme } from "./theme";

export const StyledList = styled.ul`
  border: solid ${theme.spacing[4]} ${theme.colors.turquoise1};
  padding: ${theme.spacing[28]} ${theme.spacing[28]};
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  overflow-y: scroll;
`;
export const FlexJustSpaceBetLi = styled.li`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[8]};
`;
export const FlexGap4 = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
`;
export const FlexalignCenterBox = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexAlignCenterLi = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
`;
