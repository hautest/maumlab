import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  element: "input" | "textarea";
  state?: boolean;
}

export function Input({ type, element, state = true }: InputProps) {
  if (element === "input") {
    return <StyledInput state={state} type={type} />;
  } else {
    return <StyledTextarea state={state} />;
  }
}

const StyledInput = styled.input<{ state: boolean }>`
  width: 100%;
  outline: none;
  padding: ${theme.spacing[12]} ${theme.spacing[16]};
  height: 100%;
  border-radius: ${theme.spacing[8]};
  border: solid 1px
    ${({ state }) => (state ? theme.colors.skyblue : theme.colors.red)};
  :disabled {
    border: solid 1px ${theme.colors.gray};
  }
`;

const StyledTextarea = styled.textarea<{ state: boolean }>`
  width: 100%;
  height: 100%;
  outline: none;
  padding: ${theme.spacing[12]} ${theme.spacing[16]};
  border-radius: ${theme.spacing[8]};
  resize: none;
  border: solid 1px
    ${({ state }) => (state ? theme.colors.skyblue : theme.colors.red)};
  :disabled {
    border: solid 1px ${theme.colors.gray};
  }
`;
