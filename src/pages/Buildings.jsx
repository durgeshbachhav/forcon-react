import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Building = () => {
  const headings = [
    "Sr. No",
    "Name of Work",
    "DepartMent",
    "Date",
    "Location",
    "Total Rs(In Crores)",
  ];
  const data = [
    {
      no: 1,
      "Name of Work":
        "CONSTRUCTION OF GIRLS HOSTEL BUILDING IN TRIBAL ASHRAM SCHOOL COMPLEX AT BHALER, ",
      Department: "Public Works Department (P.W.D.) ",

      Date: "2020-2023",
      Location: "NANDURBAR ",
      "Total  Rs (In Crores)": 10.77,
    },
    {
      no: 2,
      "Name of Work":
        "CONSTRUCTION OF BOYS HOSTEL BUILDING IN TRIBAL ASHRAM SCHOOL COMPLEX AT BHALER, ",
      Department: "Public Works Department (P.W.D.) ",

      Date: "2020-2023",
      Location: "NANDURBAR ",
      "Total  Rs (In Crores)": 10.55,
    },
    {
      no: 3,
      "Name of Work":
        "CONSTRUCTION OF TWO FLOOR FOR PEDIATRIC, NEWRO SURGERY, PLASTIC SURGERY, DEPARTMENT OF REGIONAL REFFERAL HOSPITAL AT SHALIMAR,",
      Department: "Public Works Department (P.W.D.) ",

      Date: "2021-2023",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 13.92,
    },
    {
      no: 4,
      "Name of Work":
        "PROPOSED BUS DEPOT AT PR NO.246 RESERVATION NO 412 NEAR NASHIK ROAD RAILWAY STATION NASHIK ROAD DIV",
      Department: "Nashik Municipal Corporation",

      Date: "2021-2024",
      Location: "NASHIK ROAD",
      "Total  Rs (In Crores)": 25.65,
    },
    {
      no: 5,
      "Name of Work":
        "CONSTRUCTION OF HOSTEL BUILDING FOR 200 TRAINEERS, 18 RESIDENCIAL QUARTERS 8 CLASSROOMS, FIRST FLOOR TOILET BLOCK OF HOSTEL BUILDING AND MULTIPURPOSE HALL WITH INFRASTRURAL DEVELOPMENT ON CTC NO.3526",
      Department: "Other Contracts",

      Date: "2018-2020",
      Location: "DHULE ",
      "Total  Rs (In Crores)": 15.42,
    },
    {
      no: 6,
      "Name of Work":
        "CONSTRUCTION OF ADMINISTRATIVE BUILDING OF POLICE STATION & 74 QUARTERS OF S.P. BULDHANA AT CHIKHALI",
      Department: "Other Contracts",

      Date: "2018-2021",
      Location: "BULDANA",
      "Total  Rs (In Crores)": 17.87,
    },
    {
      no: 7,
      "Name of Work":
        "Proposed Bus Depot at Pr. No. Sr. No. 246 Reservation No. 412 Near Nashik Road Railway Station Nashik Road.",
      Department: "NASHIK MUNICIPAL CORPORATION",

      Date: "2020-2023",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 29.65,
    },
    {
      no: 8,
      "Name of Work":
        "Construction of Administrative Building of Police Station & 74 Quarters for S. P. Buldhana at Chikhali,\nDist. Buldhana including All Infrastructural amenities.",
      Department:
        "MAHARASHTRA STATE POLICE HOUSING & WELFARE CORPORATION, MUMBAI",

      Date: "2017-2018",
      Location: "Buldhana",
      "Total  Rs (In Crores)": 19.07,
    },
    {
      no: 9,
      "Name of Work":
        "Construction of Hostel Building for 200 trainees, 18 Resi. Quarters, 8 Classrooms, First Floor Toilet Block\nof Hostel Building & Multipurpose Hall with Infrastructural Development on CTS No. 3526 – A, for\nPTC, Dhule",
      Department:
        "MAHARASHTRA STATE POLICE HOUSING & WELFARE CORPORATION, MUMBAI",

      Date: "2016-2018",
      Location: "Buldhana",
      "Total  Rs (In Crores)": 16.39,
    },
    {
      no: 10,
      "Name of Work":
        "Proposed Construction of Cricket Stadium at S.no. 325/1, 327/2B, 327/3, 328 & Development of elearning\nlibrary and garden at S.No.197/1 to 10, 198, 199/1, 200, 201 in NMC open space in P. No. 1, Panchavati Div.",
      Department: "NASHIK MUNICIPAL CORPORATION",

      Date: "2022-2023",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 23.77,
    },
    {
      no: 11,
      "Name of Work":
        "Proposed Development of 30 m DP road at Sant Sawatamali Marg in P. No. 23,",
      Department: "MAHARASHTRA MARITIME BOARD",

      Date: "2 YEAR",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 29.93,
    },
    {
      no: 12,
      "Name of Work":
        "Construction of Eklavya Model Residential School (EMRS) in Single- Phase comprise of school building, Boys hostel (240 students), Girls-hostel (240 students), Kitchen & Dinning block, 2 blocks of Type-III quarters including guest house (8+8 Nos), Type-II quarters (10 Nos), Principal Residence, Warden Residence (Boys & Girls), electrical provision, water supply and Sanitary installations, External sewerage system and Drainage facility, Campus development such a road,",
      Department: "NASHIK MUNICIPAL CORPORATION",

      Date: "2 YEAR",
      Location: "Shahada",
      "Total  Rs (In Crores)": 36.44,
    },
    {
      no: 13,
      "Name of Work": "Construction of Groynes and Dredging Work at Mulgaon",
      Department: "MAHARASHTRA MARITIME BOARD",

      Date: "2 YEAR",
      Location: "Shrivardhan / Raigad",
      "Total  Rs (In Crores)": 68.88,
    },
    {
      no: 14,
      "Name of Work":
        "Construction of Stadium on S. No.325/1, 327/2, B-327/328 in P. No.1, Panchavati Division",
      Department: "CIVIL CONSTRUCTION",

      Date: "2 YEAR",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 29.94,
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-20">
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Buildings"]} />
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p className="text-justify georgia-regular text-[18px]">
              Forcon Infra stands as a preeminent leader in the field of highway
              and transportation infrastructure construction. Renowned for our
              unwavering commitment to quality, safety, and innovation, the
              company's exceptional team of engineers, architects, and
              construction specialists collaboratively strive to bring each
              project to fruition, setting new benchmarks for excellence.
            </p>
          </div>
        </div>
        <div>
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Building;
