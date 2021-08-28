import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import props from 'prop-types';

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function BookTable({ color }) {

const [searchTerm,setSearchTerm]=useState("");

const [notices,setnotices]=useState([])
  // const classes = useStyles();


  useEffect(()=>{
    axios.get("http://localhost:3001/noticeview").then((response)=>{
        setnotices(response.data)
    })
  },[])

  return (
    <>
  <section> 
    <div className="container px-6 mx-auto">
      <div className="flex flex-wrap">
        <div className="w-1/3 px-6">
            <Link to="/landing">
              <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit" >
                    Add New Notices
              </button> <br /><br />
            </Link>
        </div>
        
      </div>
    </div>
      <div className={ "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +  (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")} >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Notice Details Table
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                <th className={
                    "px-6 align-middle border " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  >
                    Notice Topic   
                </th>
                <th className={
                    "px-6 align-middle border " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  >
                    Description  
                </th>
                <th className={
                    "px-6 align-middle border " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  >
                    Date Uploaded   
                </th>
                <th className={
                    "px-6 align-middle border " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  >
                    Expiry Date  
                </th>
                <th className={
                    "px-6 align-middle border " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  >
                    Status  
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {notices.map((notice)=>{
                const dt = new Date(notice.uploadDate);
                const year = dt.getFullYear() + '/';
                const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                const day = ('0' + dt.getDate()).slice(-2);

                const dp = new Date(notice.expDate);
                const year1 = dp.getFullYear() + '/';
                const month1 = ('0' + (dp.getMonth() + 1)).slice(-2) + '/';
                const day1 = ('0' + dp.getDate()).slice(-2);

                return(
              <tr>
                <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className ={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    {notice.topic}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {notice.description}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {year + month + day}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {year1 + month1 + day1}
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
      </div>
    
  </section>
    </>
  );
}

BookTable.defaultProps = {
  color: "light",
};

BookTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
