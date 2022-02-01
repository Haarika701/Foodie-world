import React from "react";
import RecipeCard from "./RecipeCard";
import { Card, Grid } from "semantic-ui-react";

function RecipeContainer({ allRecipes }) {
  const displayRecipe = allRecipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return (
    <Grid>
      <Card.Group>{displayRecipe}</Card.Group>
    </Grid>
  );
}

export default RecipeContainer;
