
// import PropTypes from 'prop-types';

import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="lg:w-4/6 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
  );
};

// Cards.propTypes = {};

export default Cards;
