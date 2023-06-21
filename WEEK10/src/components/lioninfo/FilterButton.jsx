import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

export const FilterButton = ({title}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParamsObj = new URL(window.location.href);
  const urlParams = urlParamsObj.searchParams;
  const category = urlParams.get('category');

  const handleButtonClick = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('category', title.toLowerCase());
    if (title === 'All') {
        searchParams.set('page', '1');
    } else {
        searchParams.delete('page');
    }
    const newSearch = searchParams.toString();
    navigate(`/info?${newSearch}`);  // URL 세팅
  };

  const buttonColor = (category === title || (category === 'all' && title ==='All')) ? "#FFBCDC" : "#FFF4EF";
  const textColor = (category === title || (category === 'all' && title ==='All')) ? "black" : "gray";

  return (
    <Button onClick={() => {handleButtonClick(); }} style={{backgroundColor: buttonColor, color:textColor}}>{title}</Button>
  );
};

const Button = styled.div`
  flex-basis: 10%;
  height: 70px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;
