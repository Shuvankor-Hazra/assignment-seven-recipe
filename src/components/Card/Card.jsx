import { FaRegClock } from "react-icons/fa";
import { ImFire } from "react-icons/im";
import PropTypes from "prop-types";

const Card = ({recipe, handleClick}) => {
  // console.log(recipe)
  const {
    recipe_image,
    recipe_name,
    short_description,
    preparing_time,
    calories,
  } = recipe;
  const ingredients = recipe.ingredients;


  return (
    <div className="card w-full border-2 p-6">
      <img
        className="rounded-2xl mb-6 h-[200px]"
        src={recipe_image}
        alt="Food"
      />
      <div className="text-left">
        <h2 className="card-title">{recipe_name}</h2>
        <p className="text-[#878787] py-4">{short_description}</p>
        <div className="border-y-2 py-5 ">
          <h4>
            Ingredients: <span>{ingredients.length}</span>
          </h4>
          <ul className="list-disc pl-6 space-y-1 mt-2 text-[#878787]">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
          </ul>
        </div>
        <div className="flex gap-5 py-4">
          <div className="flex items-center gap-2">
            <FaRegClock></FaRegClock> <span>{preparing_time}</span>minutes
          </div>
          <div className="flex items-center gap-2">
            <ImFire></ImFire> <span>{calories}</span>calories
          </div>
        </div>
        <div className="card-actions">
          <button onClick={()=>handleClick(recipe)} className="btn bg-[#A5DD9B] rounded-3xl">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Card;
