import React from 'react'
import styled from 'styled-components'

const StartButton = ({setStart, getQuestion}) => {
  return (
    <ContentBox>
      <Button onClick={() => [setStart(1), getQuestion(0)]}>시작하기</Button>
    </ContentBox>
  )
}

export default StartButton

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;