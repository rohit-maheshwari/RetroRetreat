import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --red: #a50c35;
    --rose: #f90c71;
    --tan: #f1c232;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontGiant: 10rem;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    /* font-family: 'Times New Roman', Times, serif; */
    font-family: monospace;
    /* font-family: 'Abel', sans-serif; */
  }

  body {
    margin: 0;
    padding: 0;
    /* background-image: url('https://st4.depositphotos.com/4072575/i/600/depositphotos_201168982-stock-photo-deep-grey-paper-texture-simple.jpg'); */
    background-image: url('https://www.textures.com/system/gallery/photos/Paper/Crumpled/38226/PaperCrumpled0004_1_350.jpg');
    background-size: auto 15%;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--darkGrey);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--medGrey);
    }
    
    h4 {
      color: var(--darkGrey);
    }

    p {
      font-size: 1rem;
      //color: var();
    }
    
    img {
      width:75%;
    }

    .home {
      width: 10%;
    }
  }
`;
