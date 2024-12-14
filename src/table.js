import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const [rowsPerPage, setRowsPerPage] = useState(20); // Rows per page
  const [totalRows, setTotalRows] = useState(0); // Total rows from the server

  // Fetch data based on currentPage and rowsPerPage
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://caf-form-server-production.up.railway.app/api/form/all-forms-data?skip=${
        currentPage * rowsPerPage
      }&limit=${rowsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data?.reverse()); // Set the data? in reverse order
        setTotalRows(data?.count); // Assuming API provides `total` rows
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
        setLoading(false);
      });
  }, [currentPage, rowsPerPage]);

  // Export data to Excel
  const exportToExcel = () => {
    if (data.length === 0) {
      alert("No data to export!");
      return;
    }

    const formattedData = data.map(item => ({
      Title: item?.title,
      Name: item?.name,
      FatherName: item?.fatherName,
      Surname: item?.surname,
      Email: item?.email,
      Phone: item?.mobileNumber,
      AlternatePhone: item?.alternateMobileNumber,
      Location: item?.permanentAddress.address,
      Gender: item?.gender,
      CreatedAt: new Date(item?.createdAt).toLocaleString(),
      MandaliNearAddress: item?.permanentAddress.mandaliNearAddress,
      Pincode: item?.permanentAddress.pincode,
      Mandal: item?.permanentAddress.mandal,
      district: item?.permanentAddress.district,
      State: item?.permanentAddress.state,
      FullAddress: item?.permanentAddress.address,
      relation: item?.relation,
      InternetProvider: item?.internetProvider,
      WifiExpense: item?.wifiExpense,
      WifiRecharge: item?.wifiRecharge,
      PlanValidity: item?.currentInternetPlanValidity
  }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

    // Export the file
    XLSX.writeFile(workbook, "table_data.xlsx");
  };

  return (
    <>
      {/* Pagination controls */}
      <div className="w-full px-5 py-5 flex flex-wrap justify-between items-center gap-4">
     

      <div className="flex sm:flex-row gap-2 sm:gap-4 items-center">
  <label className="text-gray-700 font-medium">
    Rows per page:
  </label>
  <select
    value={rowsPerPage}
    onChange={(e) => setRowsPerPage(Number(e.target.value))}
    className="px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
  >
    <option value={10}>10</option>
    <option value={20}>20</option>
    <option value={30}>30</option>
    <option value={40}>40</option>
    <option value={50}>50</option>
  </select>
</div>

        <div className="text-white bg-green-500 px-5 py-3 rounded-xl">
          Total number of Applications: {totalRows}
        </div>

        

        <button
          onClick={exportToExcel}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Export to Excel
        </button>
      </div>

      {/* Table data */}
      {loading ? (
        <p className=" w-full h-[50vh] flex items-center justify-center">Loading data...</p>
      ) : (
        <div className="w-[90vw] h-[80vh] overflow-x-scroll mx-auto md:mb-5 lg:mb-5 mb-10">
           <table className="min-w-full bg-white   ">
          <thead className="rounded-xl">
            <tr className="rounded-xl">
              <th className="border border-gray-600 px-5 whitespace-nowrap">S.no</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">title</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Name</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Father Name</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">SurName</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Email</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Number</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Alternate Mobile Number</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Location</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Gender</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Created At</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Mandal Near Address</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Pin code</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Mandal</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">State</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Address</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">District</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">
                Relation
                
              </th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Internet Provider</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Wifi Expense</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Wifi Recharge</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Current Internet Plan Validity</th>
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
                    
                  <td className="text-center border border-gray-600 whitespace-nowrap">{index + 1}.</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.title}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.name}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.fatherName}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.surname}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.email}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.mobileNumber}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.alternateMobileNumber}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.address}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.gender}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{new Date(item?.createdAt).toLocaleString()}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.mandaliNearAddress}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.pincode}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.mandal}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.state}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.address}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.permanentAddress.district}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.relation}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.televisionRecharge}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.wifiExpense}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.wifiRecharge}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item?.currentInternetPlanValidity}</td>


                </tr>
              ))
            )}
          </tbody>
        </table>
        
        </div>
      )}
      <div className=" md:absolute lg:absolute md:mt-0 lg:mt-0 left-1/2 right-1/2 flex gap-5 justify-center items-center">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
    disabled={currentPage === 0}
    className={`px-4 py-2 rounded border border-gray-300 shadow-sm text-white 
      ${currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-700"}`}
  >
    Previous
  </button>
  <p className="text-lg whitespace-nowrap font-medium text-gray-700">
    Page {currentPage + 1}</p>
  <button
    onClick={() =>
      setCurrentPage((prev) =>
        (prev + 1) * rowsPerPage >= totalRows ? prev : prev + 1
      )
    }
    disabled={(currentPage + 1) * rowsPerPage >= totalRows}
    className={`px-4 py-2 rounded border border-gray-300 shadow-sm text-white 
      ${(currentPage + 1) * rowsPerPage >= totalRows ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-700"}`}
  >
    Next
  </button>
</div>
    </>
  );
}

export default Table;
