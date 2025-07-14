import { tableData } from "@/staticData/elements/elements";

const Table = () => {
  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h3 className="subtitle">TABLE</h3>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-rounded text-white">
          <thead>
            <tr>
              <th>TITLE 1</th>
              <th>TITLE 2</th>
              <th>TITLE 3</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.title1}</td>
                <td>{row.title2}</td>
                <td>{row.title3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
