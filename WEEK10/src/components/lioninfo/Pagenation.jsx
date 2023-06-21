import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Pagenation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const changeCurrentPage = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page);
    const newSearch = searchParams.toString();
    navigate(`/info?${newSearch}`);  // navigate 함수를 사용하여 페이지 이동 처리
  };

  return (
    <PageButtonDom>
      {Array(7).fill().map((_, index) => (
      <PageButton key={index} onClick={() => { changeCurrentPage(index+1)}}>
        {index + 1}
      </PageButton>
      ))}
    </PageButtonDom>
  )
}

export default Pagenation

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
  &:hover{
    background-color: #FFBCDC;
    transition: all 0.3s;
  }
`
