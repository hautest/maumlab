import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { useCreateUser } from "../hooks";
import styled from "styled-components";
import { theme } from "../style";
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
  console.log(error);
  useEffect(() => {
    if (password === rePassword) {
      setState(true);
    } else {
      setState(false);
    }
  }, [password, rePassword]);

  useEffect(() => {
    authService.onAuthStateChanged((data) => {
      if (data) {
        router.push("/home");
      }
    });
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
    <StyledSignUp>
      <StyledForm onSubmit={handleSubmit}>
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
      </StyledForm>
      <TypographyBox>
        <Typography type="body4">계정이 있으시면</Typography>
        <Link href="/login">
          <Typography
            color="turquoise2"
            style={{ cursor: "pointer" }}
            type="body4"
          >
            로그인하러 가기
          </Typography>
        </Link>
      </TypographyBox>
      <Typography color="red" type="body4">
        {error}
      </Typography>
    </StyledSignUp>
  );
}

const StyledSignUp = styled.div`
  padding: ${theme.spacing[16]} ${theme.spacing[64]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing[8]};
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

const TypographyBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
