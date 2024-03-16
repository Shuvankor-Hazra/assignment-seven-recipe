import Cards from "../Cards/Cards";
import Cook from "../Cook/Cook";
// import PropTypes from 'prop-types';

const Recipes = () => {
  return (
    <div className="">
      <div className="text-center w-full md:w-[800px] mx-auto space-y-5 my-12">
      <h2 className="text-2xl lg:text-4xl font-semibold">Our Recipes</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      </div>

      <div className="mb-24 lg:flex gap-5">
        <Cards></Cards>
        <Cook></Cook>
      </div>
    </div>
  );
};

// Recipes.propTypes = {};

export default Recipes;
