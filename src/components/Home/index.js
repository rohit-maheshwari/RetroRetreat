import React from "react";

// Components
import { Wrapper, Pun } from "../Home/Home.styles";
import News from "../News";

// Images
import retroRocket from "../../images/retroRocket.png";

const Home = () => {
  return (
    <Wrapper>
      <img class="home" src={retroRocket}/>
      <Pun>A Blast to the Past</Pun>
    </Wrapper>
  );
}


export default Home;
