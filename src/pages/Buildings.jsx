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
      No: 1,
      "Name of Work":
        "Construction of Girls Hostel Building in Tribal Ashram School Complex at Bhaler",
      Department: "Public Works Department (P.W.D.)",
      Date: "2020-2023",
      Location: "Nandurbar",
      "Total  Rs (in Crores)": 10.77,
    },
    {
      No: 2,
      "Name of Work":
        "Construction of Boys Hostel Building in Tribal Ashram School Complex at Bhaler",
      Department: "Public Works Department (P.W.D.)",
      Date: "2020-2023",
      Location: "Nandurbar",
      "Total  Rs (in Crores)": 10.55,
    },
    {
      No: 3,
      "Name of Work":
        "Construction of Two Floor for Pediatric, Newro Surgery, Plastic Surgery, Department of Regional Referral Hospital at Shalimar",
      Department: "Public Works Department (P.W.D.)",
      Date: "2021-2023",
      Location: "Nashik",
      "Total  Rs (in Crores)": 13.92,
    },
    {
      No: 4,
      "Name of Work":
        "Proposed Bus Depot at PR No.246 Reservation No 412 near Nashik Road Railway Station Nashik Road Div",
      Department: "Nashik Municipal Corporation",
      Date: "2021-2024",
      Location: "Nashik Road",
      "Total  Rs (in Crores)": 25.65,
    },
    {
      No: 5,
      "Name of Work":
        "Construction of Hostel Building for 200 Trainees, 18 Residencial Quarters 8 Classrooms, First Floor Toilet Block of Hostel Building and Multipurpose Hall with Infrastrural Development on CTC No.3526",
      Department: "Other Contracts",
      Date: "2018-2020",
      Location: "Dhule",
      "Total  Rs (in Crores)": 15.42,
    },
    {
      No: 6,
      "Name of Work":
        "Construction of Administrative Building of Police Station & 74 Quarters of S.P. Buldhana at Chikhali",
      Department: "Other Contracts",
      Date: "2018-2021",
      Location: "Buldhana",
      "Total  Rs (in Crores)": 17.87,
    },
    {
      No: 7,
      "Name of Work":
        "Proposed Bus Depot at PR. No. Sr. No. 246 Reservation No. 412 near Nashik Road Railway Station Nashik Road",
      Department: "Nashik Municipal Corporation",
      Date: "2020-2023",
      Location: "Nashik",
      "Total  Rs (in Crores)": 29.65,
    },
    {
      No: 8,
      "Name of Work":
        "Construction of Administrative Building of Police Station & 74 Quarters for S. P. Buldhana at Chikhali,\ndist. Buldhana Including All Infrastructural Amenities",
      Department:
        "Maharashtra State Police Housing & Welfare Corporation, Mumbai",
      Date: "2017-2018",
      Location: "Buldhana",
      "Total  Rs (in Crores)": 19.07,
    },
    {
      No: 9,
      "Name of Work":
        "Construction of Hostel Building for 200 Trainees, 18 Resi. Quarters, 8 Classrooms, First Floor Toilet Block\nof Hostel Building & Multipurpose Hall with Infrastructural Development on CTS No. 3526 – A, for\nPTC, Dhule",
      Department:
        "Maharashtra State Police Housing & Welfare Corporation, Mumbai",
      Date: "2016-2018",
      Location: "Buldhana",
      "Total  Rs (in Crores)": 16.39,
    },
    {
      No: 10,
      "Name of Work":
        "Proposed Construction of Cricket Stadium at S.No. 325/1, 327/2B, 327/3, 328 & Development of Elearning\nLibrary and Garden at S.No.197/1 to 10, 198, 199/1, 200, 201 in NMC Open Space in P. No. 1, Panchavati Div",
      Department: "Nashik Municipal Corporation",
      Date: "2022-2023",
      Location: "Nashik",
      "Total  Rs (in Crores)": 23.77,
    },
    {
      No: 11,
      "Name of Work":
        "Proposed Development of 30 M DP Road at Sant Sawatamali Marg in P. No. 23",
      Department: "Maharashtra Maritime Board",
      Date: "2 Year",
      Location: "Nashik",
      "Total  Rs (in Crores)": 29.93,
    },
    {
      No: 12,
      "Name of Work":
        "Construction of Eklavya Model Residential School (EMRS) in Single- Phase Comprise of School Building, Boys Hostel (240 Students), Girls-Hostel (240 Students), Kitchen & Dinning Block, 2 Blocks of Type-III Quarters Including Guest House (8+8 Nos), Type-II Quarters (10 Nos), Principal Residence, Warden Residence (Boys & Girls), Electrical Provision, Water Supply and Sanitary Installations, External Sewerage System and Drainage Facility, Campus Development Such a Road",
      Department: "Nashik Municipal Corporation",
      Date: "2 Year",
      Location: "Shahada",
      "Total  Rs (in Crores)": 36.44,
    },
    {
      No: 13,
      "Name of Work": "Construction of Groynes and Dredging Work at Mulgaon",
      Department: "Maharashtra Maritime Board",
      Date: "2 Year",
      Location: "Shrivardhan / Raigad",
      "Total  Rs (in Crores)": 68.88,
    },
    {
      No: 14,
      "Name of Work":
        "Construction of Stadium on S. No.325/1, 327/2, B-327/328 in P. No.1, Panchavati Division",
      Department: "Civil Construction",
      Date: "2 Year",
      Location: "Nashik",
      "Total  Rs (in Crores)": 29.94,
    },
  ];

  return (
    <div className="">
      <section className="py-8 px-8 lg:px-24 ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Buildings"]} />
        </div>
        <div className="py-2">
          <h2 className="tienne-bold text-2xl text-tableheadcolor">
          Architecting Dreams: Our Mastery in Building Exceptional Spaces
          </h2>
        </div>
        <div>
          <p className="text-[18px] lg:text-justify georgia-regular">
            We excel in the dynamic Buildings Sector, where we derive immense
            pleasure from crafting exquisite homes and commercial spaces. With
            our unwavering commitment to creativity and meticulous attention to
            detail, we have the power to transform skylines.
          </p>
        </div>
        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Building;
