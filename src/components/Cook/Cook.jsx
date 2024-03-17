import WantCook from '../WantCook/WantCook';
import CurrentCook from '../CurrentCook/CurrentCook';
import Total from '../Total/Total';
import PropTypes from "prop-types";

const Cook = ({wantCook}) => {
    // console.log(wantCook)
    return (
        <div className='border-2 rounded-2xl p-2 lg:p-5 mt-5 lg:mt-0'>
            <WantCook wantCook={wantCook}></WantCook>
            <CurrentCook></CurrentCook>
            <Total></Total>
        </div>
    );
};


Cook.propTypes = {
    recipe: PropTypes.array.isRequired,
    wantCook: PropTypes.array.isRequired
};

export default Cook;