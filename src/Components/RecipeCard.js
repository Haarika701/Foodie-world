import { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";
import styled from "styled-components";

function RecipeCard({
  recipe: { title, category, calories, image, instructions, difficulty },
}) {
  const [toggleInstructions, setToggleinstructions] = useState(true);

  function toggleClick() {
    setToggleinstructions((toggleInstructions) => !toggleInstructions);
    console.log("its clicked");
  }

  return (
    <div className="ui raised card">
      <div className="content">
        <RecipeStyle>
          <Card.Header>
            <h3>{title}</h3>
          </Card.Header>

          {toggleInstructions ? (
            <img src={image} alt="" width="250px" onClick={toggleClick} />
          ) : (
            <Card.Description>
              <p onClick={toggleClick}>{instructions}</p>
            </Card.Description>
          )}

          <h4>
            <Icon name="food" />
            Category:{category}
          </h4>

          <h4>
            <Icon name="heartbeat" />
            Calories:{calories}
          </h4>

          <h4>
            <Icon name="time" />
            Difficulty:{difficulty}
          </h4>

          <Rating icon="heart" defaultRating={0} maxRating={5} />
          <div class="ui heart rating" role="radiogroup"></div>
        </RecipeStyle>
      </div>
    </div>
  );
}

export default RecipeCard;

const RecipeStyle = styled.div`
  .content {
    font-family: "Zen Antique", serif;
  }

  h4 {
    font-family: "Zen Antique", serif;
  }
  h3 {
    font-family: "Zen Antique", serif;
  }
`;
