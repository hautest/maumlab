import { DocumentData } from "firebase/firestore";
import { CheckBox, CheckStyle, StyledCheckBox } from "./CheckBox";
import { useGetUserList } from "../hooks";
import { Dispatch, SetStateAction } from "react";
import { Typography } from "./Typography";
import {
  FlexalignCenterBox,
  StyledList,
  FlexJustSpaceBetLi,
  FlexGap4,
} from "../style";

interface UserListProps {
  check?: boolean;
  setState?: Dispatch<SetStateAction<DocumentData>>;
  fixedCheck?: string;
}

export function UserList({ check, setState, fixedCheck }: UserListProps) {
  const userData = useGetUserList();
  return (
    <StyledList>
      {userData?.map(({ uid, displayName, email, login }) => (
        <FlexJustSpaceBetLi key={uid}>
          <FlexGap4>
            <Typography type="body3">{displayName}</Typography>
            <Typography color="turquoise2" type="body4">
              {email}
            </Typography>
          </FlexGap4>
          <FlexGap4>
            {check &&
              (fixedCheck !== email ? (
                <CheckBox setState={setState} value={email} />
              ) : (
                <StyledCheckBox>
                  <CheckStyle>✔</CheckStyle>
                </StyledCheckBox>
              ))}
            {login ? (
              <FlexalignCenterBox>🔵</FlexalignCenterBox>
            ) : (
              <FlexalignCenterBox>🔴</FlexalignCenterBox>
            )}
          </FlexGap4>
        </FlexJustSpaceBetLi>
      ))}
    </StyledList>
  );
}
