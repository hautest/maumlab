import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { dbService } from "../firebase";

export function useGetChatList() {
  const [chattingRoomList, setChattingRoomList] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) return;
    onSnapshot(collection(dbService, "Chatting"), (snapShot) => {
      const chattingRoomListData = snapShot.docs.map((doc) => doc.data());
      chattingRoomListData.forEach((room) => {
        room.participant.forEach((user) => {
          if (user === userData.email) {
            setChattingRoomList((prev) => {
              const filterRoom = prev.filter(
                (rommData) => rommData.id !== room.id
              );
              return [...filterRoom, room];
            });
          }
        });
      });
    });
  }, []);

  return chattingRoomList;
}
