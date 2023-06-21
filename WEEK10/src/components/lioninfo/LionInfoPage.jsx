import React from 'react'
import styled from 'styled-components'
import { FilterButton } from './FilterButton';
import UserDataSection from './UserDataSection';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagenation from './Pagenation';

export const LionInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParamsObj = new URL(window.location.href);
  const urlParams = urlParamsObj.searchParams;
  const currentCategory = urlParams.get('category');

  const category = [
        {
          id: 0,
          type: "page",
          title: "All",
        },
        {
          id: 1,
          type: "gender",
          title: "male",
        },
        {
          id: 2,
          type: "gender",
          title: "female",
        },
        {
          id: 3,
          type: "stack",
          title: "frontend",
        },
        {
          id: 4,
          type: "stack",
          title: "backend",
        },
        {
          id: 5,
          type: "stack",
          title: "design",
        },
        {
          id: 6,
          type: "stack",
          title: "pm",
        },
    ];

  return (
    <Dom>
        <Title>🦁 LikeLion 11th 🦁</Title>
        <ButtonDom>
        {category.map((c, i) => (
          <FilterButton
            key={i}
            title={c.title}
          />
        ))}
      </ButtonDom>
      <DataDom>
        <UserDataSection />
        {currentCategory==='all'? <Pagenation/> : null}
      </DataDom>
    </Dom>
  )
}

const Dom = styled.div`
  gap: 30px;
  background-color: #FFE2DB;
  width: 85vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #DCBEC2;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

const DataDom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`