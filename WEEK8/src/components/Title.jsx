import React from 'react'
import styled from "styled-components";

const Title = () => {
  return (
    <TitleDom>
      <TitleLogo className='TitleLogo' src='img/likelion.png'/>
      <TitleTextSection>
        <TitleFirstText>멋쟁이사자처럼</TitleFirstText>
        <TitleFirstText>🍀 방명록 🍀</TitleFirstText>
        <TitleSecondText>프론트 고민지 & 백 민병록</TitleSecondText>
      </TitleTextSection>
    </TitleDom>
  )
}

export default Title

const TitleDom = styled.div`
  display: flex;
  flex-basis: 10%;
  width : 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const TitleLogo = styled.img`
  width: 80px;
  margin-right: 15px
`;

const TitleTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TitleFirstText = styled.div`
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const TitleSecondText = styled.div`
  font-size: 15px;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
`
