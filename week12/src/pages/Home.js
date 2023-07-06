import React from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
        </Inputs>
        <Button>Login</Button>
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
  padding: 20px;
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
