import axios from "axios";
import { apiPaths, baseUrl } from "../paths";
import toast from "react-hot-toast";

export const approveUser = async (email, setLoading, setUpdateFlag) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${baseUrl + apiPaths.update_user_status}?email=${email}&status=approve`
    );
    if (response.status === 200) {
      toast.success("User Approved Successfully!");
      setUpdateFlag((prev) => !prev);
    } else {
      toast.error("There was some error executing your request. Try Again!");
    }
  } catch (error) {
    toast.error("There was some error executing your request. Try Again!");
    throw error;
  }
};
export const unApproveUser = async (email, setLoading, setUpdateFlag) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${baseUrl + apiPaths.update_user_status}?email=${email}&status=pending`
    );
    if (response.status === 200) {
      toast.success("User Un-Approved Successfully!");
      setUpdateFlag((prev) => !prev);
    } else {
      toast.error("There was some error executing your request. Try Again!");
    }
  } catch (error) {
    toast.error("There was some error executing your request. Try Again!");
    throw error;
  }
};

export const deleteUser = async (email, setLoading, setUpdateFlag) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${baseUrl + apiPaths.delete_user}?email=${email}`
    );
    if (response.status === 200) {
      toast.success("User Deleted Successfully!");
      setUpdateFlag((prev) => !prev);
    } else {
      toast.error("There was some error executing your request. Try Again!");
    }
  } catch (error) {
    toast.error("There was some error executing your request. Try Again!");
    throw error;
  }
};
