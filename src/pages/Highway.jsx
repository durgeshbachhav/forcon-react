import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Highway = () => {
  const data = [
    {
      No: 1,
      "Name of Work":
        "Improvement to NH-3 to Sayyad Pimpri Lakhalgaon Hinganvedhe Jakhori Shinde Road ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2014-2017",
      Location: "Nashik ",
      "Total  Rs (in Crores)": 30.59,
    },
    {
      No: 2,
      "Name of Work":
        "Improvement to Sinner Sakur Phata Darnagonde Phata Wadivarhe (N.H.3) Road ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2014-2017",
      Location: "Igatpuri / Nashik",
      "Total  Rs (in Crores)": 14.37,
    },
    {
      No: 3,
      "Name of Work": "Improvement to Beed Parali Gangakhed Road ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2015-2018",
      Location: "Parali",
      "Total  Rs (in Crores)": 15.95,
    },
    {
      No: 4,
      "Name of Work":
        "Improvement to Manjarsumba Kaij Lokhandi Sawargaon Ambajogai Ahemadpur Road ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2017-2018",
      Location: "Ambajogai .",
      "Total  Rs (in Crores)": 18.1,
    },
    {
      No: 5,
      "Name of Work": "Improvement to Parali Dharmapuri Road",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2017-2018",
      Location: "Parali",
      "Total  Rs (in Crores)": 15.84,
    },
    {
      No: 6,
      "Name of Work":
        "Improvement to Ambajogai Mandwa Mandekhel Nathra Koudgaon Sirsala Sonpeth Road ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2017-2018",
      Location: "Parali",
      "Total  Rs (in Crores)": 25.85,
    },
    {
      No: 7,
      "Name of Work":
        "Improvement to N.H.211 to Rakshasbhuwan to Patharwala Chowk Road km 0/00 to 19/600 MDR-24 Tal. Georai ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2018-2019",
      Location: "Georai ",
      "Total  Rs (in Crores)": 17.79,
    },
    {
      No: 8,
      "Name of Work": "NHAI - 6 Laning Pimpalgaon-Nashik-Gonde Section of NH-3",
      Department: "National Highway",
      Date: "2018-2022",
      Location: "Nashik",
      "Total  Rs (in Crores)": 56.78,
    },
    {
      No: 9,
      "Name of Work":
        " Widening & Asphalting of Tapovan Link Road from Aurangabad Road to Laxminarayan Bridge to Dream City Junction ",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2017",
      Location: "Nashik",
      "Total  Rs (in Crores)": 13.68,
    },
    {
      No: 10,
      "Name of Work":
        "Development of Inner Ring Road from Canal Road Junction to Vijay Mamta Junction to Takali for 30 m Width",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2017",
      Location: "Nashik",
      "Total  Rs (in Crores)": 25.5,
    },
    {
      No: 11,
      "Name of Work":
        "Widening & Asphalting of Gangapur Road from Ashok Stambh to Jehan Cirecle to Bardan Phata to Nam Limit",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2018",
      Location: "Nashik",
      "Total  Rs (in Crores)": 39.98,
    },
    {
      No: 12,
      "Name of Work":
        "Development of Sadhugram in 163 Acr Area at East Side of Kapila River at Tapovan, Panchavati",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2017",
      Location: "Nashik",
      "Total  Rs (in Crores)": 28.86,
    },
    {
      No: 13,
      "Name of Work":
        "Resurfacing of Various Main Road in Nashik West Division ",
      Department: "Nashik Municipal Corporation",
      Date: "2016-2018",
      Location: "Nashik",
      "Total  Rs (in Crores)": 12.1,
    },
    {
      No: 14,
      "Name of Work":
        "Resurfacing of Existing Asphalt Roads in P.No.11 Satpur MIDC, NMC ",
      Department: "Nashik Municipal Corporation",
      Date: "2020-20222",
      Location: "Nashik",
      "Total  Rs (in Crores)": 15.74,
    },
    {
      No: 15,
      "Name of Work":
        "Providing Resurfacing / Widening of Main Road & Colony Road at Various Places at P. No. 23 & 30 in Nashik East Division",
      Department: "Nashik Municipal Corporation",
      Date: "2021-2024",
      Location: "Nashik",
      "Total  Rs (in Crores)": 21.48,
    },
    {
      No: 16,
      "Name of Work":
        "Proposed Developmwnt of 30m DP Road at Sant Sawatamali Marg",
      Department: "Nashik Municipal Corporation",
      Date: "2023-2024",
      Location: "Nashik",
      "Total  Rs (in Crores)": 15.77,
    },
    {
      No: 17,
      "Name of Work":
        "Development of Sinnar to Nashik Section NH 50, (from km 177/000 to km 201/350) 4- Lane on PPP Following Defot (Toll) in the State of Maharashtra City Portion from km 199/050 km 201/350 ",
      Department: "Other Contracts",
      Date: "2021-2023",
      Location: "Nashik",
      "Total  Rs (in Crores)": 11.54,
    },
    {
      No: 18,
      "Name of Work":
        " E-232; Providing and Laying 300mm, 450mm, 500mm, 800mm & 1000 Mm Dia. R.C.Np3 Class Pipe Sewer Along Ghatkopar Mankhurd Link Road from Shivaji Nagar Junction to Sion Panvel Highway Along with Its   Improvement in Rigid Pavement and Its Side Strips in Flexible Pavement ",
      Department: "Sub-Contracts",
      Date: "2019-203",
      Location: "Panvel / Nashik",
      "Total  Rs (in Crores)": 82.61,
    },
    {
      No: 19,
      "Name of Work":
        "Abb Infra Buidtech Pvt. Ltd. : Ham-Nsk 55 A : Improvement to Nampur-Satana-Kalwan-Vani-Pimpalgaon-Niphad-Sinnar Road Sh-27 Km 98/300 to 154/00 Tal. Satana, Kalwan, Dindori.",
      Department: "Sub-Contracts",
      Date: "2020-2024",
      Location: "Niphad / Nashik",
      "Total  Rs (in Crores)": 51.76,
    },
    {
      No: 20,
      "Name of Work":
        "Providing & Laying 300mm, 450mm, 500mm, 800mm & 1000mm Dia RCC Np 3 Class Pipe Sewer Along Ghatkopar-Mankhurd Link Road from Shivaji Nagar Junction to Sion Panvel Highway Along with Its Improvement in Rigid Pavement and Its Side Strips in Flexible Pavement in M/East Ward.",
      Department: "Brihanmumabi Municipal Corposrcation (BMC),",
      Date: "2018-2022",
      Location: "Panvel / Mumbai",
      "Total  Rs (in Crores)": 123.14,
    },
    {
      No: 21,
      "Name of Work":
        "6 Laning Pimplagoan- Nashik- Gonde Section of NH-3 from Km. 380.000 to Km. 440.000 in the State of Maharashtra- Road Safety / Balance Works on EPC Mode",
      Department: "National Highway Authority of India",
      Date: "2017-2019",
      Location: "Nashik",
      "Total  Rs (in Crores)": 56.85,
    },
    {
      No: 22,
      "Name of Work":
        "Ham-Nsk-55a Improvement to Nampur Satana Kalwan Vani Pimpalgona Niphad Sinnar Road Sh-27 Km. 38/300 to 154/00 Tal. Satana, Kalwan, Dindori, Niphad, Sinnar.",
      Department: "Public Work Department, Maharashtra",
      Date: "2019-2022",
      Location: "Nashik",
      "Total  Rs (in Crores)": 64.58,
    },
    {
      No: 23,
      "Name of Work":
        "Improvements to NH-211 to Rakshasbhuvan Km. 0/00 to 19/600 Tal. Georai Dist. Beed (Concrete Pavement Work)",
      Department: "Public Work Department, Maharashtra",
      Date: "2017-2018",
      Location: "Beed",
      "Total  Rs (in Crores)": 19.54,
    },
    {
      No: 24,
      "Name of Work":
        "Resurfacing of Existing Asphalt Roads in P. No. 11 Satpur Midc, Nmc Nashik",
      Department: "Nashik Municipal Corporation",
      Date: "2019-2021",
      Location: "Nashik",
      "Total  Rs (in Crores)": 17.63,
    },
    {
      No: 25,
      "Name of Work":
        "Development of DP Road in Ward No1 Panchawati, Nashik & Widening and Construction of Bridge on Waghadi River in Gunjalbaba Nagar",
      Department: "Public Work Department, Maharashtra",
      Date: "2 Year",
      Location: "Nashik",
      "Total  Rs (in Crores)": 16.99,
    },
  ];

  const headings = [
    "Sr. No",
    "Name of Work",
    "DepartMent",
    "Date",
    "Location",
    "Total Rs(In Crores)",
  ];

  return (
    <div>
      <section className="py-8 px-8 lg:px-24 ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Highways"]} />
        </div>
        <div className="">
          <p className="text-[18px] text-justify georgia-regular">
          Forcon Infra is recognized as a leading expert in highway and transportation construction. Renowned for our commitment to quality, safety, and innovation, the company's exceptional team of engineers, construction specialists and skilled management collaboratively strive to bring each project to fruition, setting new benchmarks for excellence.
          </p>
        </div>
        {/* table */}
        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Highway;
