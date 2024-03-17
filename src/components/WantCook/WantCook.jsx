import PropTypes from "prop-types";

import Table from "../Table/Table";

const WantCook = ({ wantCook }) => {
  console.log(wantCook);
  return (
    <div className="py-6 text-center">
      <div className="text-2xl pb-5 border-b-2">
        Want to Cook: {}
      </div>

      <div className="pt-6">
        <div className="text-left">
            <ul className="flex justify-between">
              <li>SL</li>
              <li>Name</li>
              <li>Time</li>
              <li>Calories</li>
              <li>Processing</li>
            </ul>
          <div className="divider mb-0"></div>
          {wantCook.map((item, index) => (
            <Table key={item.recipe_id} item={item} index={index}></Table>
          ))}
        </div>
      </div>
    </div>
  );
};

WantCook.propTypes = {
  wantCook: PropTypes.array.isRequired,
};

export default WantCook;
