import axios from "axios";

// const API_URL_3 = "http://localhost:8081/attendee/";
const API_URL_3 = "http://localhost:8081/attendee/";

const guestRegister = async (payload) => {
  try {
    const response = await axios.post(
      API_URL_3 + "register",
      {
        ...payload,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { guestRegister };
