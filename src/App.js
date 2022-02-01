import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import RecipePage from "./Components/RecipePage";
import styled from "styled-components";

function App() {
  return (
    <StyleNavBar>
      <AppStyled className="App">
        <header className="App-header">
          <StyledTitleImage src="https://images.cooltext.com/5561186.png" />

          <StyleNavBar>
            <Navbar />
          </StyleNavBar>
          <CenterHome>
            <Route path="/Home">
              <Home />
            </Route>
          </CenterHome>
          <Route path="/About">
            <About />
          </Route>

          <RecipePage />
        </header>
      </AppStyled>
    </StyleNavBar>
  );
}

export default App;

const StyleNavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(https://thumbs.gfycat.com/ThisHeavyCondor-max-1mb.gif);
  background-size: 100%;
`;

const AppStyled = styled.div`
  background-image: url(https://img.wallpapic.com/i5595-221-135/medium/textures-wooden-hardwood-varnish-wallpaper.jpg);
  background-size: 120%;
  // background-image: url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/autumn-frame-background-colourful-leaves-michal-bednarek.jpg);
  background-size: cover;
  width: 2000px;
  height: 100%;
  padding: 20px;
  margin: center;
  margin-bottom: 1000px;
`;

const CenterHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitleImage = styled.img`
  display: flex;
  justify-content: center;
  background-image: url(https://thumbs.gfycat.com/ThisHeavyCondor-max-1mb.gif);
  background-size: 80%;
  margin: auto;
  height: 100%;
`;


