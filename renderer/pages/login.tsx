import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLogin } from "../hooks";
import { Typography, LabelInput, Button } from "../components";
import { authService } from "../firebase";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();
  const router = useRouter();
  useEffect(() => {
    authService.onAuthStateChanged((data) => {
      if (data) {
        router.push("/home");
      }
    });
  }, []);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography type="title">로그인이 필요해요</Typography>
        <LabelInput
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
        >
          이메일
        </LabelInput>
        <LabelInput
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        >
          비밀번호
        </LabelInput>
        <Button>로그인</Button>
      </form>
      <Typography type="body4">계정이 없으시면</Typography>
      <Link href="/signUp">
        <Typography
          color="turquoise2"
          style={{ cursor: "pointer" }}
          type="body4"
        >
          회원가입하러 가기
        </Typography>
      </Link>
      <Typography color="red" type="body4">
        {error}
      </Typography>
    </div>
  );
}
