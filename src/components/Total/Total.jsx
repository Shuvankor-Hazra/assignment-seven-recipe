import PropTypes from "prop-types";

const Total = ({totalTime,totalCalories}) => {
    return (
        <div className="text-center space-y-4 border-t-2 pt-4">
            <div>Total Time = {totalTime} minutes</div>
            <div>Total Calories = {totalCalories} calories</div>
        </div>
    );
};


Total.propTypes = {
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired
  };

export default Total;