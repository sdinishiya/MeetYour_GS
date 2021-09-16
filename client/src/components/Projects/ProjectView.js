import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Navbarloglanding from "components/Navbars/Navbarlanding";
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios';
import props from 'prop-types';

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function ProjectTable({ color }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setprojects] = useState([]);
  const [projectID, setID] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [confirm, setConfirm] = useState("");
  const [active_status, setStatus] = useState("");
  const history = useHistory();
  // const classes = useStyles();


  useEffect(() => {
    axios.get("http://localhost:3001/projectview").then((response) => {
      setprojects(response.data)
    })
  }, [])

  const forumadd = () => {
    console.log(projectID);

    axios.post('http://localhost:3001/addnewproject', {
      topic: topic,
      description: description,
      uploadDate: uploadDate,
      confirm: confirm,
      active_status: active_status,

    }).then(() => {
      console.log("success");

    });

    alert(" Added successfully ");
    history.push("/ProjectView");
  };

  return (
    <>

      <Navbarloglanding transparent />

      <UserHeader />

      <section>

        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/4 px-6">
              <Link to="/ProjectView">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit" >
                  View On-Going Projects
                </button>
              </Link>
              <Link to="/ProjectFutureView">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit" >
                  View Future Projects
                </button>
              </Link>
              <Link to="/ProjectPastView">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit" >
                  View Past Projects
                </button> <br /><br />
              </Link>
            </div>

          </div>
        </div>

        {/* <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + "bg-white"} >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={"font-semibold text-lg " + "text-blueGray-700"} >
                  Forum Details Table
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                  <th className={"px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Forum Topic
                  </th>
                  <th className={"px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Description
                  </th>
                  <th className={"px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Date Uploaded
                  </th>
                  <th className={"px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Expiry Date
                  </th>
                  <th className={"px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Status
                  </th>

                </tr>
              </thead>
              <tbody>
                {forums.map((forum) => {
                  const dt = new Date(forum.uploadDate);
                  const year = dt.getFullYear() + '/';
                  const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                  const day = ('0' + dt.getDate()).slice(-2);

                  const dp = new Date(forum.expDate);
                  const year1 = dp.getFullYear() + '/';
                  const month1 = ('0' + (dp.getMonth() + 1)).slice(-2) + '/';
                  const day1 = ('0' + dp.getDate()).slice(-2);

                  return (
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <span className={"ml-3 font-bold " + "text-blueGray-600"}>
                          {forum.topic}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {forum.description}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {year + month + day}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {year1 + month1 + day1}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {forum.active_status}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <TableDropdown />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div> */}

      </section>

      <section className="pb-20 bg-white-200 -mt-24">
        
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32">

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-cons.jpg").default} />
                <blockquote className="relative p-8 mb-4">

                  <h4 className="text-xl font-bold text-white">
                    Topic 1
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    In need of resource materials for your on-going projects or inventions?
                    We are here to provide and facilitate your small scale businesses.
                  </p>
                  <br />
                  <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Reply
                  </button><button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Report
                  </button>
                </blockquote>

              </div>

            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-cons.jpg").default} />
                <blockquote className="relative p-8 mb-4">

                  <h4 className="text-xl font-bold text-white">
                    Topic 2
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    In need of resource materials for your on-going projects or inventions?
                    We are here to provide and facilitate your small scale businesses.
                  </p>
                  <br />
                  <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Reply
                  </button><button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Report
                  </button>
                </blockquote>

              </div>

            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-cons.jpg").default} />
                <blockquote className="relative p-8 mb-4">

                  <h4 className="text-xl font-bold text-white">
                    Topic 3
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    In need of resource materials for your on-going projects or inventions?
                    We are here to provide and facilitate your small scale businesses.
                  </p>
                  <br />
                  <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Reply
                  </button><button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Report
                  </button>
                </blockquote>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ForumTable.defaultProps = {
//   color: "light",
// };

// BookTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };