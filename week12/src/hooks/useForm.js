import { useState } from "react";

// 커스텀훅의 이름은 무조건 use로 시작
export const useForm = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
