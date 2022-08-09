import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  DocumentData,
  updateDoc,
} from "firebase/firestore";
import { dbService } from "../firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCreateAtId } from "./useCreateAt";

export function useChat() {
  const router = useRouter();
  const [createAt, id] = useCreateAtId();
  const [chat, setChat] = useState<null | DocumentData>(null);
  const makeChat = ({ chatName, participant }) => {
    const ref = doc(dbService, "Chatting", chatName);
    const id = Math.round(Math.random() * 10000001) + 1;
    setDoc(ref, {
      participant,
      id,
      message: [],
      chatName,
    });
    router.push(`/chatting/${id}`);
  };
  const getChat = (chatId) => {
    useEffect(() => {
      onSnapshot(collection(dbService, "Chatting"), (snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().id !== Number(chatId)) return;
          setChat(doc.data());
        });
      });
    }, [chatId]);
    return chat;
  };
  const sendMessage = (chatName, sender, sendMessage) => {
    const ref = doc(dbService, "Chatting", chatName);
    updateDoc(ref, {
      message: [
        ...chat.message,
        {
          content: sendMessage,
          sender: sender,
          createAt,
          id,
        },
      ],
    });
  };
  return { makeChat, getChat, sendMessage };
}
