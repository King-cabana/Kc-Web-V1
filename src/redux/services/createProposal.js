import axios from "axios";

const API_URL = "http://localhost:8080/";
export const createProposal = async (data, token) => {
  console.log(data);
  try {
    const response = await axios.post(API_URL + "general-proposals", data, {
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

export default createProposal;
