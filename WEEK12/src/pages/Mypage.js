import React, { useEffect, useState } from "react";
import { getMyPage } from "../apis/mypage";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [data, setData] = useState(); // access토큰으로 가져온 data
  const [loading, setLoading] = useState(true);
  const router = useNavigate();

  useEffect(() => {
    getMyPage()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // refresh 토큰 만료
          alert("재로그인 해주세요");
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          router("/");
        }
      });
  }, []);
  if (loading) return <div>로딩중 ...</div>;
  return (
    <div>
      {/* 옵셔널체이닝 */}
      <div>{data?.name}</div>
      <div>{data?.age}</div>
    </div>
  );
};

export default Mypage;
