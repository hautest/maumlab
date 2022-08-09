import styled from "styled-components";
import { flexAlignCenter, flexJustAlignCenter } from "./common";
import { theme } from "./theme";

export const StyledList = styled.ul`
  border: solid ${theme.spacing[4]} ${theme.colors.turquoise1};
  border-radius: ${theme.spacing[16]};
  padding: ${theme.spacing[28]} ${theme.spacing[28]};
  background-color: ${theme.colors.white};
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
  ${flexAlignCenter}
`;

export const FlexAlignCenterLi = styled.li`
  ${flexAlignCenter}
  gap: ${theme.spacing[8]};
`;
export const StyledCheckBox = styled.div`
  height: ${theme.spacing[24]};
  width: ${theme.spacing[24]};
  border: solid 1px ${theme.colors.turquoise1};
  border-radius: 50%;
  outline: none;
  ${flexJustAlignCenter}
`;

export const CheckStyle = styled.div`
  font-size: 20px;
  color: ${theme.colors.turquoise2};
`;
