import React from "react";
import { Input, Segment } from "semantic-ui-react";

function SearchRecipes({ search, setSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <Segment compact>
      <Input>
        <form className="searchbar" onSubmit={handleSubmit}>
          <div className="ui input">
            <input
              type="text"
              placeholder="Search Recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <hr></hr>
          </div>
          <button type="submit">🔍</button>
        </form>
      </Input>
    </Segment>
  );
}

export default SearchRecipes;
