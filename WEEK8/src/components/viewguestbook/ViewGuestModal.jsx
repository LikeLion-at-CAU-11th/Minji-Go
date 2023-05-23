import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import UserDataSection from './UserDataSection';
import { getAllPost } from '../../apis/viewguest';

const ViewGuestModal = () => {
  const [userData, setUserData] = useState([]);

  // 렌더 전 데이터 패칭을 위한 useEffect
  useEffect(()=>{
    const fetchData = async () =>{
        const response = await getAllPost();
        setUserData(response.data.data);
    };
    fetchData();
}, []);

return (
    <Dom>
        <UserDataSection userData={userData} />
    </Dom>
    )
}

export default ViewGuestModal

const Dom = styled.div`
  gap: 10px;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top:5px;
  margin-bottom: 70px;
  border-radius: 20px;
`;