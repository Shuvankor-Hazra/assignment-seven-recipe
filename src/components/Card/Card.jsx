import { FaRegClock, FaGripfire } from "react-icons/fa";
// import PropTypes from 'prop-types';

const Card = () => {
    return (
        <div className="card w-full border-2 p-6">
      <img
        className="rounded-2xl mb-6"
        src="https://img.freepik.com/premium-photo/bowl-buddha-quinoa-chicken-breast-arugula-avocado-red-cabbage-carrot-green-peas-corn-tomato-green-beans-white-plate_156140-4688.jpg?w=900"
        alt="Food"
      />
      <div className="text-left">
        <h2 className="card-title">Spaghetti Bolognese</h2>
        <p className="text-[#878787] py-4">
          Classic Italian pasta dish with savory meat sauce.
        </p>
        <div className="border-y-2 py-5 ">
          <h4>
            Ingredients: <span>6</span>
          </h4>
          <ul className="list-disc pl-6 space-y-1 mt-2 text-[#878787]">
            <li>500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
        </div>
        <div className="flex gap-5 py-4">
          <div className="flex items-center gap-2">
            <FaRegClock></FaRegClock> <span>30</span> minutes
          </div>
          <div className="flex items-center gap-2">
            <FaGripfire></FaGripfire> <span>600</span>calories
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#A5DD9B] rounded-3xl">Want to Cook</button>
        </div>
      </div>
    </div>
    );
};

// Card.propTypes = {};

export default Card;