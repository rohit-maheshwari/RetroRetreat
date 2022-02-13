import React from "react";

// Components
import Article from "./Article";
import Grid from "./Grid";

// Hook
import { useNewsFetch } from "../hooks/useNewsFetch";

const News = () => {
  const { state, loading, error, category, setCategory } = useNewsFetch();

  console.log(state);

  return (
    <Grid>
      {state.articles.map((article, index) => {
        console.log(article);
        return (
          <Article
            key={index}
            name={article.source.name}
            author={article.author}
            title={article.title}
            description={article.description}
            img={article.urlToImage}
            url={article.url}
            content={article.content}
          ></Article>
        );
      })}
    </Grid>

    /*
      [id, name],
  author,
  title,
  description,
  urlToImage,
  content
  */
  );
};

export default News;
