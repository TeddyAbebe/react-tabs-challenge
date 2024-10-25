import axios from "axios";

export const fetchTabContent = async () => {
  const response = await axios.get(
    "https://thingproxy.freeboard.io/fetch/https://loripsum.net/api/3/plaintext"
  );

  return response.data;
};
