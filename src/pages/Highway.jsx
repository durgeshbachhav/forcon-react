import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Highway = () => {
  const data = [
    {
      no: 1,
      "Name of Work":
        "IMPROVEMENT TO NH-3 TO SAYYAD PIMPRI LAKHALGAON HINGANVEDHE JAKHORI SHINDE ROAD ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2014-2017",
      Location: "NASHIK ",
      "Total  Rs (In Crores)": 30.59,
    },
    {
      no: 2,
      "Name of Work":
        "Improvement to Sinner Sakur Phata Darna Gonde Phata Wadivarhe (N.H.3) Road ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2014-2017",
      Location: "IGATPURI / NASHIK",
      "Total  Rs (In Crores)": 14.37,
    },
    {
      no: 3,
      "Name of Work": "IMPROVEMENT TO BEED PARALI GANGAKHED ROAD ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2015-2018",
      Location: "PARALI",
      "Total  Rs (In Crores)": 15.95,
    },
    {
      no: 4,
      "Name of Work":
        "IMPROVEMENT TO MANJARSUMBA KAIJ LOKHANDI SAWARGAON AMBAJOGAI AHEMADPUR ROAD ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2017-2018",
      Location: "AMBAJOGAI .",
      "Total  Rs (In Crores)": 18.1,
    },
    {
      no: 5,
      "Name of Work": "IMPROVEMENT TO PARALI DHARMAPURI ROAD",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2017-2018",
      Location: "PARALI",
      "Total  Rs (In Crores)": 15.84,
    },
    {
      no: 6,
      "Name of Work":
        "IMPROVEMENT TO AMBAJOGAI MANDWA MANDEKHEL NATHRA KOUDGAON SIRSALA SONPETH ROAD ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2017-2018",
      Location: "PARALI",
      "Total  Rs (In Crores)": 25.85,
    },
    {
      no: 7,
      "Name of Work":
        "IMPROVEMENT TO N.H.211 TO RAKSHASBHUWAN TO PATHARWALA CHOWK ROAD KM 0/00 TO 19/600 MDR-24 TAL. GEORAI ",
      Department: "Public Works Department (P.W.D.) ",
      Date: "2018-2019",
      Location: "GEORAI ",
      "Total  Rs (In Crores)": 17.79,
    },
    {
      no: 8,
      "Name of Work": "NHAI - 6 LANING PIMPALGAON-NASHIK-GONDE SECTION OF NH-3",
      Department: "National Highway",
      Date: "2018-2022",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 56.78,
    },
    {
      no: 9,
      "Name of Work":
        " WIDENING & ASPHALTING OF TAPOVAN LINK ROAD FROM AURANGABAD ROAD TO LAXMINARAYAN BRIDGE TO DREAM CITY JUNCTION ",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2017",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 13.68,
    },
    {
      no: 10,
      "Name of Work":
        "DEVELOPMENT OF INNER RING ROAD FROM CANAL ROAD JUNCTION TO VIJAY MAMTA JUNCTION TO TAKALI FOR 30 M WIDTH",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2017",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 25.5,
    },
    {
      no: 11,
      "Name of Work":
        "WIDENING & ASPHALTING OF GANGAPUR ROAD FROM ASHOK STAMBH TO JEHAN CIRECLE TO BARDAN PHATA TO NAM LIMIT",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2018",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 39.98,
    },
    {
      no: 12,
      "Name of Work":
        "DEVELOPMENT OF SADHUGRAM IN 163 ACR AREA AT EAST SIDE OF KAPILA RIVER AT TAPOVAN, PANCHAVATI, ",
      Department: "Nashik Municipal Corporation",
      Date: "2015-2017",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 28.86,
    },
    {
      no: 13,
      "Name of Work":
        "RESURFACING OF VARIOUS MAIN ROAD IN NASHIK WEST DIVISION ",
      Department: "Nashik Municipal Corporation",
      Date: "2016-2018",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 12.1,
    },
    {
      no: 14,
      "Name of Work":
        "RESURFACING OF EXISTING ASPHALT ROADS IN P.NO.11 SATPUR MIDC, NMC ",
      Department: "Nashik Municipal Corporation",
      Date: "2020-20222",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 15.74,
    },
    {
      no: 15,
      "Name of Work":
        "PROVIDING RESURFACING / WIDENING OF MAIN ROAD & COLONY ROAD AT VARIOUS PLACES AT P. NO. 23 & 30 IN NASHIK EAST DIVISION",
      Department: "Nashik Municipal Corporation",
      Date: "2021-2024",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 21.48,
    },
    {
      no: 16,
      "Name of Work":
        "PROPOSED DEVELOPMWNT OF 30M DP ROAD AT SANT SAWATAMALI MARG",
      Department: "Nashik Municipal Corporation",
      Date: "2023-2024",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 15.77,
    },
    {
      no: 17,
      "Name of Work":
        "DEVELOPMENT OF SINNAR TO NASHIK SECTION NH 50, (FROM KM 177/000 TO KM 201/350) 4- LANE ON PPP FOLLOWING DEFOT (TOLL) IN THE STATE OF MAHARASHTRA CITY PORTION FROM KM 199/050 KM 201/350 ",
      Department: "Other Contracts",
      Date: "2021-2023",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 11.54,
    },
    {
      no: 18,
      "Name of Work":
        " E-232; PROVIDING AND LAYING 300MM, 450MM, 500MM, 800MM & 1000 MM DIA. R.C.NP3 CLASS PIPE SEWER ALONG GHATKOPAR MANKHURD LINK ROAD FROM SHIVAJI NAGAR JUNCTION TO SION PANVEL HIGHWAY ALONG WITH ITS   IMPROVEMENT IN RIGID PAVEMENT AND ITS SIDE STRIPS IN FLEXIBLE PAVEMENT ",
      Department: "Sub-Contracts",
      Date: "2019-203",
      Location: "PANVEL / NASHIK",
      "Total  Rs (In Crores)": 82.61,
    },
    {
      no: 19,
      "Name of Work":
        "ABB Infra Buidtech Pvt. Ltd. : HAM-NSK 55 A : IMPROVEMENT TO NAMPUR-SATANA-KALWAN-VANI-PIMPALGAON-NIPHAD-SINNAR ROAD SH-27 KM 98/300 TO 154/00 TAL. SATANA, KALWAN, DINDORI, ",
      Department: "Sub-Contracts",
      Date: "2020-2024",
      Location: "NIPHAD / NASHIK",
      "Total  Rs (In Crores)": 51.76,
    },
    {
      no: 20,
      "Name of Work":
        "Providing & Laying 300mm, 450mm, 500mm, 800mm & 1000mm dia RCC NP 3 Class pipe sewer along Ghatkopar-Mankhurd Link Road From Shivaji Nagar Junction to Sion Panvel Highway along with its Improvement in rigid pavement and its side strips in flexible pavement in M/East Ward.",
      Department: "BRIHANMUMABI MUNICIPAL CORPOSRATION (BMC),",
      Date: "2018-2022",
      Location: "PANVEL / MUMBAI",
      "Total  Rs (In Crores)": 123.14,
    },
    {
      no: 21,
      "Name of Work":
        "6 Laning Pimplagoan- Nashik- Gonde Section of NH-3 from Km. 380.000 to Km. 440.000 in the State of Maharashtra- Road Safety / Balance Works on EPC Mode",
      Department: "NATIONAL HIGHWAY AUTHORITY OF INDIA",
      Date: "2017-2019",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 56.85,
    },
    {
      no: 22,
      "Name of Work":
        "HAM-NSK-55A Improvement to Nampur Satana Kalwan Vani Pimpalgona Niphad Sinnar Road SH-27 Km. 38/300 to 154/00 Tal. Satana, Kalwan, Dindori, Niphad, Sinnar.",
      Department: "PUBLIC WORK DEPARTMENT, MAHARASHTRA",
      Date: "2019-2022",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 64.58,
    },
    {
      no: 23,
      "Name of Work":
        "Improvements to NH-211 to Rakshasbhuvan Km. 0/00 to 19/600 Tal. Georai Dist. Beed (Concrete Pavement Work)",
      Department: "PUBLIC WORK DEPARTMENT, MAHARASHTRA",
      Date: "2017-2018",
      Location: "BEED",
      "Total  Rs (In Crores)": 19.54,
    },
    {
      no: 24,
      "Name of Work":
        "Resurfacing of Existing Asphalt Roads in P. NO. 11 Satpur MIDC, NMC Nashik",
      Department: "NASHIK MUNICIPAL CORPORATION",
      Date: "2019-2021",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 17.63,
    },
    {
      no: 25,
      "Name of Work":
        "Development of DP road in Ward No1 Panchawati, Nashik & Widening and construction of Bridge on Waghadi river in Gunjalbaba Nagar,",
      Department: "PUBLIC WORK DEPARTMENT, MAHARASHTRA",
      Date: "2 YEAR",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 16.99,
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
    <div className="py-8 px-8 lg:px-24">
      <section className="w-full ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Highways"]} />
        </div>
        <div className="">
          <p className="text-[18px] text-justify georgia-regular">
            Forcon Infra is recognized as a leading authority in highway and
            transportation construction. Renowned for our commitment to quality,
            safety, and innovation, the company's exceptional team of engineers
            and construction specialists collaboratively strive to bring each
            project to fruition, setting new benchmarks for excellence.
          </p>
        </div>
        {/* table */}
        <div>
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Highway;
