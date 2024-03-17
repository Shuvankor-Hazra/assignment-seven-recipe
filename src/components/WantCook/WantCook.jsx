import PropTypes from "prop-types";

import Table from "../Table/Table";

const WantCook = ({ wantCook, handleCooking }) => {
  return (
    <div className="py-6">
      <div className="text-2xl font-semibold pb-5 border-b-2 text-center">
        Want to Cook: <span className="border-2 px-3 rounded-lg">{wantCook.length}</span>
      </div>
      <div className="pt-6">
        <ul className="flex">
          <li className="w-1/12">SL</li>
          <li className="w-4/12">Name</li>
          <li className="w-2/12">Time</li>
          <li className="w-5/12">Calories</li>
        </ul>
        <div className="divider mb-0"></div>
        {wantCook.map((item, index) => (
          <Table key={item.recipe_id} item={item} index={index} handleCooking={handleCooking}></Table>
        ))}
      </div>
    </div>
  );
};

WantCook.propTypes = {
  wantCook: PropTypes.array.isRequired,
  handleCooking: PropTypes.func.isRequired
};

export default WantCook;
