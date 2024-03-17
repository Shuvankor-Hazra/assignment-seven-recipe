
import PropTypes from 'prop-types';

import Card from "../Card/Card";

const Cards = ({recipes, handleClick}) => {
  // console.log(recipes)
  return (
    <div className="lg:w-7/12 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        recipes.map((recipe) => <Card key={recipe.recipe_id} recipe={recipe} handleClick={handleClick}></Card>)
      }
    </div>
  );
};

Cards.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Cards;
