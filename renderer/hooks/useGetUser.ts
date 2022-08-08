import { useEffect, useState } from "react";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { dbService } from "../firebase";

export function useGetUser() {
  const [user, setUser] = useState<DocumentData | null>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (!!storedUserData) {
        const ref = doc(dbService, "User", storedUserData.email);
        getDoc(ref).then((data) => {
          if (data.data().uid === storedUserData.uid) {
            const userData = data.data();
            setUser(userData);
          }
        });
      }
    }
  }, []);
  return [user, setUser] as const;
}
