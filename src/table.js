import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://caf-form-server-production.up.railway.app/api/form/all-forms-data')
      .then(response => response.json())
      .then(data => {
        // setData(data.data);
        // setting the data in reverse order
        setData(data.data.reverse());

        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setData([]);
        setLoading(false);
      });
  }, []);

  const exportToExcel = () => {
    if (data.length === 0) {
      alert("No data to export!");
      return;
    }

    // Prepare data for the sheet
    const worksheet = XLSX.utils.json_to_sheet(data); // Convert JSON to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data"); // Append worksheet to workbook

    // Export the file
    XLSX.writeFile(workbook, "table_data.xlsx");
  };

  return (
    <>
      <div className="w-full px-5 py-5 flex gap-5">
        <p className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">number of People added : {data.length} </p>
        {/* <p className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">number of People added : {data.length} </p> */}
      <button
        onClick={exportToExcel}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Export to Excel
      </button>
        </div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="w-[90vw] h-[80vh] overflow-x-scroll mx-auto">
            <table className="min-w-full bg-white px-5 py-5 ml-10 ">
          <thead className="rounded-xl">
            <tr className="rounded-xl">
              <th className="border border-gray-600 px-5">First Name</th>
              <th className="border border-gray-600 px-5">Middle Name</th>
              <th className="border border-gray-600 px-5">Last Name</th>
              <th className="border border-gray-600 px-5">Email</th>
              <th className="border border-gray-600 px-5">Number</th>
              <th className="border border-gray-600 px-5">Location</th>
              <th className="border border-gray-600 px-5">Gender</th>
              <th className="border border-gray-600 px-5">Created At</th>
            </tr>
          </thead>
          <tbody className="px-5 py-5 border border-gray-600">
            {data.length === 0 ? (
              <tr>
                <td colSpan="8">No data available</td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="text-center border border-gray-600">{item.firstName}</td>
                  <td className="text-center border border-gray-600">{item.middleName}</td>
                  <td className="text-center border border-gray-600">{item.lastName}</td>
                  <td className="text-center border border-gray-600">{item.email}</td>
                  <td className="text-center border border-gray-600">{item.number}</td>
                  <td className="text-center border border-gray-600">{item.location}</td>
                  <td className="text-center border border-gray-600">{item.gender}</td>
                  <td className="text-center border border-gray-600">{new Date(item.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
}

export default Table;
