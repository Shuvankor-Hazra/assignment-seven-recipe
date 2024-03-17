import WantCook from '../WantCook/WantCook';
import CurrentCook from '../CurrentCook/CurrentCook';
import PropTypes from "prop-types";
import Total from '../Total/Total'

const Cook = ({wantCook, handleCooking,currentCooking, totalTime, totalCalories}) => {
    // console.log(currentCooking)
    return (
        <div className='lg:w-5/12 border-2 rounded-2xl p-2 lg:p-5 mt-5 lg:mt-0'>
            <WantCook wantCook={wantCook} handleCooking={handleCooking}></WantCook>
            <CurrentCook currentCooking={currentCooking}></CurrentCook>
            <Total totalTime={totalTime} totalCalories={totalCalories}></Total>
        </div>
    );
};


Cook.propTypes = {
    wantCook: PropTypes.array.isRequired,
    handleCooking: PropTypes.func.isRequired,
    currentCooking: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired
};

export default Cook;