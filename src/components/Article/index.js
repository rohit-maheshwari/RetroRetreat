import React from "react";
import { Wrapper } from "./Article.styles";
import no_image from "../../images/no_image.jpg";

const Article = ({ name, author, title, description, img, url, content }) => {
  return (
    <Wrapper>
      <section>
        <h1>{title}</h1>
        <h3>{author}</h3>
        {img && img != "null" ? (
          <img src={img} />
        ) : (
          <img style={({ height: "50%" }, { width: "50%" })} src={no_image} />
        )}
        <h4>{description}</h4>
        <p>
          {content}
          <a href={url} target="_blank">
            {" "}
            ...read more
          </a>
        </p>
      </section>
    </Wrapper>
  );
};

export default Article;
