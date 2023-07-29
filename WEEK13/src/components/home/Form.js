import React from "react";
import { useRecoilState } from "recoil";

import { userNameAtom, emailAtom, dateAtom } from "../../recoil/atoms";
import { styled } from "styled-components";

const Form = ({ type, inputType }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [date, setDate] = useRecoilState(dateAtom);

  const onChange = (e) => {
    const data = e.target.value;
    if (inputType === "이름") {
      setUserName(data);
      // console.log(userName)
    } else if (inputType === "이메일") {
      setEmail(data);
      // console.log(email)
    } else {
      setDate(data);
    }
  };

  return (
    <FormWrapper>
      <FormTitle>{inputType}</FormTitle>
      <Input type={type} onChange={onChange} />
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.div`
  margin-bottom: 15px;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 5px;
`;

const Input = styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`;
