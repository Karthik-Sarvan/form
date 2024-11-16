import logo from "./logo.png";
import desh from "./desh.png"
import "./App.css";
import { useRef } from "react";
function App() {
  const Name = useRef();
  const Designation = useRef();
  const Location = useRef();
  const BHRDF = useRef();
  const Taluka = useRef();
  const BanasEmployeeID = useRef();
  const Aadhar = useRef();
  const PermanentAddress = useRef();
  const CurrentAddress = useRef();
  const WorkLocation = useRef();
  const PackageInformation = useRef();  
  const Connection = useRef();
  const Money = useRef();
  const Subscription = useRef();
  const Image = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const NameValue = Name.current.value;
    const DesignationValue = Designation.current.value;
    const LocationValue = Location.current.value;
    const BHRDFValue = BHRDF.current.value;
    const TalukaValue = Taluka.current.value;
    const BanasEmployeeIDValue = BanasEmployeeID.current.value;
    const AadharValue = Aadhar.current.value;
    const PermanentAddressValue = PermanentAddress.current.value;
    const CurrentAddressValue = CurrentAddress.current.value;
    const WorkLocationValue = WorkLocation.current.value;
    const PackageInformationValue = PackageInformation.current.value;
    const ConnectionValue = Connection.current.value;
    const MoneyValue = Money.current.value;
    const SubscriptionValue = Subscription.current.value;
    const ImageValue = Image.current.value;

    const data = {
      Name: NameValue,
      Designation: DesignationValue,
      Location: LocationValue,
      BHRDF: BHRDFValue,
      Taluka: TalukaValue,
      BanasEmployeeID: BanasEmployeeIDValue,
      Aadhar: AadharValue,
      PermanentAddress: PermanentAddressValue,
      CurrentAddress: CurrentAddressValue,
      WorkLocation: WorkLocationValue,
      PackageInformation: PackageInformationValue,
      Connection: ConnectionValue,
      Money: MoneyValue,
      Subscription: SubscriptionValue,
      Image: ImageValue,
    };

    console.log(data);
  }

  const clearHandler = (e) => {
    e.preventDefault();
    Name.current.value = "";
    Designation.current.value = "";
    Location.current.value = "";
    BHRDF.current.value = "";
    Taluka.current.value = "";
    BanasEmployeeID.current.value = "";
    Aadhar.current.value = "";
    PermanentAddress.current.value = "";
    CurrentAddress.current.value = "";
    WorkLocation.current.value = "";
    PackageInformation.current.value = "";
    Connection.current.value = "";
    Money.current.value = "";
    Subscription.current.value = "";
    Image.current.value = "";
  }

  return (
    <div className="App w-[80vw] mx-auto border-x-2 border-b-2 rounded-2xl mt-[2%] mb-[2%] border-cyan-500">
        <div className="background w-full mx-auto px-5 py-5 gap-5 flex items-center justify-center rounded-t-2xl ">
          <img
            src={logo}
            alt="logo"
            className="md:w-[7vw] lg:w-[7vw] w-[15vw]"
          />
          <img
            src={desh}
            alt="logo"
            className="md:h-[7vh] lg:h-[10vh] h-[5vh]"
          />
          {/* <h1 className="text-black gap-5 font-bold"> Banaras Dairy BHRDF </h1> */}
        </div>
        <div className=" border-x p-5 border-b  rounded-b-xl">
          <h1 className="font-medium text-2xl ">CAF Manager</h1>
          <form className=" flex flex-wrap gap-5 mt-2 items-center justify-between w-full ">
          <div className="flex flex-col ">
              <label className="">Banas employee ID: <span className="text-red-500">*</span></label>
              <input ref={BanasEmployeeID} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
            </div>
            <div className="flex flex-col ">
              <label className="">Name: <span className="text-red-500">*</span></label>
              <input ref={Name} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
            </div>
            <div className="flex flex-col ">
              <label className="">Designation: <span className="text-red-500">*</span></label>
              <input ref={Designation} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
            </div>
            <div className="flex flex-col ">
              <label className="">Location: <span className="text-red-500">*</span></label>
              <input ref={Location} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
            </div>
            {/* <div className="flex flex-col ">
              <label className="">BHRDF: <span className="text-red-500">*</span></label>
              <input ref={BHRDF} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
            </div> */}
            <div className="flex flex-col ">
              <label className="">Taluka: <span className="text-red-500">*</span></label>
              <input ref={Taluka} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
            </div>
            
            <div className="flex flex-col ">
              <label className="">Aadhar: <span className="text-red-500">*</span></label>
              <input ref={Aadhar} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className="">Permanent address: <span className="text-red-500">*</span></label>
              <textarea ref={PermanentAddress} className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className="">Current address: <span className="text-red-500">*</span></label>
              <textarea ref={CurrentAddress} className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className="">Work location: <span className="text-red-500">*</span></label>
              <input ref={WorkLocation} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className="">Package information: <span className="text-red-500">*</span></label>
              <input ref={PackageInformation} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className="">Current Connection : <span className="text-red-500">*</span></label>
              <input ref={Connection} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className="">Current Subscription Fee: <span className="text-red-500">*</span></label>
              <input ref={Money} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              <div className="flex flex-col ">
              <label className=""> Subscription End Date: <span className="text-red-500">*</span></label>
              <input ref={Subscription} type="text" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div>
              {/* <div className="flex flex-col ">
              <label className="">Upload Image: <span className="text-red-500">*</span></label>
              <input ref={Image} type="file" className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-5 py-2" />
              </div> */}
            
          </form>
          <div className="flex md:flex-row lg:flex-row flex-col items-center justify-center gap-5 mt-10">
            <button className="bg-[#5cb85c] md:w-fit lg:w-fit w-full text-white px-10 py-2 text-xl rounded-md" onClick={(e) => submitHandler(e)}>Submit</button>
            <button className="bg-[#5bc0de] md:w-fit lg:w-fit w-full text-white px-10 py-2 text-xl rounded-md" onClick={(e) => clearHandler(e)}>Clear</button>
            <button className="bg-[#d9534f] md:w-fit lg:w-fit w-full text-white px-10 py-2 text-xl rounded-md">Cancel</button>
            </div>

        </div>
    </div>
  );
}

export default App;
