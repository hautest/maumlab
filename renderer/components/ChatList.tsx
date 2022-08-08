import { useGetChatList } from "../hooks";
import { StyledList, FlexAlignCenterLi } from "../style";
import { Typography } from "./Typography";

export function ChatList() {
  const chattingRoomList = useGetChatList();
  console.log(chattingRoomList);
  return (
    <StyledList>
      {chattingRoomList?.map((arr) => (
        <FlexAlignCenterLi>
          <Typography style={{ cursor: "pointer" }} type="body3" key={arr.id}>
            {arr.chatName}
          </Typography>
          <Typography color="turquoise2" type="body4">
            ({arr.participant.length})
          </Typography>
        </FlexAlignCenterLi>
      ))}
    </StyledList>
  );
}
