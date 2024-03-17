import PropTypes from "prop-types";

const Total = ({ totalTime, totalCalories }) => {
  return (
    <div className="text-xl font-bold text-center space-y-5 border-t-2 p-6">
      <div>
        <h2>
          Total Time ={" "}
          <span>{totalTime}</span> Minutes
        </h2>
      </div>
      <div>
        <h2>
          Total Calories ={" "}
          <span>{totalCalories}</span>{" "}
          Calories
        </h2>
      </div>
    </div>
  );
};

Total.propTypes = {
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default Total;
