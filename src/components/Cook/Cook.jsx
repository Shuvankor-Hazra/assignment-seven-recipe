
import WantCook from '../WantCook/WantCook';
import CurrentCook from '../CurrentCook/CurrentCook';
import Total from '../Total/Total';

const Cook = () => {
    return (
        <div className='border-2 rounded-2xl p-5 mt-5 lg:mt-0'>
            <WantCook></WantCook>
            <CurrentCook></CurrentCook>
            <Total></Total>
        </div>
    );
};

export default Cook;