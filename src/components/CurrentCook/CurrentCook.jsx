import Table2 from "../Table/Table2";
import PropTypes from "prop-types";

const CurrentCook = ({currentCooking}) => {
  return (
    <div className="py-8 text-center">
      <div className="text-2xl font-semibold pb-5 border-b-2">Current Cooking: <span> {currentCooking.length} </span></div>
      <Table2 currentCooking={currentCooking}></Table2>
    </div>
  );
};



CurrentCook.propTypes = {
  currentCooking: PropTypes.array.isRequired
};



export default CurrentCook;
