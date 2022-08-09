import { Typography, Modal, Button, Input, ChatList } from "../components";
import styled from "styled-components";
import { useGetUser, useLogin, useChat } from "../hooks";
import { UserList } from "../components/UserList";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  flexAlignCenter,
  flexJustAlignCenter,
  flexJustCenter,
  theme,
} from "../style";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useGetUser();
  const [modal, setModal] = useState(false);
  const [chatName, setChatName] = useState("");
  const [participant, setParticipant] = useState([]);
  const { makeChat } = useChat();
  const nav = useRouter();

  const { logOut } = useLogin();
  const handleLogOut = () => {
    logOut(user);
    setUser(null);
  };
  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  const hanldeChatName = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setChatName(value);
  };
  const handleMakeChat = () => {
    makeChat({ chatName, participant });
    setModal(false);
  };
  useEffect(() => {
    if (!window.localStorage.getItem("userData")) {
      nav.push("/login");
    }
  }, []);
  useEffect(() => {
    if (modal && user) {
      setParticipant([user.email]);
    }
  }, [modal]);
  return (
    <StyledHome>
      <Modal visible={modal}>
        <ModalBox>
          <InputButtonBox>
            <Input onChange={hanldeChatName} value={chatName} />
            <ButtonBox>
              <Button onClick={toggleModal}>X</Button>
            </ButtonBox>
          </InputButtonBox>
          <UserList fixedCheck={user?.email} check setState={setParticipant} />
          <Button onClick={handleMakeChat}>만들기</Button>
        </ModalBox>
      </Modal>
      {user && (
        <HeaderBox>
          <Typography color="black" type="title">
            안녕하세요 {user?.displayName} 님 :)
          </Typography>
          <ButtonBox>
            <Button onClick={handleLogOut}>로그아웃</Button>
          </ButtonBox>
        </HeaderBox>
      )}
      <ListBox>
        <UserList />
        <ChatList />
      </ListBox>
      <ButtonBox>
        <Button onClick={toggleModal}>채팅만들기</Button>
      </ButtonBox>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  ${flexJustAlignCenter}
  flex-direction: column;
  gap: ${theme.spacing[20]};
  height: 100vh;
`;

const ListBox = styled.main`
  ${flexJustCenter}
  gap: ${theme.spacing[16]};
`;

const HeaderBox = styled.header`
  width: 100%;
  ${flexJustAlignCenter}
`;

const ButtonBox = styled.div`
  width: fit-content;
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;
const InputButtonBox = styled.div`
  ${flexAlignCenter}
  gap: ${theme.spacing[8]};
`;
