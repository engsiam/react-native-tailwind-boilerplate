import axios from "axios";

const useRegister = () => {
    const register = async (data) => {
        try {
            return await axios.post("/auth/register", data);
        } catch (error) {
            return error.response;
        }
    }

    return {
        register,
    }
}

export default useRegister