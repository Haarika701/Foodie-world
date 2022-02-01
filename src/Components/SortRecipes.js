import { Segment } from "semantic-ui-react";
import styled from "styled-components";

function SortRecipes({
  sortBy,
  onChangeSortBy,
  onChangeDisplayBy,
  displayLevel,
}) {
  //console.log(sortBy+'   '+displayLevel)
  function handleChangeSortBy(event) {
    //console.log(event.target.name) ;

    onChangeSortBy(event.target.value);
    onChangeDisplayBy(event.target.value);
  }
  // function handleChangeDisplayBy(e){
  //   onChangeDisplayBy(e.target.value)
  // }
  return (
    <Segment.Group vertical>
      <SortContainer>
        <label>
          <div class="card-form">
            <div class="card-form-group">
              <StyledCategoryTitle className="heading">
                Category
              </StyledCategoryTitle>
              <select
                name="category"
                onChange={handleChangeSortBy}
                value={sortBy}
              >
                <option value="All">All</option>
                <option value="Vegan">Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Meat">Meat</option>
              </select>

              {/* <label>
    <label>
    <div className="card-form">
    <div className="card-form-group">
    <div className="ui vertical segments"><div className="ui segment">
    <div className="heading">Category</div>
    <select name="category"  onChange = {handleChangeSortBy} value = {sortBy}>  
    <option value="All">All</option>
    <option value="Vegan">Vegan</option>
    <option value="Vegetarian">Vegetarian</option>
    <option value="Meat">Meat</option>
    </select>
      
      {/* <label>
        <div className="heading">Difficulty</div>
        <select name="difficulty" onChange = {handleChangeSortBy} value = {displayLevel}>
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label> */}
            </div>
          </div>
        </label>
      </SortContainer>
    </Segment.Group>
  );
}

export default SortRecipes;

const SortContainer = styled.div`
  .card-form {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    align-content: space-around;
    position: relative;
    font-family: "Zen Antique", serif;
  }
`;

const StyledCategoryTitle = styled.h1`
  color: white;
`;

// .card-form {
//   display: flex;
//   align-items: flex-end;
//   flex-wrap: wrap;
//   align-content: space-around;
// }
// `;
