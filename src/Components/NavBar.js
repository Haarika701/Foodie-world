import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function navBar() {
  return (
    <div>
      <StyledNavContainer>
        <StyledLinks>
          <TestNavLinkStyle to="/Home" className="navlink">
            Home
          </TestNavLinkStyle>
        </StyledLinks>
        <StyledLinks>
          <TestNavLinkStyle to="/About" className="navlink">
            About
          </TestNavLinkStyle>
        </StyledLinks>
        <StyledLinks>
          <TestNavLinkStyle to="/Recipes" className="navlink">
            Recipes
          </TestNavLinkStyle>
        </StyledLinks>
        <StyledLinks>
          <TestNavLinkStyle to="/Recipes/AddNewRecipes" className="navlink">
            Add New Recipes
          </TestNavLinkStyle>
        </StyledLinks>
      </StyledNavContainer>
    </div>
  );
}
export default navBar;
const StyledNavContainer = styled.ul`
  display: flex;
  color: yellow;
  font-weight: bold;
  flex-direction: row;
  border-top: 5px solid darkorange;
  border-bottom: 5px solid darkorange;
  border-left: 5px solid darkorange;
  border-right: 5px solid darkorange;
  background-color: #8e6600;
  background-size: 200%;
  font-family: "Zen Antique", serif;
`;
const StyledLinks = styled.li`
  display: flex;
  font-weight: bold;
  font-size: 30px;
  justify-content: space-around;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Zen Antique", serif;
`;

const TestNavLinkStyle = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: gold;
  font-family: "Zen Antique", serif;
`;
