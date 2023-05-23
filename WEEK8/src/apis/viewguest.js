import axios from "axios";

export const baseUrl = `http://bangmyeonglock.kro.kr:8000/posts`;

export const getAllPost = () =>{
    try {
        return axios.get(`${baseUrl}/`);
    } catch (error) {
        console.log("get 실패 에러:", error);
    }
}

export const getSinglePost = (id) =>{
    return axios.get(`${baseUrl}/${id}/`);
}

export const deletePost = async (id) => {
  try {
    const confirmed = window.confirm("삭제하시겠습니까?");
    if(confirmed){
      await axios.delete(`${baseUrl}/${id}/`);
      alert("🦁삭제 완료🦁");
      window.location.reload();
    }
  } catch (error) {
    console.log("delete 실패 에러:", error);
  }
};