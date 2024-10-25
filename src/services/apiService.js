import axios from "axios";

export const fetchTabContent = async () => {
  const response = await axios.get("/api/3/plaintext");

  return response.data;
};
