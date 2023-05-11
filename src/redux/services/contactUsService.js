import axios from "axios";
import { API_URL_2 } from "./authService";

const contactUs = async (payload) => {
  try {
    const { data } = await axios.post(
      API_URL_2 + "contact-us/create",
      {
        ...payload,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export { contactUs };
