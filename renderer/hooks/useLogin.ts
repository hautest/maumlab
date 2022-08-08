import { authService, dbService } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, DocumentData, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";

export function useLogin() {
  const [error, setError] = useState("");
  const router = useRouter();
  const login = ({ email, password }) => {
    const ref = doc(dbService, "User", email);
    signInWithEmailAndPassword(authService, email, password)
      .then((data) => {
        localStorage.setItem(
          "userData",
          JSON.stringify({ email, uid: data.user.uid })
        );
        updateDoc(ref, {
          login: true,
        }).then(() => {
          router.push("/home");
        });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("존재하지 않는 이메일입니다.");
        } else if (error.code === "auth/wrong-password") {
          setError("비밀번호가 일치하지 않습니다.");
        } else if (error.code === "auth/invalid-email") {
          setError("이메일 형식이 올바르지 않습니다.");
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      });
  };
  const logOut = (user: DocumentData) => {
    if (!user) return;
    const ref = doc(dbService, "User", user.email);
    updateDoc(ref, {
      login: false,
    })
      .then(() => {
        localStorage.removeItem("userData");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { login, error, logOut };
}
