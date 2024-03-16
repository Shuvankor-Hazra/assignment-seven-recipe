

const Table2 = () => {
    return (
        <div className="overflow-x-auto pt-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Table2;