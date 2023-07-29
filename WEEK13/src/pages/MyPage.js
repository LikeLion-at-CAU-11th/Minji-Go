import React, { useContext } from "react";
import { Button, Title, Wrapper } from "../components/layout/common";
import { ThemeContext } from "../context/context";
import { userNameAtom, emailAtom, isSubmitedAtom, dateAtom } from "../recoil/atoms";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MyPage = () => {
  const mode = useContext(ThemeContext);
  const navigate = useNavigate();

  const resetName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetDate = useResetRecoilState(dateAtom);
  const reset = useResetRecoilState(isSubmitedAtom);

  const userName = useRecoilValue(userNameAtom);
  const date = useRecoilValue(dateAtom);

  const handleDelete = () => {
    reset();
    resetName();
    resetEmail();
    resetDate();

    navigate("/");
  };

  return (
    <Wrapper>
      <DateTitle>{date}</DateTitle>
      <MainTitle>Hello {userName}✋🏻</MainTitle>
      <Button mode={mode.button} onClick={handleDelete}>
        리셋
      </Button>
    </Wrapper>
  );
};

export default MyPage;

const DateTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
`

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`