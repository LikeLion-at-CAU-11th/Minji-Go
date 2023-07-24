import React, { useContext, useState } from "react";
import Form from "./Form";
import { Button } from "../layout/common";
import { ThemeContext } from "../../context/context";
import Modal from "./Modal";
import { styled } from "styled-components";

const FormSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const mode = useContext(ThemeContext);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Form type="date" inputType="날짜" />
      <ButtonDom>
        <Button mode={mode.button} onClick={openModal}>
          제출
        </Button>
      </ButtonDom>

      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};

export default FormSection;

const ButtonDom = styled.div`
  margin-top: 15px;
  padding: 10px;
  border-radius: 15px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
