import React, { useEffect, useState } from "react";
import { getMyPage } from "../apis/mypage";

const Mypage = () => {
  const [data, setData] = useState(); // access토큰으로 가져온 data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
      setLoading(false);
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
