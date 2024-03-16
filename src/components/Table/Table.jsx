const Table = () => {
  return (
    <div className=" pt-5">
      <div className="text-left">
        <div>
          <tr className="w-[70%] flex justify-between">
            <th>SL</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </div>
        <div>
          <tr className="border-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default Table;
