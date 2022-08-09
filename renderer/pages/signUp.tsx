import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { useCreateUser } from "../hooks";
import { Box, BottomBox, Form } from "../style";
import { useRouter } from "next/router";
import { authService } from "../firebase";
import { Button, Typography, LabelInput } from "../components";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [state, setState] = useState(true);
  const router = useRouter();
  const [createUser, error] = useCreateUser();

  useEffect(() => {
    if (password === rePassword) {
      setState(true);
    } else {
      setState(false);
    }
  }, [password, rePassword]);

  useEffect(() => {
    const user = window.localStorage.getItem("userData");
    if (user) {
      router.push("/home");
    }
  }, []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "nickName":
        setNickName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "rePassword":
        setRePassword(e.target.value);
        break;
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({ email, password, nickName });
  };
  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <LabelInput value={email} onChange={handleChange} id="email">
          이메일
        </LabelInput>
        <LabelInput value={nickName} onChange={handleChange} id="nickName">
          닉네임
        </LabelInput>
        <LabelInput
          state={state}
          value={password}
          onChange={handleChange}
          id="password"
          type="password"
        >
          비밀번호
        </LabelInput>
        <LabelInput
          value={rePassword}
          onChange={handleChange}
          id="rePassword"
          type="password"
          state={state}
        >
          비밀번호 확인
        </LabelInput>
        <Button disabled={!(state && email && nickName && password)}>
          회원가입
        </Button>
      </Form>
      <BottomBox>
        <Typography type="body4">계정이 있으시면</Typography>
        <Link href="/login">
          <Typography color="turquoise2" pointer type="body4">
            로그인하러 가기
          </Typography>
        </Link>
      </BottomBox>
      <Typography color="red" type="body4">
        {error}
      </Typography>
    </Box>
  );
}
