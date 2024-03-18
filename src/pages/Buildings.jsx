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
      "name of work":
        "construction of girls hostel building in tribal ashram school complex at bhaler",
      department: "public works department (p.w.d.) ",
      date: "2020-2023",
      location: "nandurbar ",
      "total  rs (in crores)": 10.77,
    },
    {
      no: 2,
      "name of work":
        "construction of boys hostel building in tribal ashram school complex at bhaler, ",
      department: "public works department (p.w.d.) ",
      date: "2020-2023",
      location: "nandurbar ",
      "total  rs (in crores)": 10.55,
    },
    {
      no: 3,
      "name of work":
        "construction of two floor for pediatric, newro surgery, plastic surgery, department of regional refferal hospital at shalimar,",
      department: "public works department (p.w.d.) ",
      date: "2021-2023",
      location: "nashik",
      "total  rs (in crores)": 13.92,
    },
    {
      no: 4,
      "name of work":
        "proposed bus depot at pr no.246 reservation no 412 near nashik road railway station nashik road div",
      department: "nashik municipal corporation",
      date: "2021-2024",
      location: "nashik road",
      "total  rs (in crores)": 25.65,
    },
    {
      no: 5,
      "name of work":
        "construction of hostel building for 200 trainees, 18 residencial quarters 8 classrooms, first floor toilet block of hostel building and multipurpose hall with infrastrural development on ctc no.3526",
      department: "other contracts",
      date: "2018-2020",
      location: "dhule ",
      "total  rs (in crores)": 15.42,
    },
    {
      no: 6,
      "name of work":
        "construction of administrative building of police station & 74 quarters of s.p. buldhana at chikhali",
      department: "other contracts",
      date: "2018-2021",
      location: "buldhana",
      "total  rs (in crores)": 17.87,
    },
    {
      no: 7,
      "name of work":
        "proposed bus depot at pr. no. sr. no. 246 reservation no. 412 near nashik road railway station nashik road.",
      department: "nashik municipal corporation",
      date: "2020-2023",
      location: "nashik",
      "total  rs (in crores)": 29.65,
    },
    {
      no: 8,
      "name of work":
        "construction of administrative building of police station & 74 quarters for s. p. buldhana at chikhali,\ndist. buldhana including all infrastructural amenities.",
      department:
        "maharashtra state police housing & welfare corporation, mumbai",
      date: "2017-2018",
      location: "buldhana",
      "total  rs (in crores)": 19.07,
    },
    {
      no: 9,
      "name of work":
        "construction of hostel building for 200 trainees, 18 resi. quarters, 8 classrooms, first floor toilet block\nof hostel building & multipurpose hall with infrastructural development on cts no. 3526 – a, for\nptc, dhule",
      department:
        "maharashtra state police housing & welfare corporation, mumbai",
      date: "2016-2018",
      location: "buldhana",
      "total  rs (in crores)": 16.39,
    },
    {
      no: 10,
      "name of work":
        "proposed construction of cricket stadium at s.no. 325/1, 327/2b, 327/3, 328 & development of elearning\nlibrary and garden at s.no.197/1 to 10, 198, 199/1, 200, 201 in nmc open space in p. no. 1, panchavati div.",
      department: "nashik municipal corporation",
      date: "2022-2023",
      location: "nashik",
      "total  rs (in crores)": 23.77,
    },
    {
      no: 11,
      "name of work":
        "proposed development of 30 m dp road at sant sawatamali marg in p. no. 23,",
      department: "maharashtra maritime board",
      date: "2 year",
      location: "nashik",
      "total  rs (in crores)": 29.93,
    },
    {
      no: 12,
      "name of work":
        "construction of eklavya model residential school (emrs) in single- phase comprise of school building, boys hostel (240 students), girls-hostel (240 students), kitchen & dinning block, 2 blocks of type-iii quarters including guest house (8+8 nos), type-ii quarters (10 nos), principal residence, warden residence (boys & girls), electrical provision, water supply and sanitary installations, external sewerage system and drainage facility, campus development such a road,",
      department: "nashik municipal corporation",
      date: "2 year",
      location: "shahada",
      "total  rs (in crores)": 36.44,
    },
    {
      no: 13,
      "name of work": "construction of groynes and dredging work at mulgaon",
      department: "maharashtra maritime board",
      date: "2 year",
      location: "shrivardhan / raigad",
      "total  rs (in crores)": 68.88,
    },
    {
      no: 14,
      "name of work":
        "construction of stadium on s. no.325/1, 327/2, b-327/328 in p. no.1, panchavati division",
      department: "civil construction",
      date: "2 year",
      location: "nashik",
      "total  rs (in crores)": 29.94,
    },
  ];

  return (
    <div className="">
      <section className="py-8 px-8 lg:px-24 ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Buildings"]} />
        </div>
        <div>
          <p className="text-[18px] text-justify georgia-regular">
            Forcon Infra stands as a preeminent leader in the field of highway
            and transportation infrastructure construction. Renowned for our
            unwavering commitment to quality, safety, and innovation, the
            company's exceptional team of engineers, architects, and
            construction specialists collaboratively strive to bring each
            project to fruition, setting new benchmarks for excellence.
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
