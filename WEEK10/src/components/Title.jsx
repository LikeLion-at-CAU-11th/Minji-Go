import React from 'react'
import styled from "styled-components";

const Title = () => {
  return (
    <TitleDom>
      <TitleLogo className='TitleLogo' src='img/likelion.png'/>
      <TitleTextSection>
        <TitleText>후롱트 고민지</TitleText>
        <TitleText>10주차 과제💨💨</TitleText>
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
  align-items: start;
  margin-top: 10px;
`;

const TitleText = styled.div`
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
`
