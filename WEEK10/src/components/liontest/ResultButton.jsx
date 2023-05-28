import React from 'react'
import styled from 'styled-components'

const ResultButton = ({fetchTestResult, setStart}) => {
  
  return (
    <ContentBox>
      <Button onClick={() => [fetchTestResult(), setStart(3)]}>결과 보기</Button>
    </ContentBox>
  )
}

export default ResultButton

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%
  height: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: black;
  background-color: #FFF4EF;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 150px;
`;