import { dbService } from "../firebase";
import {
  collection,
  onSnapshot,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { CheckBox, CheckStyle, StyledCheckBox } from "./CheckBox";
import styled from "styled-components";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Typography } from "./Typography";
import { theme } from "../style";

interface UserListProps {
  check?: boolean;
  setState?: Dispatch<SetStateAction<DocumentData>>;
  fixedCheck?: string;
}

export function UserList({ check, setState, fixedCheck }: UserListProps) {
  const [userData, setUserData] = useState<[] | DocumentData>([]);

  useEffect(() => {
    getDocs(collection(dbService, "User")).then((arr) => {
      arr.forEach((data) => {
        const getData = data.data();
        setUserData((prev) => {
          const newArr = prev?.filter((prevArr) => prevArr.uid !== getData.uid);
          return [getData, ...newArr];
        });
      });
    });
    onSnapshot(collection(dbService, "User"), (snapShot) => {
      const newArr = snapShot.docs.map((doc) => doc.data());
      setUserData(newArr);
    });
  }, []);
  return (
    <StyledUserList>
      {userData?.map(({ uid, displayName, email, login }) => (
        <StyledLi key={uid}>
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
        </StyledLi>
      ))}
    </StyledUserList>
  );
}

const StyledUserList = styled.ul`
  border: solid ${theme.spacing[4]} ${theme.colors.turquoise1};
  padding: ${theme.spacing[28]} ${theme.spacing[28]};
  height: 300px;
  overflow-y: scroll;
`;
const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[8]};
`;
const FlexGap4 = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
`;
const FlexalignCenterBox = styled.div`
  display: flex;
  align-items: center;
`;
