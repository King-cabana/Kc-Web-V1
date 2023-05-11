import axios from "axios";

const API_URL = "https://api.kingcabana.com/eventuser/";
export const API_URL_2 = "https://api.kingcabana.com/";
// export const API_URL_2 = "http://localhost:8080/";
const register = async (payload) => {
  try {
    const response = await axios.post(
      API_URL + "create",
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

const verifyEmail = async (otp) => {
  try {
    const response = await axios.put(
      API_URL + "verify-email",
      {
        otp,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (otp === response.data.otp) {
      return response.data;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password, final = () => null) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await axios.post(
      API_URL_2 + "login",
      {
        email,
        password,
      },
      {
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.data) {
      localStorage.setItem("user", JSON.stringify(response.data.data));
    }
    const authorizationHeader = response.headers.get("Authorization");
    const bearerToken = authorizationHeader.split(" ")[1];
    localStorage.setItem("bearerToken", bearerToken);

    return response;
  } catch (error) {
    throw error;
  } finally {
    final();
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      API_URL_2 + "forgot-password",
      {
        email,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data.accessToken) {
      localStorage.getItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const forgotPasswordOtp = async (otp) => {
  try {
    const response = await axios.get(`${API_URL_2}verify-otp?otp=${otp}`);
    if (otp === response.data.otp) {
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (password, confirmPassword, otp) => {
  try {
    const response = await axios.post(
      API_URL_2 + "reset-password",
      {
        password,
        confirmPassword,
        otp,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data.accessToken) {
      localStorage.getItem("user", JSON.stringify(response.data));
    }
    console.log(response.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

export {
  register,
  verifyEmail,
  login,
  forgotPassword,
  forgotPasswordOtp,
  resetPassword,
  logout,
};
