import { useState, useEffect } from "react";

import API from "../API";

const initialState = {
  total_results: 0,
  total_pages: 0,
  page: 0,
  articles: [],
};

export const useNewsFetch = () => {
  const [category, setCategory] = useState("");
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (category = "", page) => {
    try {
      const news = await API.fetchNews(category, page);

      setState((prev) => ({
        ...prev,
        articles: news.articles,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Initial load
  useEffect(() => {
    setState(initialState);
    fetchNews(category, 1);
  }, [category]);

  return { state, loading, error, category, setCategory };
};
