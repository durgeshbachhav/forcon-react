import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Highway = () => {
  const data = [
      {
          "no": 1,
          "name of work": "improvement to nh-3 to sayyad pimpri lakhalgaon hinganvedhe jakhori shinde road ",
          "department": "public works department (p.w.d.) ",
          "date": "2014-2017",
          "location": "nashik ",
          "total  rs (in crores)": 30.59
      },
      {
          "no": 2,
          "name of work": "improvement to sinner sakur phata darnagonde phata wadivarhe (n.h.3) road ",
          "department": "public works department (p.w.d.) ",
          "date": "2014-2017",
          "location": "igatpuri / nashik",
          "total  rs (in crores)": 14.37
      },
      {
          "no": 3,
          "name of work": "improvement to beed parali gangakhed road ",
          "department": "public works department (p.w.d.) ",
          "date": "2015-2018",
          "location": "parali",
          "total  rs (in crores)": 15.95
      },
      {
          "no": 4,
          "name of work": "improvement to manjarsumba kaij lokhandi sawargaon ambajogai ahemadpur road ",
          "department": "public works department (p.w.d.) ",
          "date": "2017-2018",
          "location": "ambajogai .",
          "total  rs (in crores)": 18.1
      },
      {
          "no": 5,
          "name of work": "improvement to parali dharmapuri road",
          "department": "public works department (p.w.d.) ",
          "date": "2017-2018",
          "location": "parali",
          "total  rs (in crores)": 15.84
      },
      {
          "no": 6,
          "name of work": "improvement to ambajogai mandwa mandekhel nathra koudgaon sirsala sonpeth road ",
          "department": "public works department (p.w.d.) ",
          "date": "2017-2018",
          "location": "parali",
          "total  rs (in crores)": 25.85
      },
      {
          "no": 7,
          "name of work": "improvement to n.h.211 to rakshasbhuwan to patharwala chowk road km 0/00 to 19/600 mdr-24 tal. georai ",
          "department": "public works department (p.w.d.) ",
          "date": "2018-2019",
          "location": "georai ",
          "total  rs (in crores)": 17.79
      },
      {
          "no": 8,
          "name of work": "nhai - 6 laning pimpalgaon-nashik-gonde section of nh-3",
          "department": "national highway",
          "date": "2018-2022",
          "location": "nashik",
          "total  rs (in crores)": 56.78
      },
      {
          "no": 9,
          "name of work": " widening & asphalting of tapovan link road from aurangabad road to laxminarayan bridge to dream city junction ",
          "department": "nashik municipal corporation",
          "date": "2015-2017",
          "location": "nashik",
          "total  rs (in crores)": 13.68
      },
      {
          "no": 10,
          "name of work": "development of inner ring road from canal road junction to vijay mamta junction to takali for 30 m width",
          "department": "nashik municipal corporation",
          "date": "2015-2017",
          "location": "nashik",
          "total  rs (in crores)": 25.5
      },
      {
          "no": 11,
          "name of work": "widening & asphalting of gangapur road from ashok stambh to jehan cirecle to bardan phata to nam limit",
          "department": "nashik municipal corporation",
          "date": "2015-2018",
          "location": "nashik",
          "total  rs (in crores)": 39.98
      },
      {
          "no": 12,
          "name of work": "development of sadhugram in 163 acr area at east side of kapila river at tapovan, panchavati, ",
          "department": "nashik municipal corporation",
          "date": "2015-2017",
          "location": "nashik",
          "total  rs (in crores)": 28.86
      },
      {
          "no": 13,
          "name of work": "resurfacing of various main road in nashik west division ",
          "department": "nashik municipal corporation",
          "date": "2016-2018",
          "location": "nashik",
          "total  rs (in crores)": 12.1
      },
      {
          "no": 14,
          "name of work": "resurfacing of existing asphalt roads in p.no.11 satpur midc, nmc ",
          "department": "nashik municipal corporation",
          "date": "2020-20222",
          "location": "nashik",
          "total  rs (in crores)": 15.74
      },
      {
          "no": 15,
          "name of work": "providing resurfacing / widening of main road & colony road at various places at p. no. 23 & 30 in nashik east division",
          "department": "nashik municipal corporation",
          "date": "2021-2024",
          "location": "nashik",
          "total  rs (in crores)": 21.48
      },
      {
          "no": 16,
          "name of work": "proposed developmwnt of 30m dp road at sant sawatamali marg",
          "department": "nashik municipal corporation",
          "date": "2023-2024",
          "location": "nashik",
          "total  rs (in crores)": 15.77
      },
      {
          "no": 17,
          "name of work": "development of sinnar to nashik section nh 50, (from km 177/000 to km 201/350) 4- lane on ppp following defot (toll) in the state of maharashtra city portion from km 199/050 km 201/350 ",
          "department": "other contracts",
          "date": "2021-2023",
          "location": "nashik",
          "total  rs (in crores)": 11.54
      },
      {
          "no": 18,
          "name of work": " e-232; providing and laying 300mm, 450mm, 500mm, 800mm & 1000 mm dia. r.c.np3 class pipe sewer along ghatkopar mankhurd link road from shivaji nagar junction to sion panvel highway along with its   improvement in rigid pavement and its side strips in flexible pavement ",
          "department": "sub-contracts",
          "date": "2019-203",
          "location": "panvel / nashik",
          "total  rs (in crores)": 82.61
      },
      {
          "no": 19,
          "name of work": "abb infra buidtech pvt. ltd. : ham-nsk 55 a : improvement to nampur-satana-kalwan-vani-pimpalgaon-niphad-sinnar road sh-27 km 98/300 to 154/00 tal. satana, kalwan, dindori, ",
          "department": "sub-contracts",
          "date": "2020-2024",
          "location": "niphad / nashik",
          "total  rs (in crores)": 51.76
      },
      {
          "no": 20,
          "name of work": "providing & laying 300mm, 450mm, 500mm, 800mm & 1000mm dia rcc np 3 class pipe sewer along ghatkopar-mankhurd link road from shivaji nagar junction to sion panvel highway along with its improvement in rigid pavement and its side strips in flexible pavement in m/east ward.",
          "department": "brihanmumabi municipal corposrcation (bmc),",
          "date": "2018-2022",
          "location": "panvel / mumbai",
          "total  rs (in crores)": 123.14
      },
      {
          "no": 21,
          "name of work": "6 laning pimplagoan- nashik- gonde section of nh-3 from km. 380.000 to km. 440.000 in the state of maharashtra- road safety / balance works on epc mode",
          "department": "national highway authority of india",
          "date": "2017-2019",
          "location": "nashik",
          "total  rs (in crores)": 56.85
      },
      {
          "no": 22,
          "name of work": "ham-nsk-55a improvement to nampur satana kalwan vani pimpalgona niphad sinnar road sh-27 km. 38/300 to 154/00 tal. satana, kalwan, dindori, niphad, sinnar.",
          "department": "public work department, maharashtra",
          "date": "2019-2022",
          "location": "nashik",
          "total  rs (in crores)": 64.58
      },
      {
          "no": 23,
          "name of work": "improvements to nh-211 to rakshasbhuvan km. 0/00 to 19/600 tal. georai dist. beed (concrete pavement work)",
          "department": "public work department, maharashtra",
          "date": "2017-2018",
          "location": "beed",
          "total  rs (in crores)": 19.54
      },
      {
          "no": 24,
          "name of work": "resurfacing of existing asphalt roads in p. no. 11 satpur midc, nmc nashik",
          "department": "nashik municipal corporation",
          "date": "2019-2021",
          "location": "nashik",
          "total  rs (in crores)": 17.63
      },
      {
          "no": 25,
          "name of work": "development of dp road in ward no1 panchawati, nashik & widening and construction of bridge on waghadi river in gunjalbaba nagar,",
          "department": "public work department, maharashtra",
          "date": "2 year",
          "location": "nashik",
          "total  rs (in crores)": 16.99
      }
  ]
  

  const headings = [
    "Sr. No",
    "Name of Work",
    "DepartMent",
    "Date",
    "Location",
    "Total Rs(In Crores)",
  ];

  return (
    <div >
      <section className="py-8 px-8 lg:px-24 ">
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
        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Highway;
