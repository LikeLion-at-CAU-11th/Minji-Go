import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import UserDataSection from "./UserDataSection";
import { getAllUser, getUserPerPage } from "../../apis/lioninfo";

const LionInfoModal = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState({page: 1});
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  
  const handleSelect = (id) => {  // 어떤 카테고리 버튼이 선택됐는지 알려주는 배열 세팅
    const newArr = Array(7).fill(false);
    newArr[id] = true;
    setIsCategorySelected(newArr);
  }

  // 페이지 버튼 선택시 페이지값 변경
  const changeCurrentPage = async (selectedPage) => {
    setCurrentPage({
      ...currentPage,
      page: selectedPage,
    })
    await changePageData(selectedPage);
  }

  // 전체 페이지를 가져와서 슬라이싱
  const changePageData = async (page) => {
    const response = await getAllUser();
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 3;
    setUserData(response.data.data.slice(startIndex, endIndex + 1));
  }

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
            id={c.id}
            title={c.title}
            type={c.type}
            setUserData={setUserData}
            handleSelect={handleSelect}
            isSelected = {isCategorySelected[c.id]}
          />
        ))}
      </ButtonDom>
      <UserDataSection userData={userData} />
      {isCategorySelected[0]?(
        <PageButtonDom>
          {Array(7).fill().map((_, index) => (
            <PageButton key={index} onClick={() => { changeCurrentPage(index+1)}}>
              {index + 1}
            </PageButton>
            ))}
        </PageButtonDom>
        ):null
      }
    </Dom>
  );
};

export default LionInfoModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;

const PageButtonDom = styled.div`
  display: flex;
  justify-content: center;
  gap:10px;
  width: 70%;
`
const PageButton = styled.div`
  text-align: center;
  width: 20px;
  height: 20px;
  font-size: 15px;
  background-color: white;
  border-radius: 20px;
`