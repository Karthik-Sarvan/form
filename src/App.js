import logo from "./logo.jpeg";
import desh from "./desh.png";
import "./App.css";
import { useEffect, useRef, useState } from "react";
function App() {
  const BanasEmployeeID = useRef();
  const title = useRef();
  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const designation = useRef();
  const gender = useRef();
  const maritalStatus = useRef();
  const email = useRef();
  const officialEmail = useRef();
  const mobileNumber = useRef();
  const alternateMobileNumber = useRef();
  const aadhar = useRef();
  const workLocationState = useRef();
  const workLocationArea = useRef();
  const workLocationSection = useRef();
  const partner = useRef();
  const dob = useRef();
  const permanentAddress = useRef();
  const permanentState = useRef();
  const permanentMandal = useRef();
  const permanentVillage = useRef();
  const permanentPincode = useRef();
  const currentAddress = useRef();
  const currentState = useRef();
  const currentMandal = useRef();
  const currentVillage = useRef();
  const currentPincode = useRef();
  const mandaliNearAddress = useRef();
  const fiber = useRef();
  const internetConnectionProvider = useRef();
  const tvCount = useRef();
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
  const [hasFiberConnection, setHasFiberConnection] = useState(true);
  const [ottused, setottused] = useState(true);
  const [isNA, setIsNA] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const locationData = {
    Gujarat: {
      areas: {
        MilkChillingCentre: [
          "Tharad Chilling Centre",
          "Radhanpur Chilling Centre",
          "Khimana Chilling Centre",
          "Dhanera Chilling Centre",
        ],
        Agthala: ["Bio-Gas Project", "Agthala"],
        Tharad: ["Soil Testing Lab(Tharad)"],
        BadarpuraPlant: [
          "Badarpura Oil Mill",
          "THR Project-Badarpura",
          "Umang Mall",
        ],
        Dama: ["Bio-Gas Plant", "Dama"],
        DH: [
          "Vadgam Veterinary",
          "Tharad  Veterinary",
          " Thara Veterinary",
          "Suigam Veterinary",
          "Radhanpur Veterinary",
          "Panthavada Veterinary",
          "Lakhani Veterinary",
          "Khimana Veterinary",
          "Dhanera Veterinary",
          "Deesa Veterinary",
          "Danta Veterinary",
          "Dama Semen Production Uni",
          "Bhabhar Veterinary",
          "Dantiwada Veterinary",
          "Deodar Veterinary",
          "DH Vet Care-FIP",
          "DH-BNPET",
          "DH-Fodder",
          "Dhima Veterinary",
          "Palanpur Veterinary",
          "Sanchor Veterinary(Raj.)",
          "Santalpur Veterinary",
          "Soneth Veterinary",
          "Varanasi Veterinary",
        ],
        Katarwa: ["CF Plant Dispatch Katarwa", "Cattle Feed Plant Katarwa"],
        PalanpurPlant: [
          "Utilities (BII & III)",
          "UHT Section B-II",
          "Transport(Garage)",
          "TQM-HRD Cell",
          "Systems",
          "Store General",
          "Security",
          "Sanitation & Garden",
          "Sales and Marketing",
          "Q.A.Lab.-III",
          "Q.A.Lab.-II",
          "Q.A.Lab.-I",
          "Purchase",
          "Paneer Section B-I",
          "MP / SS (BK)",
          "Liq. Milk Process B-II&II",
          "Liq. Milk Process B-I",
          "Internal Audit",
          "Ice-Cream (BIII)",
          "Guest House",
          "Ghee Section",
          "Finish Product Store",
          "Finance & Account",
          "Engg-General(B-I)",
          "Effluent Treatment Plant",
          "Civil Engg.(B-II)",
          "CF Plant Lab Palanpur",
          "CF Plant Lab Katarwa",
          "Cattle Feed Purchase",
          "Cattle Feed Plant Palanpu",
          "Butter Section B-II",
          "Automation Cell (BII&III)",
          "Administration General",
          "60TPD Powder Plant B-II",
          "30TPD Powder Plant B-I",
          "20TPD Powder Plant B-I",
          "100TPD Powder Plant B-II",
          "Fill Pack B-I",
          "Fill Pack B-II",
          "HR",
          "Lab 100TPD Powder Plant",
          "Lab Cheese Plant(Auto)",
          "Lab Whey Powder Plant",
          "66KV Sub Station",
          "A2 Milk Packing",
          "Agro&Horticulture Product",
          "BMCU-QA",
          "Boiler B-II(FO)",
          "Butter Section B-III",
          "CF Plant Dispatch Palanpu",
          "Cheese Plant",
          "Coal Fire Boiler B-I",
          "Dahi Section B-I",
          "New Initiatives",
          "Plant Office B-I",
          "Plant Office B-II",
          "Refrigeration B-I",
          "Refrigeration B-II",
          "Safety Department",
          "UHT-ASRS-BII(New)",
          "Water Treatment Pl",
          "Whey Powder Plant(45TPD)",
        ],
      },
    },
    UP: {
      areas: {
        VaranasiPlant: ["Varanasi Dairy Plant"],
        Faridabad: ["Faridabad Dairy Plant(H/N"],
        Kanpur: ["Kanpur Dairy Plant(C-UP)"],
        Lucknow: ["Lucknow Dairy Plant(C-UP)"],
        MCC: [
          "Dhanaura (W-UP)",
          "Joya(W-UP)",
          "Dibiyapur(C-UP)",
          "Ghatampur(C-UP)",
          "Kannauj(C-UP)",
          "Mawana (W-UP)",
          "Cholapur",
          "Shahganj(UP)",
          "Amethi(UP)",
          "Badheri",
          "Bahjoi(UP)",
          "Bakewar(Etawah)",
          "Bhadrauli(Agra)",
          "Bisauli(Badaun)",
          "Etah(UP)",
          "Ghazipur",
          "Hamirpur(Rath-UP)",
          "Kuthond(UP)",
          "Mant-Mathura(UP)",
          "Miranpur(W-UP)",
          "Mirzapur(UP)",
          "MLBS Foods Baghapat(UP)",
          "Muhammadabad",
          "Raebareli(UP)",
          "Sandila(Hardoi-UP)",
          "Sarsaul(Vaidik Dairy)",
          "Varanasi(UP)",
        ],
        MCCMPO: ["Dubeypur(C-UP)", "Meerut(W-UP)"],
        "MP/SS": ["MPSS (UP)"],
        MPS: [
          "MPS, Goga (W-UP)",
          "MPS,A.M.Ent.Modinagar(W-U",
          "MPS,Ballia(UP)",
          "MPS,Iglas Alligarh(UP)",
        ],
      },
    },
    Rajasthan: {
      areas: {
        Mandar: ["Mandar Veterinary(Raj)"],
        MCC: ["Bhinmal (RJ)", "Dholpur(Raj.)"],
        "MP/SS": ["MP/SS,Gudamalani(Raj.)", "MPSS (Raj)"],
        MPS: [
          "MPS, Jaipur Bassi (RJ)",
          "MPS, Dholpur (Garima (RJ)",
          "MPS, Jodhpur (RJ)",
          "MPS,Mewar Foods PVT,LTD.(",
          "MPS,Udaipur(Raj.)",
        ],
      },
    },
    AndhraPradesh: {
      areas: {
        MCC: ["Tuni(Andra Pradesh)"],
        "MCC/MPO": ["Supraja Dairy Ach"],
        "MP/SS": ["MP/SS(Andhra Pradesh)"],
      },
    },
    Jharkhand: {
      areas: {
        MCC: ["Hazaribagh(Jharkhand)", "Mandar(Jharkhand)"],
        MPS: ["MPS,RANCHI(GANAPATI MILK"],
      },
    },
    Odisha: {
      areas: {
        MCC: ["MCC", "Hajipur(Odisha)"],
        "MP/SS": ["MP/SS(Odisha)"],
        MPS: ["MPS,Sambalpur(Odisha)"],
      },
    },
    Uttrakhand: {
      areas: {
        MPS: ["MPS,Rudrapur(Uttrakhand)"],
      },
    },
  };

  const states = [
    { id: "andhraPradesh", name: "Andhra Pradesh" },
    { id: "arunachalPradesh", name: "Arunachal Pradesh" },
    { id: "assam", name: "Assam" },
    { id: "bihar", name: "Bihar" },
    { id: "chhattisgarh", name: "Chhattisgarh" },
    { id: "delhi", name: "Delhi" },
    { id: "goa", name: "Goa" },
    { id: "gujarat", name: "Gujarat" },
    { id: "haryana", name: "Haryana" },
    { id: "himachalPradesh", name: "Himachal Pradesh" },
    { id: "jharkhand", name: "Jharkhand" },
    { id: "karnataka", name: "Karnataka" },
    { id: "kerala", name: "Kerala" },
    { id: "madhyaPradesh", name: "Madhya Pradesh" },
    { id: "maharashtra", name: "Maharashtra" },
    { id: "manipur", name: "Manipur" },
    { id: "meghalaya", name: "Meghalaya" },
    { id: "mizoram", name: "Mizoram" },
    { id: "nagaland", name: "Nagaland" },
    { id: "odisha", name: "Odisha" },
    { id: "punjab", name: "Punjab" },
    { id: "rajasthan", name: "Rajasthan" },
    { id: "sikkim", name: "Sikkim" },
    { id: "tamilNadu", name: "Tamil Nadu" },
    { id: "telangana", name: "Telangana" },
    { id: "tripura", name: "Tripura" },
    { id: "uttarPradesh", name: "Uttar Pradesh" },
    { id: "uttarakhand", name: "Uttarakhand" },
    { id: "westBengal", name: "West Bengal" },
  ];

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
    setIsDisabled(!isSameAddress);

    if (!isSameAddress) {
      // Autofill current address with permanent address values
      currentAddress.current.value = permanentAddress.current?.value;
      currentState.current.value = permanentState.current?.value;
      currentMandal.current.value = permanentMandal.current?.value;
      currentVillage.current.value = permanentVillage.current?.value;
      currentPincode.current.value = permanentPincode.current?.value;
    } else {
      // Clear current address fields if checkbox is unchecked
      currentAddress.current.value = "";
      currentState.current.value = "";
      currentMandal.current.value = "";
      currentVillage.current.value = "";
      currentPincode.current.value = "";
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      BanasEmployeeID: BanasEmployeeID.current.value,
      Title: title.current.value,
      FirstName: firstName.current.value,
      middleName: middleName.current.value,
      LastName: lastName.current.value,
      Designation: designation.current.value,
      Gender: gender.current.value,
      MaritalStatus: maritalStatus.current.value,
      Email: email.current.value,
      MobileNumber: mobileNumber.current.value,
      Aadhar: aadhar.current.value,
      WorkLocationState: workLocationState.current.value,
      WorkLocationArea: workLocationArea.current.value,
      WorkLocationSection: workLocationSection.current.value,
      Partner: partner.current.value,
      DOB: dob.current.value,
      PermanentAddress: permanentAddress.current.value,
      PermanentState: permanentState.current.value,
      PermanentMandal: permanentMandal.current.value,
      PermanentVillage: permanentVillage.current.value,
      PermanentPincode: permanentPincode.current.value,

      CurrentAddress: currentAddress.current.value,
      CurrentVillage: currentVillage.current.value,
      CurrentState: currentState.current.value,
      CurrentMandal: currentMandal.current.value,
      CurrentPincode: currentPincode.current.value,
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
    middleName.current.value = "";
    lastName.current.value = "";
    designation.current.value = "";
    gender.current.value = "Male";
    maritalStatus.current.value = "Married";
    email.current.value = "";
    mobileNumber.current.value = "";
    aadhar.current.value = "";
    workLocationState.current.value = "";
    workLocationArea.current.value = "";
    workLocationSection.current.value = "";

    partner.current.value = "Banas Diary";
    dob.current.value = "";
    permanentAddress.current.value = "";
    permanentState.current.value = "";
    permanentMandal.current.value = "";
    permanentVillage.current.value = "";
    permanentPincode.current.value = "";

    currentAddress.current.value = "";
    currentVillage.current.value = "";
    currentState.current.value = "";
    currentMandal.current.value = "";
    currentPincode.current.value = "";
   
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
  const [aadharerr, setAadharerr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [permanentPincodeerr, setPermanentPincodeerr] = useState(false);
  const [currentPincodeerr, setCurrentPincodeerr] = useState(false);

  const [dobErr, setDobErr] = useState(false);
  const [banasEmployeeIDErr, setBanasEmployeeIDErr] = useState(false);
  const [internetPriceErr, setInternetPriceErr] = useState(false);
  const [televisionPriceErr, setTelevisionPriceErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [officialEmailErr, setOfficialEmailErr] = useState(false);
  const [alternateMobileErr, setAlternateMobileErr] = useState(false);
  const [dateLimits, setDateLimits] = useState({
    minDate: "",
    maxDate: "",
  });
  const [selectedState, setSelectedState] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [areas, setAreas] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const today = new Date();
    const maxDate = today.toISOString().split("T")[0]; // Today's date

    // Calculate the date one month before today
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(today.getMonth() - 1);
    const minDate = lastMonthDate.toISOString().split("T")[0];

    // Set the min and max dates
    setDateLimits({
      minDate,
      maxDate,
    });
  }, []);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedArea(""); // reset area when state changes
    setSections([]); // reset sections when state changes

    if (locationData[state]) {
      setAreas(Object.keys(locationData[state].areas));
    } else {
      setAreas([]);
    }
  };

  const handleAreaChange = (e) => {
    const area = e.target.value;
    setSelectedArea(area);

    if (locationData[selectedState] && locationData[selectedState].areas[area]) {
      setSections(locationData[selectedState].areas[area]);
    } else {
      setSections([]);
    }
  };

  const validateInputs = () => {
    const aadharvalue = aadhar.current.value;
    const mobileValue = mobileNumber.current.value;
    const permanentPincodevalue = permanentPincode.current.value;
    const currentPincodevalue = currentPincode.current.value;

    const dobValue = dob.current.value;
    const Employee = BanasEmployeeID.current.value;
    const internetPriceValue = internetPrice.current.value;
    const televisionPriceValue = televisionPrice.current.value;
    const emailValue = email.current.value;
    const OfficialEmailValue = officialEmail.current.value;
    const alternateMobileValue = alternateMobileNumber.current.value;

    if (aadharvalue.length < 12) {
      setAadharerr(true);
    } else {
      setAadharerr(false);
    }

    if (internetPriceValue > 25000) {
      setInternetPriceErr(true);
    } else {
      setInternetPriceErr(false);
    }

    if (televisionPriceValue > 25000) {
      setTelevisionPriceErr(true);
    } else {
      setTelevisionPriceErr(false);
    }

    if (Employee.length < 8) {
      setBanasEmployeeIDErr(true);
    } else {
      setBanasEmployeeIDErr(false);
    }

    if (mobileValue.length < 10) {
      setMobileErr(true);
    } else {
      setMobileErr(false);
    }

    if (alternateMobileValue.length < 10) {
      setAlternateMobileErr(true);
    } else {
      setAlternateMobileErr(false);
    }

    if (permanentPincodevalue.length < 6) {
      setPermanentPincodeerr(true);
    } else {
      setPermanentPincodeerr(false);
    }

    if (currentPincodevalue.length < 6) {
      setCurrentPincodeerr(true);
    } else {
      setCurrentPincodeerr(false);
    }
    const dobYear = new Date(dobValue).getFullYear();
    if (dobYear < 1924 || dobYear > 2024) {
      setDobErr(true);
    } else {
      setDobErr(false);
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (
      !OfficialEmailValue.includes("@") ||
      !OfficialEmailValue.includes(".")
    ) {
      setOfficialEmailErr(true);
    } else {
      setOfficialEmailErr(false);
    }
  };

  return (
    <div className="App w-[90%] md:w-[80%] mx-auto  my-[2%] border-x-2 border-b-2 border-[#c0dce4] rounded-[20px]">
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
          <div className="flex flex-col ">
            <label className="">
              Banas Employee ID / બનાસ કર્મચારી ID
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={BanasEmployeeID}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (e.target.value.length > 8) {
                  e.target.value = e.target.value.slice(0, 8);
                }
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                validateInputs();
              }}
            />
            {banasEmployeeIDErr && (
              <span className="text-red-500">
                Enter valid Employee ID number
              </span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="">
              Title / શીર્ષક
              <span className="text-red-500">*</span>
            </label>
            <select
              name="title"
              ref={title}
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw]  border-gray-500 rounded-sm px-2 py-2">
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              First Name / પ્રથમ નામ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={firstName}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
              }}
            />
          </div>
          <div className="flex flex-col  ">
            <label className="">
              Gender / જાતિ
              <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              ref={gender}
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Middle Name / મધ્ય નામ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={middleName}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
              }}
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Marital Status / વૈવાહિક સ્થિતિ
              <span className="text-red-500">*</span>
            </label>
            <select
              name="maritalStatus"
              ref={maritalStatus}
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="married">Married</option>
              <option value="unMarried">Un-Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Last Name / છેલ્લું નામ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={lastName}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
              }}
            />
          </div>

          <div className="flex flex-col ">
            <label className="">
              Designation / હોદ્દો
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={designation}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
              }}
            />
          </div>

          <div className="flex flex-col ">
            <label className="">
              Email id / ઈમેલ આઈડી
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={email}
              type="email"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (e.target.value.length > 30) {
                  e.target.value = e.target.value.slice(0, 30);
                }
                validateInputs();
              }}
            />
            {emailErr && (
              <span className="text-red-500">Enter valid email</span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="">
              Official Email id / સત્તાવાર ઈ-મેલ આઈડી
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={officialEmail}
              type="email"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (e.target.value.length > 30) {
                  e.target.value = e.target.value.slice(0, 30);
                }
                validateInputs();
              }}
            />
            {officialEmailErr && (
              <span className="text-red-500">Enter valid email</span>
            )}
          </div>

          <div className="flex flex-col ">
            <label className="">
              Mobile Number / મોબાઈલ નંબર
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={mobileNumber}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                // Prevent more than 10 digits
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10);
                }
                validateInputs();
              }}
            />
            {mobileErr && (
              <span className="text-red-500">Enter valid mobile number</span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="">
              Alternate Mobile Number / વૈકલ્પિક મોબાઇલ નંબર
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={alternateMobileNumber}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                // Prevent more than 10 digits
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10);
                }
                validateInputs();
              }}
            />
            {alternateMobileErr && (
              <span className="text-red-500">Enter valid mobile number</span>
            )}
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

          <div className="flex flex-col ">
            <label className="">
              Aadhar no / આધાર નં
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={aadhar}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                // Prevent more than 12 digits
                if (e.target.value.length > 12) {
                  e.target.value = e.target.value.slice(0, 12);
                }
                validateInputs();
              }}
            />
            {aadharerr && (
              <span className="text-red-500">Enter valid aadhar</span>
            )}
          </div>

          <div className="flex flex-col ">
            <label className="">
              Work Location(state) / કાર્યસ્થળ (રાજ્ય)
              <span className="text-red-500">*</span>
            </label>
            <select
          ref={workLocationState}
          required
          className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select State</option>
          {Object.keys(locationData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Work Location(area) / કાર્યસ્થળ (રાજ્ય)
              <span className="text-red-500">*</span>
            </label>
            <select
          ref={workLocationArea}
          required
          className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
          value={selectedArea}
          onChange={handleAreaChange}
          disabled={!selectedState}
        >
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Work Location(section) / કાર્યસ્થળ (રાજ્ય)
              <span className="text-red-500">*</span>
            </label>
            <select
          ref={workLocationSection}
          required
          className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          disabled={!selectedArea}
        >
          <option value="">Select Section</option>
          {sections.map((section, index) => (
            <option key={index} value={section}>
              {section}
            </option>
          ))}
        </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Partner / ભાગીદાર
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={partner}
              type="text"
              defaultValue={"Banas Diary"}
              required
              disabled
              className="border md:w-[30vw] cursor-not-allowed lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Date of Birth / જન્મ તારીખ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={dob}
              type="date"
              required
              min="1924-01-01" // Set the minimum date
              max="2014-12-31" // Set the maximum date
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={validateInputs}
            />
            {dobErr && (
              <span className="text-red-500">
                Date of Birth must be between 1924 and 2024
              </span>
            )}
          </div>
          <div className="flex flex-col ">
            <label>
              Permanent address / કાયમી સરનામું
              <span className="text-red-500">*</span>
            </label>

            <textarea
              ref={permanentAddress}
              required
              className="border md:w-[30vw] h-14 lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>

          <div className="flex flex-col ">
            <label className="">
              State / રાજ્ય
              <span className="text-red-500">*</span>
            </label>
            <select
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              name="state"
              id="state"
              ref={permanentState}>
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Mandali / Block / Taluka / મંડલ / બ્લોક / તાલુકો
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={permanentMandal}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Village / Area / ગામ / વિસ્તાર
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={permanentVillage}
              type="text"
              required
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Pincode / પિનકોડ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={permanentPincode}
              type="text"
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                // Prevent more than 12 digits
                if (e.target.value.length > 6) {
                  e.target.value = e.target.value.slice(0, 6);
                }
                validateInputs();
              }}
            />
            {permanentPincodeerr && (
              <span className="text-red-500">Enter valid pincode</span>
            )}
          </div>

          <div className="flex flex-col ">
            <div className="flex gap-2">
              <label className="">
                Mandali near Address / સરનામું પાસે મંડળી
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
              className={`border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2 ${
                isNA ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <label>
                Current address / વર્તમાન સરનામું{" "}
                <span className="text-red-500">*</span>
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
              disabled={isDisabled}
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>

          <div className="flex flex-col ">
            <label className="">
              State / રાજ્ય
              <span className="text-red-500">*</span>
            </label>
            <select
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              name="state"
              id="state"
              disabled={isDisabled}
              ref={currentState}>
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Mandali / Block / Taluka / મંડલ / બ્લોક / તાલુકો
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={currentMandal}
              type="text"
              required
              disabled={isDisabled}
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Village / Area / ગામ / વિસ્તાર
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={currentVillage}
              type="text"
              required
              disabled={isDisabled}
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Pincode / પિનકોડ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={currentPincode}
              type="text"
              required
              disabled={isDisabled}
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                // Prevent more than 12 digits
                if (e.target.value.length > 6) {
                  e.target.value = e.target.value.slice(0, 6);
                }
                validateInputs();
              }}
            />
            {currentPincodeerr && (
              <span className="text-red-500">Enter valid pincode</span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="md:w-[30vw] lg:w-[35vw] w-[70vw]">
              Do you have Fiber Internet Connection / શું તમારી પાસે ફાઈબર
              ઈન્ટરનેટ કનેક્શન છે
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={fiber}
              placeholder="Select yes or no"
              onChange={handleFiberChange}
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="">
              Internet Connection Provider / ઇન્ટરનેટ કનેક્શન પ્રદાતા
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={internetConnectionProvider}
              type="text"
              disabled={!hasFiberConnection}
              required={hasFiberConnection}
              className={`border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
              }}
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Current Internet Price / વર્તમાન ઈન્ટરનેટ કિંમત
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={internetPrice}
              type="text"
              required={hasFiberConnection}
              disabled={!hasFiberConnection}
              className={`border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                validateInputs();
              }}
            />
            {internetPriceErr && (
              <span className="text-red-500">
                Enter valid internet price(below 25,000)
              </span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="">
              Current Internet Plan Validity / વર્તમાન ઈન્ટરનેટ પ્લાનની માન્યતા
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              placeholder="Select yes or no"
              disabled={!hasFiberConnection}
              required={hasFiberConnection}
              ref={internetPlanValidity}
              className={`border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}>
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Current Plan Expiry Date / વર્તમાન યોજના સમાપ્તિ તારીખ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={internetPlanExpiryDate}
              type="date"
              disabled={!hasFiberConnection}
              required={hasFiberConnection}
              min={dateLimits.minDate}
              max={dateLimits.maxDate}
              className={`border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2 ${
                !hasFiberConnection ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Television Connection Provider / ટેલિવિઝન કનેક્શન પ્રદાતા
              {/* <span className="text-red-500">*</span> */}
            </label>
            <input
              ref={televisionConnectionProvider}
              type="text"
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Television Connection Price / ટેલિવિઝન કનેક્શન કિંમત
              {/* <span className="text-red-500">*</span> */}
            </label>
            <input
              ref={televisionPrice}
              type="text"
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
              onChange={(e) => {
                if (!/^[0-9]*$/.test(e.target.value)) {
                  e.target.value = e.target.value.slice(0, -1); // Remove last character if invalid
                }
                validateInputs();
              }}
            />
            {televisionPriceErr && (
              <span className="text-red-500">
                Enter valid television price(below 25,000)
              </span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="">
              Current Television Plan Validity / વર્તમાન ટેલિવિઝન પ્લાનની
              માન્યતા
              {/* <span className="text-red-500">*</span> */}
            </label>
            <select
              name="fiber"
              ref={televisionPlanValidity}
              placeholder="Select yes or no"
              className="border  md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Current Plan Expiry Date / વર્તમાન યોજના સમાપ્તિ તારીખ
              {/* <span className="text-red-500">*</span> */}
            </label>
            <input
              ref={televisionPlanExpiryDate}
              type="date"
              min={dateLimits.minDate}
              max={dateLimits.maxDate}
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="">
              Do you use OTT / શું તમે OTT નો ઉપયોગ કરો છો
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              ref={ott}
              placeholder="Select yes or no"
              onChange={handleottChange}
              required
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              OTT Used / OTT વપરાયેલ
              <span className="text-red-500">*</span>
            </label>
            <input
              ref={ottUsed}
              type="text"
              disabled={!ottused}
              required={ottused}
              className={`border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2 ${
                !ottused ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label className="md:w-[30vw] lg:w-[35vw] w-[70vw]">
              How many TVs do you have? / તમારી પાસે કેટલા ટીવી છે?
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={tvCount}
              placeholder="Select yes or no"
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="md:w-[30vw] lg:w-[35vw] w-[70vw]">
              Would you like to have Free education content / શું તમે મફત શિક્ષણ
              સામગ્રી મેળવવા માંગો છો
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={freeEducationContent}
              placeholder="Select yes or no"
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="">
              Preferred Plan / પસંદગીની યોજના{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={preferredPlan}
              placeholder="Select yes or no"
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label className="">
              Preferred Plan Pricing (+GST) / પ્રિફર્ડ પ્લાન પ્રાઇસીંગ (+GST)
              <span className="text-red-500">*</span>
            </label>
            <select
              name="fiber"
              required
              ref={preferredPlanPricing}
              placeholder="Select yes or no"
              className="border md:w-[30vw] lg:w-[35vw] w-[70vw] border-gray-500 rounded-sm px-2 py-2">
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
          <div className=" md:w-[30vw] lg:w-[35vw] md:block hidden"></div>
          <div className="flex md:flex-row lg:flex-row flex-col items-center w-[50%] mx-auto justify-center gap-5 mt-10">
            <button
              type="submit"
              className="bg-[#5cb85c] md:w-fit lg:w-fit w-full text-white md:px-10 py-2 text-xl rounded-md">
              Submit
            </button>
            <button
              type="button"
              className="bg-[#5bc0de] md:w-fit lg:w-fit w-full text-white md:px-10 py-2 text-xl rounded-md"
              onClick={(e) => clearHandler(e)}>
              Clear
            </button>
            <button
              type="button"
              className="bg-[#d9534f] md:w-fit lg:w-fit w-full text-white md:px-10 py-2 text-xl rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
