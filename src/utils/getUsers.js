import axios from "axios";
import { apiPaths, baseUrl } from "../paths";
import toast from "react-hot-toast";

export const getPendingUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl + apiPaths.get_pending_users}`);
    if (response.status !== 200) {
      toast.error("Network Error!");
    }
    return response.data;
  } catch (error) {
    toast.error("Network Error!Error fetching pending users");
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl + apiPaths.get_all_users}`);
    if (response.status !== 200) {
      toast.error("Network Error!");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching pending users:", error);
    toast.error("Network Error!Error fetching users");
    throw error;
  }
};
