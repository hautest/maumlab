import { Typography } from "./Typography";
import { Input, InputProps } from "./Input";

type LabelInputProps = Pick<
  InputProps,
  "value" | "onChange" | "id" | "children" | "state" | "type"
>;

export function LabelInput({
  value,
  onChange,
  id,
  children,
  type,
  state,
}: LabelInputProps) {
  return (
    <>
      <label htmlFor={id}>
        <Typography type="subtitle">{children}</Typography>
      </label>
      <Input
        id={id}
        type={type}
        state={state}
        element="input"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
