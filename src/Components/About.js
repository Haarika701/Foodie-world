import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutWindowStyled>
      <AboutTitleStyle src="https://images.cooltext.com/5561192.png" />
      <AboutParagraphStyle>
        "When we first started our Journey into the culinary field. The
        terminology alone and all the different types of techniques scared us.
        <br></br>
        <br></br>
        However, we envisioned a beginner friendly environment that also brought
        experienced chefs to come and give input for from their experiences.
        <br></br>
        <br></br>
        After a few months, we were finally able to set up this app to share
        with everyone."
      </AboutParagraphStyle>
    </AboutWindowStyled>
  );
}

export default About;

// const AboutStyled = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   background-image: url(https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1500/posts/29319/final_image/fon.jpg);
//   background-size: 100% p {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-text: center;
//     margin-top: 100px;
//     margin-left: 200px;
//     margin-right: 200px;
//   }
// `;

const AboutTitleStyle = styled.img`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 300px;
  font-family: "Zen Antique", serif;
`;

const AboutParagraphStyle = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 200px;
  margin-left: 350px;
  margin-right: 300px;
  margin-top: 100px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Zen Antique", serif;
`;

const AboutWindowStyled = styled.div`\
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1500/posts/29319/final_image/fon.jpg);
  background-size: 100%;
  height: 500px
  border: 10px solid orange;
  width: auto;
  margin-top: 10px;
  margin-bottom: 200px;
  font-family: 'Zen Antique', serif;

`;
