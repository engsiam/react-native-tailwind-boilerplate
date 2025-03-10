import { axiosInstance } from "@/utils";

// Sign Up Api Function
export const SignUpApi = async (body) => {
  try {
    const response = await axiosInstance.post("/auth/register", body);
    return response.data;
  } catch (error) {
    throw new Error("Failed to Sign Up Api");
  }
};

// Sign In Api Function
export const SignInApi = async (body) => {
    try {
      const response = await axiosInstance.post("/auth/login", body);
      return response.data;
    } catch (error) {
      throw new Error("Failed to Sign Up Api");
    }
  };