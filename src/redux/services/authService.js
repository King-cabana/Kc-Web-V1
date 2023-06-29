import axios from "axios";

// const API_URL = "http://localhost:8081/eventuser/";
const API_URL = "http://localhost:8081/eventuser/";
// export const API_URL_2 = "http://localhost:8081/";
export const API_URL_2 = "http://localhost:8081/";
export const GOOGLE_URL = "http://localhost:8081/login/google";

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
    const authHeader = response.headers.get("Authorization");
    const userToken = authHeader.split(" ")[1];
    // console.log(vToken);
    localStorage.setItem("userToken", userToken);
    return response;
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
    const userToken = authorizationHeader.split(" ")[1];
    localStorage.setItem("userToken", userToken);

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

const googleSignIn = async (user) => {
  try {
    const { email, googleId, familyName, givenName, imageUrl } = user;
    const payload = {
      email,
      googleId,
      familyName,
      givenName,
      imageUrl,
      isVerified: true,
    };
    const response = await axios.post(
      "http://localhost:8081/login/google",
      payload
    );
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    console.error("Request error:", error);
    // throw error;
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
  googleSignIn,
  logout,
};
