import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LionInfoPage } from './components/lioninfo/LionInfoPage';
import { LionTestPage } from './components/liontest/LionTestPage';
import styled from 'styled-components';
import Title from './components/Title';

// Button 컴포넌트
const MenuButton = ({ to, innerText }) => {
  const location = useLocation();
  const isActive = location.pathname === to;  // 현재 페이지와 경로 비교

  return (
    <StyledLink to={to}>
      <Button isActive={isActive}>{innerText}</Button>
    </StyledLink>
  );
};

const App = () => {
  return (
    <AppDom>
      <Router>
      <Title />
        <MenuDom>
          <MenuButton to="/info" innerText="아기사자 정보" />
          <MenuButton to="/test" innerText="멋사인 테스트" />
        </MenuDom>
        <Routes>
          <Route path="/info" element={<LionInfoPage />} />
          <Route path="/test" element={<LionTestPage />} />
        </Routes>
      </Router>
    </AppDom>
  );
};

export default App;

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0 0 0;
`;

const Button = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  border-radius: 40px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#FF85A5' : '#A0ACBD')};
`;
