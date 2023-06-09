import axios from "axios";
import { store } from "../../store";

const API_URL_2 = "http://localhost:8081/proposals/";
export const createProposal = async(data, token) => {
    console.log(data)
  try {
    const response = await axios.post(
        API_URL_2 + "create",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // store.dispatch(addProposal(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default createProposal;