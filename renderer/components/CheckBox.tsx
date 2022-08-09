import { CheckStyle, StyledCheckBox } from "../style";
import { useState } from "react";

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
