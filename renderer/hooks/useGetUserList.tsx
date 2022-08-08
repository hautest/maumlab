import { useEffect, useState } from "react";
import { dbService } from "../firebase";
import { collection, onSnapshot, DocumentData } from "firebase/firestore";

export function useGetUserList() {
  const [userData, setUserData] = useState<[] | DocumentData>([]);

  useEffect(() => {
    onSnapshot(collection(dbService, "User"), (snapShot) => {
      const newArr = snapShot.docs.map((doc) => doc.data());
      setUserData(newArr);
    });
  }, []);
  return userData;
}
