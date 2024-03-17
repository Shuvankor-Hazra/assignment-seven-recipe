import PropTypes from "prop-types";

const Table = ({ item, index, handleCooking }) => {
  const { recipe_name, preparing_time, calories } = item;

  return (
    <div>
      <ul className="border-b-2 py-2 flex items-center">
        <li className="w-1/12">{index + 1}.</li>
        <li className="w-4/12">{recipe_name}</li>
        <li className="w-2/12">{preparing_time} Minutes</li>
        <li className="w-2/12">{calories} Calories</li>
        <button
          onClick={()=>handleCooking(item)}
          className="w-3/12 btn bg-[#A5DD9B] rounded-3xl"
        >
          Preparing
        </button>
      </ul>
    </div>
  );
};

Table.propTypes = {
  item: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  handleCooking: PropTypes.func.isRequired,
};

export default Table;
