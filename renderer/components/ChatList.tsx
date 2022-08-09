import Link from "next/link";
import { useGetChatList } from "../hooks";
import { StyledList, FlexAlignCenterLi } from "../style";
import { Typography } from "./Typography";

export function ChatList() {
  const chattingRoomList = useGetChatList();
  return (
    <StyledList>
      {chattingRoomList.length === 0 && (
        <>
          <Typography color="skyblue" type="body4">
            채팅방이 없어요 !
          </Typography>
          <Typography color="skyblue" type="body4">
            채팅방을 만들어주세요
          </Typography>
        </>
      )}
      {chattingRoomList?.map((arr) => (
        <FlexAlignCenterLi key={arr.id}>
          <Link href={`chatting/${arr.id}`}>
            <Typography pointer type="body3" key={arr.id}>
              {arr.chatName}
            </Typography>
          </Link>
          <Typography color="turquoise2" type="body4">
            ({arr.participant.length})
          </Typography>
        </FlexAlignCenterLi>
      ))}
    </StyledList>
  );
}
