import { POPULAR_BASE_URL, API_KEY } from "./config";

const apiSettings = {
  fetchNews: async (category, page) => {
    const endpoint = category
      ? `${POPULAR_BASE_URL}&category=${category}&apiKey=${API_KEY}`
      : `${POPULAR_BASE_URL}&apiKey=${API_KEY}`;
    console.log(endpoint);
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
