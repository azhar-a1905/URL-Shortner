import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.response.use(
  (response) => {
    // You can add any response interceptors here if needed
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle different type of errors based on status code
      switch (error.response.status) {
        case 400:
          console.error("Bad Request: ", error.response.data);
          break;
        case 401:
          console.error("Unauthorized: ", error.response.data);
          break;
        case 404:
          console.error("Not Found: ", error.response.data);
          break;
        case 500:
          console.error("Internal Server Error: ", error.response.data);
          break;
        default:
          console.error("An unexpected error occurred: ", error.response.data);
      }
      return Promise.reject({
        status: error.response.status,
        message: error.response.data || "An error occurred",
        data: error.response.data,
      });
    }
  }
);

export default axiosInstance;
