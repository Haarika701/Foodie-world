import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "semantic-ui-react";

const initialValue = {
  title: "",
  calories: 0,
  instructions: "",
  category: "",
  image: "",
  difficulty: "",
};

function AddNewRecipe({ setRecipes }) {
  const [newRecipe, setNewRecipe] = useState(initialValue);

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setNewRecipe((currentRecipes) => {
      return { ...currentRecipes, [e.target.name]: e.target.value };
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    fetch("http://localhost:4000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // newRecipe(initialValue)
        setRecipes((currentRecipes) => [...currentRecipes, data]);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <WholeFormStyled>
        <h1>New Recipe Form</h1>
        <span>
          <label>
            <h4>Recipe Name</h4>
            <input
              type="text"
              name="title"
              placeholder="Recipe Name..."
              value={newRecipe.title}
              onChange={handleForm}
            />
          </label>
          <br></br>
          <label>
            <h4>Calories</h4>
            <input
              type="number"
              name="calories"
              step="10.00"
              value={newRecipe.calories}
              onChange={handleForm}
            />
          </label>
          <br></br>
          <label>
            <h4>Instructions</h4>
            <input
              type="text"
              name="instructions"
              placeholder="Instructions..."
              value={newRecipe.instructions}
              onChange={handleForm}
            ></input>
          </label>
          <br></br>

          <label>
            <h4>Category</h4>
            <input
              type="text"
              name="category"
              value={newRecipe.category}
              placeholder="Meat / Vegetarian / Vegan"
              onChange={handleForm}
            ></input>
          </label>

          <br></br>

          <label>
            <h4>Image URL</h4>
            <input
              type="text"
              name="image"
              placeholder="URL..."
              value={newRecipe.image}
              onChange={handleForm}
            ></input>
          </label>

          <br></br>

          <label>
            <h4>Difficulty</h4>
            <input
              type="text"
              name="difficulty"
              placeholder="Easy / Medium / Hard"
              value={newRecipe.difficulty}
              onChange={handleForm}
            ></input>
          </label>

          <br></br>

          <button type="submit">Submit your recipe,Foodie!</button>
        </span>
      </WholeFormStyled>
    </Form>
  );
}

export default AddNewRecipe;

const WholeFormStyled = styled.div`
  body {
    background-color: #484848;
    margin: 0;
    padding: 0;
    font-family: "Zen Antique", serif;
  }
  h1 {
    text-align: center;
    font-family: "Zen Antique", serif;
    color: gold;
  }

  h4 {
    color: gold;
    font-family: "Zen Antique", serif;
  }
  Form {
    width: 50px;
    margin: 0 auto;
    font-family: "Zen Antique", serif;
  }

  .button {
    top: 40px;
    bottom: 40px;
    font-family: "Zen Antique", serif;
  }
`;
