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

export default function ProjectPastTable({ color }) {

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
    axios.get("http://localhost:3001/projectpastview").then((response) => {
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


      </section>

      <section className="pb-20 bg-white-200 -mt-24">
        
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32">

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-Agri.jpg").default} />
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
                  src={require("assets/img/img-Agri.jpg").default} />
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
                  src={require("assets/img/img-Agri.jpg").default} />
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