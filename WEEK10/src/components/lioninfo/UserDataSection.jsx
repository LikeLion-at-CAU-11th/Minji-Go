import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import { getUserPerPage, getUserPerGender, getUserPerStack } from '../../apis/lioninfo';

const UserDataSection = () => {
  const [userData, setUserData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const urlParamsObj = new URL(window.location.href);
  const urlParams = urlParamsObj.searchParams;
  const category = urlParams.get("category");
  const page = urlParams.get("page");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (category === "all") {
          response = await getUserPerPage(page);
        } else if (category === "male" || category === "female") {
          response = await getUserPerGender(category);
        } else if (category === "frontend" || category === "backend" || category === "design" || category === "pm") {
          response = await getUserPerStack(category);
        } else {
          // Handle invalid category
          return;
        }
        setUserData(response.data.data);
      } catch (error) {
        console.error("데이터 패칭 에러", error);
      }
    };

    fetchData();
  }, [category,page]);

  return (
    <Dom>
      {userData && userData.map((user, i) => <UserCard key={i} user={user} />)}
    </Dom>
  );
};

export default UserDataSection;

const Dom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  overflow: scroll;
  padding: 0 20px;
  min-height: 400px;
`;
