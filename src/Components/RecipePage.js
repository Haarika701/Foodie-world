import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AddNewRecipe from "./AddNewRecipe";
import RecipeContainer from "./RecipeContainer";
import SearchRecipes from "./SearchRecipes";
import SortRecipes from "./SortRecipes";
import styled from "styled-components";

function RecipePage() {
  const [allRecipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("All");
  const [displayLevel, setDisplayLevel] = useState("Level");

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(sortBy);
  const categoriesToDisplay = allRecipes.filter(
    (recipe) => recipe.category === sortBy || sortBy === "All"
  );

  //const difficultyfilter = categoriesToDisplay.filter((recipe) =>  console.log(displayLevel));
  //displayLevel === "All" || (recipe.difficulty && recipe.difficulty === displayLevel));

  const filteredRecipes = categoriesToDisplay.filter(
    (recipe) =>
      recipe.title && recipe.title.toLowerCase().includes(search.toLowerCase())
  ); //to search recipes
  return (
    <>
      <Switch>
        <Route path="/Recipes/AddNewRecipes">
          <AddNewRecipe setRecipes={setRecipes} />
        </Route>
        <Route exact path="/Recipes">
          <StyledSortBy>
            <SortRecipes
              sortBy={sortBy}
              onChangeSortBy={setSortBy}
              //recipe={categoriesToDisplay}
              displayLevel={displayLevel}
              onChangeDisplayBy={setDisplayLevel}
            />
          </StyledSortBy>

          <StyledSearchBar>
            <StyledSearchHeader>Search</StyledSearchHeader>
            <SearchRecipes search={search} setSearch={setSearch} />
          </StyledSearchBar>
          <RecipeContainer allRecipes={filteredRecipes} />
        </Route>
      </Switch>
    </>
  );
}
export default RecipePage;

const StyledSearchBar = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSortBy = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 20px;
`;

const StyledSearchHeader = styled.h1`
  color: white;
`;
