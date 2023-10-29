import axios from "axios";

const API_URL_2 = "https://kc-backend-systest.onrender.com/histories/";
export const createEventHistory = async (data, token) => {
  console.log(data);
  try {
    const response = await axios.post(API_URL_2 + "create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default createEventHistory;
