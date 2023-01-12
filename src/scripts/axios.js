export const axiosInstance = axios.create({
  baseUrl: "http://localhost:6278/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
