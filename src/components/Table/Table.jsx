

const Table = () => {
    return (
        <div className="pt-5">
  <table className="text-left">
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
      <tr className="border-y">
        <th>1</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
        <td className="btn bg-[#A5DD9B] rounded-3xl">Ready</td>
      </tr>
      <tr className="border-y">
        <th>2</th>
        <td>Spaghetti Bolognese</td>
        <td>20 Minutes</td>
        <td>600 Calories</td>
        <td className="btn bg-[#A5DD9B] rounded-3xl">Ready</td>
      </tr>
      <tr className="border-y">
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