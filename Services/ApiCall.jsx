import axios from "axios";
import { base_url } from "./Base_URL";
import { Show_Toast } from "../src/Utils/Toast";



export const ApiCall = async (
  method,
  endPoint,
  data,
  params,
  content_type,

) => {
  let token= localStorage.getItem("User")
  try {
   
    const res = await axios({
      method: method,
      url: `${base_url}${endPoint}`,
      data: data,
      params: params,
      headers: {
        "Content-Type": content_type ?? "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log(res);
    return {
      status: res?.status,
      data: res.data?.data,
      message: res.data?.message || "",
    };
  } catch (error) {
    Show_Toast(error.response ? error.response.data.message : 'Internal Server Error')
    return error;
  }
};
