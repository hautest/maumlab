import { useRouter } from "next/router";
import { Typography, Input, Button } from "../../components";
import styled from "styled-components";
import { theme } from "../../style";
import { ChangeEvent, useEffect, useState } from "react";
import { useChat, useGetUser } from "../../hooks";
import Link from "next/link";

export default function Chatting() {
  const { getChat, sendMessage } = useChat();
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [user] = useGetUser();
  const chat = getChat(router.query.id);

  useEffect(() => {
    const aa = document.querySelector(".chatContentBox");
    console.log(aa.scrollTop);
    aa.scrollTop = aa.scrollHeight;
  }, [chat]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };
  const handleSubmit = () => {
    sendMessage(chat.chatName, user.displayName, inputValue);
    setInputValue("");
  };
  const handleHome = () => {
    router.push("/home");
  };
  return (
    <StyledChatting>
      <HeaderBox>
        <Typography color="navy" type="title">
          {chat?.chatName}({chat?.participant.length})
        </Typography>
        <Link href={"/home"}>
          <Typography pointer color="turquoise1" type="body2">
            (홈으로)
          </Typography>
        </Link>
      </HeaderBox>
      <ChatContentBox className="chatContentBox">
        {chat?.message.map((item) => {
          if (item.sender === user?.displayName) {
            return (
              <MessageBox myMessage key={item.id}>
                <Typography type="body3">{item.content}</Typography>
                <Typography color="skyblue" type="body4">
                  ({item.sender})
                </Typography>
              </MessageBox>
            );
          } else {
            return (
              <MessageBox key={item.id}>
                <Typography color="skyblue" type="body4">
                  ({item.sender})
                </Typography>
                <Typography type="body3">{item.content}</Typography>
              </MessageBox>
            );
          }
        })}
      </ChatContentBox>
      <Form onSubmit={handleSubmit}>
        <Input element="textarea" value={inputValue} onChange={handleChange} />
        <ButtonBox>
          <Button>전송</Button>
        </ButtonBox>
      </Form>
    </StyledChatting>
  );
}
const ChatContentBox = styled.main`
  border: solid ${theme.spacing[4]} ${theme.colors.turquoise1};
  background-color: ${theme.colors.gray};
  padding: 0 ${theme.spacing[20]};
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 60%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledChatting = styled.div`
  height: 100%;
  gap: ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  width: 60%;
  align-items: center;
`;
const ButtonBox = styled.div`
  min-width: fit-content;
`;

const MessageBox = styled.div<{ myMessage?: boolean }>`
  display: flex;
  justify-content: ${({ myMessage }) =>
    myMessage ? "flex-end" : "flex-start"};
`;
const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
