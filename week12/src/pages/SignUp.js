import React from "react";
import { Input, Inputs, Title, Wrapper } from "../components/Common";
import { styled } from "styled-components";
import { useForm } from "../hooks/useForm";
import { signUp } from "../apis/signUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // 커스텀 훅 활용
  const [id, onChangeId] = useForm();
  const [pw, onChangePW] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();
  const router = useNavigate();
  const onClick = async () => {
    await signUp(id, pw, name, age);
    router("/"); // 회원가입 완료 후 home 이동
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" value={id} onChange={onChangeId} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={onChangePW}
        />
        <Input placeholder="이름" value={name} onChange={onChangeName} />
        <Input placeholder="나이" value={age} onChange={onChangeAge} />
      </Inputs>
      <Button onClick={onClick}>Sign Up</Button>
    </Wrapper>
  );
};

export default SignUp;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
`;
