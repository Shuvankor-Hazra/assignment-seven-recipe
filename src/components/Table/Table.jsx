

const Table = () => {
    return (
        <div className=" pt-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
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
        <td className="btn bg-[#A5DD9B] rounded-3xl">Ready</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
        <td className="btn bg-[#A5DD9B] rounded-3xl">Ready</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
        <td className="btn bg-[#A5DD9B] rounded-3xl">Ready</td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Table;