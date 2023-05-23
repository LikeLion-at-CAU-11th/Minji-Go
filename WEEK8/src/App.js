import './App.css';
import styled from 'styled-components';
import Title from './components/Title';
import { useState } from 'react';
import ViewGuestModal from './components/viewguestbook/ViewGuestModal';
import PostGuestModal from './components/postguestbook/PostGuestModal';

function App() {
  const [modal, setModal] = useState(0);
  return <AppDom>
    <Title/>
    <MenuDom>
      <MenuButton clicked={modal===0} onClick={()=>setModal(0)} >방명록 보기</MenuButton>
      <MenuButton clicked={modal===1} onClick={()=>setModal(1)}>방명록 쓰기</MenuButton>
    </MenuDom>
    <ModalDom>{modal === 0 ? <ViewGuestModal/> : <PostGuestModal/>}</ModalDom>
  </AppDom>
}

export default App;

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const MenuButton = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "#2AC7AF" : "#E5DBCE")};
  color: white;
  font-size: 15px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
`;

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;
