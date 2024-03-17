import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Cook from "../Cook/Cook";
import toast from "react-hot-toast";

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  const [wantCook, setWantCook] = useState([])

  const [currentCooking, setCurrentCooking] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleClick = (recipe) => {

    const alreadyExist = wantCook.find(r => r.recipe_id === recipe.recipe_id);

    if(!alreadyExist){
      setWantCook(r => [...r, recipe])
    } else {
      return toast.error('Already exist')
    }
  };


  const handleCooking = (item) => {
    setCurrentCooking([...currentCooking, item])
    const nextItem = wantCook.filter((c) => c.recipe_id !== item.recipe_id);
    setWantCook(nextItem);

    const itemTime = item.preparing_time
    setTotalTime(totalTime + itemTime)

    const itemCalories = item.calories
    setTotalCalories(totalCalories + itemCalories)

  }







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
        <Cook wantCook={wantCook} handleCooking={handleCooking} currentCooking={currentCooking} totalTime={totalTime} totalCalories={totalCalories}></Cook>
      </div>
    </div>
  );
};


export default Recipes;
