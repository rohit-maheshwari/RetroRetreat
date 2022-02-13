// Configuration for newsAPI

const API_URL = "https://newsapi.org/v2/";
const API_KEY =
  "e665a7fb47ce47bf800d711aba8d7795"; /*process.env.REACT_APP_API_KEY*/

const POPULAR_BASE_URL = `${API_URL}top-headlines?country=us`;
// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;

export { POPULAR_BASE_URL, API_URL, API_KEY, REQUEST_TOKEN_URL };
