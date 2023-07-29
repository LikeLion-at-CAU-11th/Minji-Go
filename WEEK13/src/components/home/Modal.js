import React, { useContext, useRef } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../../context/context";
import { Button, Title } from "../layout/common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateAtom,
  emailAtom,
  isSubmitedAtom,
  userNameAtom,
} from "../../recoil/atoms";
import { useNavigate } from "react-router-dom";

const Modal = ({ setModalOpen }) => {
  const mode = useContext(ThemeContext);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const date = useRecoilValue(dateAtom);

  const isSubmited = useSetRecoilState(isSubmitedAtom);
  const navigate = useNavigate();

  const modalEl = useRef();

  const handleClick = () => {
    setModalOpen(false);
    isSubmited(true);
    navigate("/mypage");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClickOutside = (e) => {
    if (modalEl.current === e.target) {
      setModalOpen(false);
    }
  };

  return (
    <ModalWrapper ref={modalEl}  onClick={handleClickOutside}>
      <ModalDom mode={mode.sub}>
      <Title>입력 정보 확인</Title>
      <div>🧑🏻‍💻 {userName}</div>
      <div>✉️ {email}</div>
      <div>🗓️ {date}</div>
      <ButtonDom>
        <Button mode={mode.button} onClick={handleClick}>
          확인
        </Button>
        <Button mode={mode.button} onClick={closeModal}>
          취소
        </Button>
      </ButtonDom>
      </ModalDom>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  min-height: 90vh;
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalDom = styled.div`
  position: absolute;
  background-color: ${(props) => props.mode};
  margin: 0;
  padding: 0;
  height: 50%;
  width: 60%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ButtonDom = styled.div`
  margin-top: 15px;
  padding: 10px;
  border-radius: 15px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
