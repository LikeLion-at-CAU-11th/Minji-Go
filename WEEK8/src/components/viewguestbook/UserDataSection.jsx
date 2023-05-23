import React from 'react'
import styled from 'styled-components'
import GuestCard from './GuestCard'

const UserDataSection = ({userData}) => {
  // 등록 순으로 카드를 보여준다
  return <Dom>
    {userData && userData.map((user,i) => <GuestCard key={user.id} user={userData[userData.length - 1 - i]}/>)}</Dom>;
}

export default UserDataSection

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  overflow: scroll;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;