import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import { baseUrl } from '../../apis/viewguest';

const PostGuestModal = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const writerHandler = (e) => {
    e.preventDefault();
    setWriter(e.target.value);
  };

  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(writer);
    console.log(content);

    let body = {
      title : title,
      writer : writer,
      content : content, 
    };

    axios
      .post(`${baseUrl}/new`, body)
      .then((res) => {console.log(res);
        alert("🦁등록 완료🦁");
        setTitle("");
        setWriter("");
        setContent("");
      });
  }

  return (
    <Dom>
      <form 
        onSubmit={submitHandler} 
        style={{display:"flex", flexDirection: "Column"}}>
          <Label>제목</Label>
          <Input type="title" value={title} onChange={titleHandler}></Input>
          <Label>작성자</Label>
          <Input type="writer" value={writer} onChange={writerHandler}></Input>
          <Label>남기고 싶은 말</Label>
          <InputContent type="content" value={content} onChange={contentHandler}></InputContent>
          <SubmitButton type='submit'>제출</SubmitButton>
        </form>
    </Dom>
  )
}

export default PostGuestModal

const Dom = styled.div`
  gap: 30px;
  width: 70vw;
  height: 400px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  background-color: #E1F8D4;
  box-shadow: 5px 5px 5px lightgray;
  margin-top: 25px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #535353;
  font-weight: 700;
  padding: 5px;
`

const Input = styled.input`
  max-width: 400px;
  height: 35px;
  font-size: 18px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: white;
  margin-bottom: 20px;
`

const InputContent = styled.textarea`
  max-width: 400px;
  height: 100px;
  font-size: 18px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: white;
  margin-bottom: 30px;
  resize: none;
`
const SubmitButton = styled.button`
  display: flex;
  max-width: 50px;
  height: 30px;
  border : none;
  border-radius: 20px;
  background-color: #A76B58;
  color: white;
  font-size: 15px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: #335126;
    transition: all 0.3s;
  }
`;