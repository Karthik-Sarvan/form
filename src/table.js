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

    // // Prepare data for the sheet
    // const worksheet = XLSX.utils.json_to_sheet(data); // Convert JSON to worksheet
    // const workbook = XLSX.utils.book_new(); // Create a new workbook
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data"); // Append worksheet to workbook


    // <td className="text-center border border-gray-600 whitespace-nowrap">{item.title}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.firstName}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.middleName}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.lastName}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.email}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.number}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.alternateMobileNumber}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.location}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.gender}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{new Date(item.createdAt).toLocaleString()}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.mandaliNearAddress}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.pincode}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.mandal}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.state}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.address}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.employeeId}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.internetProvider}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.wifiExpense}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.wifiRecharge}</td>
    //               <td className="text-center border border-gray-600 whitespace-nowrap">{item.currentInternetPlanValidity}</td>
    //exporting likr this
    const formattedData = data.map(item => ({
        Title: item.title,
        FirstName: item.firstName,
        MiddleName: item.middleName,
        LastName: item.lastName,
        Email: item.email,
        Phone: item.mobileNumber,
        AlternatePhone: item.alternateMobileNumber,
        Location: item.permanentAddress.address,
        Gender: item.gender,
        CreatedAt: new Date(item.createdAt).toLocaleString(),
        MandaliNearAddress: item.permanentAddress.mandaliNearAddress,
        Pincode: item.permanentAddress.pincode,
        Mandal: item.permanentAddress.mandal,
        district: item.permanentAddress.district,
        State: item.permanentAddress.state,
        FullAddress: item.permanentAddress.address,
        EmployeeID: item.employeeId,
        InternetProvider: item.internetProvider,
        WifiExpense: item.wifiExpense,
        WifiRecharge: item.wifiRecharge,
        PlanValidity: item.currentInternetPlanValidity
    }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData); // Convert JSON data to a worksheet
const workbook = XLSX.utils.book_new(); // Create a new workbook
XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data"); // Append the worksheet to the workbook

// Export the file
XLSX.writeFile(workbook, "table_data.xlsx");
    // const worksheet = XLSX.utils.json_to_sheet(data, {
    //   header: [
    //     "title",
    //     "firstName",
    //     "middleName",
    //     "lastName",
    //     "email",
    //     "number",
    //     "alternateMobileNumber",
    //     "location",
    //     "gender",
    //     "createdAt",
    //     "permanentAddress.mandaliNearAddress",
    //     "permanentAddress.pincode",
    //     "permanentAddress.mandal",
    //     "permanentAddress.state",
    //     "permanentAddress.address",
    //     "employeeId",
    //     "internetProvider",
    //     "wifiExpense",
    //     "wifiRecharge",
    //     "currentInternetPlanValidity"
    //       ]
    //     });

    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

    // // Export the file
    // XLSX.writeFile(workbook, "table_data.xlsx");
  };

  return (
    <>
      <div className="w-full px-5 py-5 flex gap-5">
        <p className="mb-4 bg-green-500 text-white px-4 py-2 whitespace-nowrap rounded hover:bg-green-600">number of People added : {data.length} </p>
        <p className="mb-4 bg-green-500 text-white px-4 py-2 whitespace-nowrap rounded hover:bg-green-600">number of different Mandals : </p>
        {/* <p className="mb-4 bg-green-500 text-white px-4 py-2 whitespace-nowrap rounded hover:bg-green-600">number of People added : {data.length} </p> */}
      <button
        onClick={exportToExcel}
        className="mb-4 bg-blue-500 text-white px-4 py-2 whitespace-nowrap rounded hover:bg-blue-600"
      >
        Export to Excel
      </button>

        </div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="w-[90vw] h-[80vh] overflow-x-scroll mx-auto">
            <table className="min-w-full bg-white   ">
          <thead className="rounded-xl">
            <tr className="rounded-xl">
              <th className="border border-gray-600 px-5 whitespace-nowrap">title</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">First Name</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Middle Name</th>
              <th className="border border-gray-600 px-5 whitespace-nowrap">Last Name</th>
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
                    
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.title}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.name}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.fatherName}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.surname}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.email}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.mobileNumber}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.alternateMobileNumber}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.address}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.gender}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{new Date(item.createdAt).toLocaleString()}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.mandaliNearAddress}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.pincode}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.mandal}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.state}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.address}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.permanentAddress.district}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.relation}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.televisionRecharge}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.wifiExpense}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.wifiRecharge}</td>
                  <td className="text-center border border-gray-600 whitespace-nowrap">{item.currentInternetPlanValidity}</td>


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
