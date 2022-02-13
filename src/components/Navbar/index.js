import React from "react";

// Component
import Button from "../Button";

// Styles
import { Wrapper } from "./Navbar.styles";

const Navbar = ({ buttons }) => {
  return (
    <Wrapper>
      {buttons.map((button) => {
        console.log(button.callback);
        return <Button text={button.text} callback={button.callback} />;
      })}
    </Wrapper>
  );
};

export default Navbar;
