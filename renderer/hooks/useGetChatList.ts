import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { dbService } from "../firebase";

export function useGetChatList() {
  const [chattingRoomList, setChattingRoomList] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { email } = JSON.parse(localStorage.getItem("userData"));
      onSnapshot(collection(dbService, "Chatting"), (snapShot) => {
        const chattingRoomListData = snapShot.docs.map((doc) => doc.data());
        chattingRoomListData.forEach((room) => {
          room.participant.forEach((user) => {
            if (user === email) {
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
    }
  }, []);

  return chattingRoomList;
}
