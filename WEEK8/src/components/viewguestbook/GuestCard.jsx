import React from 'react';
import styled from "styled-components";
import { deletePost } from '../../apis/viewguest';

const GuestCard = ({user}) => {
  const id = user.id;
  // 한국 시간으로 파싱
  const dateTimeStr = user.created_at;
  const dateTime = new Date(dateTimeStr);
  const koreanTime = dateTime.toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    hour12: false,
  });
  const date = koreanTime.slice(0,20);

    return <Card>
    <Title>
      <div>{user.title}</div>
      <DeleteButton onClick={()=>deletePost(id)}>X</DeleteButton>
    </Title>
    <WriteData>
        <div><strong>{user.writer}</strong> &nbsp;&nbsp;&nbsp;{date} </div>
    </WriteData>
    <Content>
        <div>{user.content}</div>
    </Content>
  </Card>
}

export default GuestCard;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #535353;
  font-weight: 700;
`;

const WriteData = styled.div`
  display: flex;
  font-size: 13px;
  color: #535353;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E1F8D4;
  width: 80%;
  max-width: 500px;
  height: 130px;
  overflow-y: scroll;
  justify-content: center;
  padding: 0 30px;
  border-radius: 20px;
  gap: 10px;
  box-shadow: 5px 5px 5px lightgray;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;

const DeleteButton = styled.div`
  flex-basis: 25px;
  height: 25px;
  background-color: white;
  color: gray;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  &:hover{
    color: white;
    background-color: #E09F8A;
    transition: all 0.3s;
  }
`;