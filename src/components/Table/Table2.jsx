import PropTypes from "prop-types";

const Table2 = ({ currentCooking }) => {
  return (
    <div className="overflow-x-auto pt-5">
      <table className="table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {currentCooking.map((i, id) => (
            <tr key={id}>
              <th> {id + 1} </th>
              <td> {i.recipe_name} </td>
              <td> {i.preparing_time} </td>
              <td> {i.calories} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table2.propTypes = {
  currentCooking: PropTypes.array.isRequired,
};

export default Table2;
