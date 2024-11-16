import logo from "./logo.png";
import desh from "./desh.png";
import "./App.css";
import { useRef, useState } from "react";
function App() {
  const BanasEmployeeID = useRef();
  const title = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const gender = useRef();
  const maritalStatus = useRef();
  const email = useRef();
  const mobileNumber = useRef();
  const aadhar = useRef();
  const workLocation = useRef();
  const partner = useRef();
  const dob = useRef();
  const permanentAddress = useRef();
  const currentAddress = useRef();
  const state = useRef();
  const mandal = useRef();
  const village = useRef();
  const pincode = useRef();
  const mandaliNearAddress = useRef();
  const fiber = useRef();
  const internetConnectionProvider = useRef();
  const internetPrice = useRef();
  const internetPlanValidity = useRef();
  const internetPlanExpiryDate = useRef();
  const televisionConnectionProvider = useRef();
  const televisionPrice = useRef();
  const televisionPlanValidity = useRef();
  const televisionPlanExpiryDate = useRef();
  const ott = useRef();
  const ottUsed = useRef();
  const freeEducationContent = useRef();
  const preferredPlan = useRef();
  const preferredPlanPricing = useRef();
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [hasFiberConnection, setHasFiberConnection] = useState(false);
  const [ottused, setottused] = useState(false);
  const [isNA, setIsNA] = useState(false);

  const handleNAChange = (e) => {
    setIsNA(e.target.checked);
  };

  const handleFiberChange = (e) => {
    setHasFiberConnection(e.target.value === "Yes");
  };

  const handleottChange = (e) => {
    setottused(e.target.value === "Yes");
  };

  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress);

    if (!isSameAddress) {
      currentAddress.current.value = permanentAddress.current.value;
    } else {
      currentAddress.current.value = "";
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      BanasEmployeeID: BanasEmployeeID.current.value,
      Title: title.current.value,
      FirstName: firstName.current.value,
      LastName: lastName.current.value,
      Gender: gender.current.value,
      MaritalStatus: maritalStatus.current.value,
      Email: email.current.value,
      MobileNumber: mobileNumber.current.value,
      Aadhar: aadhar.current.value,
      WorkLocation: workLocation.current.value,
      Partner: partner.current.value,
      DOB: dob.current.value,
      PermanentAddress: permanentAddress.current.value,
      CurrentAddress: currentAddress.current.value,
      State: state.current.value,
      Mandal: mandal.current.value,
      Village: village.current.value,
      Pincode: pincode.current.value,
      MandaliNearAddress: mandaliNearAddress.current.value,
      Fiber: fiber.current.value,
      InternetConnectionProvider: internetConnectionProvider.current.value,
      InternetPrice: internetPrice.current.value,
      InternetPlanValidity: internetPlanValidity.current.value,
      InternetPlanExpiryDate: internetPlanExpiryDate.current.value,
      TelevisionConnectionProvider: televisionConnectionProvider.current.value,
      TelevisionPrice: televisionPrice.current.value,
      TelevisionPlanValidity: televisionPlanValidity.current.value,
      TelevisionPlanExpiryDate: televisionPlanExpiryDate.current.value,
      OTT: ott.current.value,
      OTTUsed: ottUsed.current.value,
      FreeEducationContent: freeEducationContent.current.value,
      PreferredPlan: preferredPlan.current.value,
      PreferredPlanPricing: preferredPlanPricing.current.value,
    };
    console.log(data);
  };

  const clearHandler = (e) => {
    e.preventDefault();
    BanasEmployeeID.current.value = "";
    title.current.value = "Mr.";
    firstName.current.value = "";
    lastName.current.value = "";
    gender.current.value = "Male";
    maritalStatus.current.value = "";
    email.current.value = "";
    mobileNumber.current.value = "";
    aadhar.current.value = "";
    workLocation.current.value = "";
    partner.current.value = "Banas Diary";
    dob.current.value = "";
    permanentAddress.current.value = "";
    currentAddress.current.value = "";
    state.current.value = "";
    mandal.current.value = "";
    village.current.value = "";
    pincode.current.value = "";
    mandaliNearAddress.current.value = "";
    fiber.current.value = "No";
    internetConnectionProvider.current.value = "";
    internetPrice.current.value = "";
    internetPlanValidity.current.value = "";
    internetPlanExpiryDate.current.value = "";
    televisionConnectionProvider.current.value = "";
    televisionPrice.current.value = "";
    televisionPlanValidity.current.value = "";
    televisionPlanExpiryDate.current.value = "";
    ott.current.value = "No";
    ottUsed.current.value = "";
    freeEducationContent.current.value = "No";
    preferredPlan.current.value = "1";
    preferredPlanPricing.current.value = "299";
  };

  return (
    <div className="App w-[100%] mx-auto   ">
      <div className="background w-[99.5%] mx-auto px-5 py-3 gap-5 flex items-center justify-center  ">
        <img src={logo} alt="logo" className="md:w-[5vw] lg:w-[7vw] w-[15vw]" />
        <img src={desh} alt="logo" className="md:h-[5vh] lg:h-[10vh] h-[5vh]" />
        {/* <h1 className="text-black gap-5 font-bold"> Banaras Dairy BHRDF </h1> */}
      </div>
      <p className="font-semibold text-xl text-center mt-2">
        Please Enter Answer only in English
      </p>
      <div className=" p-5 w-full">
        <h1 className="font-medium text-2xl ">CAF Form</h1>
        <form
          className=" flex flex-wrap gap-5 mt-2 items-center justify-between w-full "
          onSubmit={(e) => submitHandler(e)}>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%] ">
            <label className="">
              Banas Employee ID
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={BanasEmployeeID}
              type="text"
              required
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Title:
              <span className="text-red-500">*</span>
            </label>
            <select
              name="title"
              ref={title}
              required
              className="border  border-gray-500 rounded-sm px-2 py-2">
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={firstName}
              type="text"
              required
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Last Name
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={lastName}
              type="text"
              required
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%] ">
            <label className="">
              Gender
              <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              ref={gender}
              required
              className="border  border-gray-500 rounded-sm px-2 py-2">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Marital Status
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={maritalStatus}
              required
              type="text"
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Email id
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={email}
              type="email"
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Mobile Number
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={mobileNumber}
              type="number"
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          {/* <div className="flex flex-col ">
              <label className="">BHRDF: <span className="text-red-500">*</span></label>
              <input ref={BHRDF} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2" />
            </div> */}
          {/* <div className="flex flex-col ">
            <label className="">
              Taluka: <span className="text-red-500">*</span>
            </label>
            <input
              ref={Taluka}
              type="text"
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div> */}

          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Aadhar no
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={aadhar}
              type="number"
              required
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Work Location
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={workLocation}
              type="text"
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Partner
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={partner}
              type="text"
              defaultValue={"Banas Diary"}
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Date of Birth
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={dob}
              type="date"
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label>
              Permanent address <span className="text-red-500">*</span>
            </label>

            <textarea
              ref={permanentAddress}
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>

          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <div className="flex gap-2 items-center">
              <label>
                Current address <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="sameAddressCheckbox"
                  className="mr-2"
                  checked={isSameAddress}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="sameAddressCheckbox" className="text-sm">
                  Same as Permanent Address
                </label>
              </div>
            </div>
            <textarea
              ref={currentAddress}
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>

          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              State
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={state}
              type="text"
              required
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Mandal / Block / Taluka
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={mandal}
              type="text"
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Village / Area
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={village}
              type="text"
              required
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Pincode
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={pincode}
              type="number"
              required
              className="border border-gray-500 rounded-sm px-2 py-2"
            />
          </div>

          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <div className="flex gap-2">
              <label className="">
                Mandali near Address
                <span className="text-red-500">*</span>
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  ref={mandaliNearAddress}
                  onChange={handleNAChange}
                />
                N/A
              </label>
            </div>
            <input
              type="text"
              disabled={isNA}
              required={!isNA}
              ref={mandaliNearAddress}
              className={`border border-gray-500 rounded-sm px-2 py-2 ${
                isNA ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Do you have Fiber Internet Connection
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={fiber}
              placeholder="Select yes or no"
              onChange={handleFiberChange}
              className="border border-gray-500 rounded-sm px-2 py-2">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Internet Connection Provider
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={internetConnectionProvider}
              type="text"
              disabled={!hasFiberConnection}
              required={hasFiberConnection}
              className={`border border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Current Internet Price
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={internetPrice}
              type="text"
              required={hasFiberConnection}
              disabled={!hasFiberConnection}
              className={`border border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Current Plan Validity
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              placeholder="Select yes or no"
              disabled={!hasFiberConnection}
              required={hasFiberConnection}
              ref={internetPlanValidity}
              className={`border border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Current Plan Expiry Date
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={internetPlanExpiryDate}
              type="date"
              disabled={!hasFiberConnection}
              required={hasFiberConnection}
              className={`border border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Television Connection Provider
              {/* <span className="text-red-500">*</span> */}
            </label>
            <input
              ref={televisionConnectionProvider}
              type="text"
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Television Connection Price
              {/* <span className="text-red-500">*</span> */}
            </label>
            <input
              ref={televisionPrice}
              type="text"
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Current Plan Validity
              {/* <span className="text-red-500">*</span> */}
            </label>
            <select
              name="fiber"
              ref={televisionPlanValidity}
              placeholder="Select yes or no"
              className="border  border-gray-500 rounded-sm px-2 py-2">
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Current Plan Expiry Date
              {/* <span className="text-red-500">*</span> */}
            </label>
            <input
              ref={televisionPlanExpiryDate}
              type="date"
              className="border  border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Do you use OTT
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              ref={ott}
              placeholder="Select yes or no"
              onChange={handleottChange}
              required
              className="border border-gray-500 rounded-sm px-2 py-2">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              OTT Used
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={ottUsed}
              type="text"
              disabled={!ottused}
              required={ottused}
              className={`border border-gray-500 rounded-sm px-2 py-2 ${
                !ottused ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Would you like to have Free education content
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={freeEducationContent}
              placeholder="Select yes or no"
              className="border border-gray-500 rounded-sm px-2 py-2">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="flex flex-col md:w-[45%] ml-auto w-[90%]">
            <label className="">
              Preferred Plan <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={preferredPlan}
              placeholder="Select yes or no"
              className="border border-gray-500 rounded-sm px-2 py-2">
              <option value="1">1 month</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
          <div className="flex flex-col md:w-[45%] mr-auto w-[90%]">
            <label className="">
              Preferred Plan Pricing (+GST){" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={preferredPlanPricing}
              placeholder="Select yes or no"
              className="border border-gray-500 rounded-sm px-2 py-2">
              <option value="299">299</option>
              <option value="399">399</option>
              <option value="499">499</option>
              <option value="599">599</option>
              <option value="699">699</option>
              <option value="799">799</option>
            </select>
          </div>

          {/* <div className="flex flex-col ">
              <label className="">Upload Image: <span className="text-red-500">*</span></label>
              <input ref={Image} type="file" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div> */}
          <button
            type="submit"
            className="bg-[#5cb85c] md:w-fit lg:w-fit w-full text-white px-10 py-2 text-xl rounded-md">
            Submit
          </button>
        </form>
        <div className="flex md:flex-row lg:flex-row flex-col items-center justify-center gap-5 mt-10">
          <button
            className="bg-[#5bc0de] md:w-fit lg:w-fit w-full text-white px-10 py-2 text-xl rounded-md"
            onClick={(e) => clearHandler(e)}>
            Clear
          </button>
          <button className="bg-[#d9534f] md:w-fit lg:w-fit w-full text-white px-10 py-2 text-xl rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
