import { theme } from "../style";
import { useState } from "react";
import styled from "styled-components";

export function CheckBox({ setState, value }) {
  const [checked, setChecked] = useState(false);

  const handleOnClick = () => {
    setChecked((prev) => !prev);
    setState((prev) => {
      if (!checked) {
        return [value, ...prev];
      } else {
        const newArr = prev.filter((arr) => arr !== value);
        return newArr;
      }
    });
  };
  return (
    <StyledCheckBox onClick={handleOnClick}>
      {checked && <CheckStyle>✔</CheckStyle>}
    </StyledCheckBox>
  );
}
export const StyledCheckBox = styled.div`
  height: ${theme.spacing[24]};
  width: ${theme.spacing[24]};
  border: solid 1px ${theme.colors.turquoise1};
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckStyle = styled.div`
  font-size: 20px;
  color: ${theme.colors.turquoise2};
`;
