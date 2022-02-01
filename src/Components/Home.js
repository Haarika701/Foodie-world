import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <StyledHomeImage
        src="https://www.maisondepax.com/wp-content/uploads/2019/08/modern-farmhouse-kitchen-fall-decor-15.jpg"
        alt="Welcome"
      />

      <ParaStyled>
        <StyledParagraphString>
          "Welcome to the Fall Foodie Blog. Here you can have a seat, and sit
          back as you gloss over the many recipes that are clearly laid out in
          diet friendly categories, and even beginner friendly difficulties. You
          can also feel free to submit a recipe using our Recipe Form! We hope
          you'll enjoy your stay and pick something to try tonight, or for an
          event!"
        </StyledParagraphString>
      </ParaStyled>
    </div>
  );
}

export default Home;

const StyledHomeImage = styled.img`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }
`;

const ParaStyled = styled.p`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 30px;
  font-weight: bold;
  margin-right: 340px;
  margin-left: 340px;
  margin-top: -550px;
  opacity: 2.5;
`;

const StyledParagraphString = styled.div`
  background-image: url(https://wallpaperaccess.com/full/3872532.jpg);
  background-size: 100%;
  opacity: 0.85;
  position: absolute;
  margin-right: 600px;
  background-color: orange;
  font-family: "Zen Antique", serif;
`;
