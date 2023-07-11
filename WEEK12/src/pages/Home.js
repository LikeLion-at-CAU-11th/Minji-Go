import React from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { useForm } from "../hooks/useForm";

const Home = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePW] = useForm();
  const router = useNavigate();

  const onClick = async () => {
    try {
      // 입력값 검증
      if (id.length === 0 || pw.length === 0) throw "inputNullError";
     
      const result = await login(id, pw);
      console.log(result);
      const { accessToken, refreshToken } = result; // 구조분해할당
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      router("/mypage");
    } catch (error) {
      if (error === "inputNullError"){
        alert("입력값을 모두 넣어주세요");
      } else if (error.response.status === 401) {
        alert("비밀번호가 틀렸습니다");
      } else alert("존재하지 않는 아이디입니다");
    }
  };
  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input placeholder="아이디" value={id} onChange={onChangeId} />
          <Input
            placeholder="비밀번호"
            type="password"
            value={pw}
            onChange={onChangePW}
          />
        </Inputs>
        <Button onClick={onClick}>Login</Button>
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.div`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
