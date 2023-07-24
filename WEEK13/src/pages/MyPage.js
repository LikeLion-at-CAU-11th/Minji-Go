import React, { useContext } from "react";
import { Button, Title, Wrapper } from "../components/layout/common";
import { ThemeContext } from "../context/context";
import { userNameAtom, emailAtom, isSubmitedAtom, dateAtom } from "../recoil/atoms";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const mode = useContext(ThemeContext);
  const navigate = useNavigate();

  const resetName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetDate = useResetRecoilState(dateAtom);
  const reset = useResetRecoilState(isSubmitedAtom);

  const userName = useRecoilValue(userNameAtom);

  const handleDelete = () => {
    reset();
    resetName();
    resetEmail();
    resetDate();

    navigate("/");
  };

  return (
    <Wrapper>
      <Title>welcome {userName}</Title>
      <Button mode={mode.button} onClick={handleDelete}>
        리셋
      </Button>
    </Wrapper>
  );
};

export default MyPage;
