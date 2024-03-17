import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Cook from "../Cook/Cook";
import PropTypes from "prop-types";

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  const [wantCook, setWantCook] = useState([])

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);



  const handleClick = (recipe) => {
    setWantCook(r => [...r, recipe])
    // console.log(recipe)
  };

  return (
    <div>
      <div className="text-center w-full md:w-[800px] mx-auto space-y-5 my-12">
        <h2 className="text-2xl lg:text-4xl font-semibold">Our Recipes</h2>
        <p>
          Explore our diverse collection of recipes, ranging from traditional
          favorites to innovative creations, ensuring there is something
          delightful for everyone palate.
        </p>
      </div>
      <div className="mb-24 lg:flex gap-5">
        <Cards recipes={recipes} handleClick={handleClick}></Cards>
        <Cook wantCook={wantCook}></Cook>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Recipes;
