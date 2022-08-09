import { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  state?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
}

export function Input({ type, state = true, id, onChange, value }: InputProps) {
  return (
    <StyledInput
      onChange={onChange}
      value={value}
      id={id}
      state={state}
      type={type}
    />
  );
}

const StyledInput = styled.input<{ state: boolean }>`
  width: 100%;
  outline: none;
  font-size: ${theme.spacing[20]};
  padding: ${theme.spacing[12]} ${theme.spacing[16]};
  border-radius: ${theme.spacing[8]};
  border: solid 1px
    ${({ state }) => (state ? theme.colors.skyblue : theme.colors.red)};
  :disabled {
    border: solid 1px ${theme.colors.gray};
  }
`;
