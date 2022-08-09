import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { dbService, authService } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";

interface createUserProps {
  email: string;
  password: string;
  nickName: string;
}

export function useCreateUser() {
  const [error, setError] = useState("");
  const router = useRouter();
  const createUser = ({ email, password, nickName }: createUserProps) => {
    const ref = doc(dbService, "User", email);
    createUserWithEmailAndPassword(authService, email, password)
      .then((data) => {
        updateProfile(authService.currentUser, {
          displayName: nickName,
        });
        setDoc(ref, {
          email: email,
          password: password,
          displayName: nickName,
          uid: data.user.uid,
          chat: [],
          login: true,
        })
          .then(() => {
            localStorage.setItem(
              "userData",
              JSON.stringify({ email, uid: data.user.uid })
            );
          })
          .then(() => {
            router.push("/home");
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("이미 존재하는 이메일입니다.");
        } else if (error.code === "auth/invalid-email") {
          setError("이메일 형식이 올바르지 않습니다.");
        } else if (error.code === "auth/weak-password") {
          setError("비밀번호는 6자리 이상이어야 합니다.");
        } else if (error.code === "auth/operation-not-allowed") {
          setError("이메일/비밀번호 로그인이 비활성화 되어있습니다.");
        } else if (error.code === "auth/invalid-crdential") {
          setError("이메일/비밀번호가 올바르지 않습니다.");
        } else if (error.code === "auth/user-disabled") {
          setError("이메일/비밀번호 로그인이 비활성화 되어있습니다.");
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      });
  };
  return [createUser, error] as const;
}
