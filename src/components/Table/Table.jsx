import PropTypes from "prop-types";

const Table = ({ item, index }) => {
  console.log(item);

  const { recipe_name } = item;

  return (
    <div>
      <ul className="border-b-2 py-2 flex items-center justify-center  ">
        <li className="w-1/12 ">{index + 1}.</li>
        <li className="w-5/12">{recipe_name}</li>
        <li className="w2/12">20 Minutes</li>
        <li className="w-2/12">600 Calories</li>
        <li className="w-2/12 btn bg-[#A5DD9B] rounded-3xl">Ready</li>
      </ul>
    </div>
  );
};

Table.propTypes = {
  item: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};

export default Table;
