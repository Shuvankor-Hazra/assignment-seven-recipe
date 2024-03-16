
import PropTypes from 'prop-types';

import Card from "../Card/Card";

const Cards = ({recipes}) => {
  return (
    <div className="lg:w-4/6 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        recipes.map(recipe => <Card key={recipe.id} recipe={recipe}></Card>)
      }
    </div>
  );
};

Cards.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Cards;
