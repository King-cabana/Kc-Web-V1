import axios from "axios";
import { toast } from "react-toastify";
import { API_URL_2 } from "../../../redux/services/authService";

export const fetchEvent = async (id) => {
  console.log(id);
  try {
    const { data } = await axios.get(API_URL_2 + `histories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    throw error;
  }
};
