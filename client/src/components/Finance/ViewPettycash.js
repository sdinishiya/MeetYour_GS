import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import props from 'prop-types';


// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";
// import FinanceHeader from "components/Finance/FinanceHeader.js";

export default function PettyCash({ color }) {

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
    {/* <FinanceHeader/> */}
    <section> 
    <div className="container px-6 mx-auto">
      <div className="flex flex-wrap">
      <div className="w-1/3 px-6 ml={120} ">
            <Link to="/CashReceive">
              <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit" >
                    Add Income
              </button> <br /><br />
            </Link>
          </div>
          <div className="w-1/3 px-6">
            <Link to="/AddExpenses">
              <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit" >
                    Add Expenses
              </button> <br /><br />
            </Link>
          </div>
        
            {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                    <div className="relative flex w-full flex-wrap items-stretch">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                    type="text"
                    placeholder="Search here..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    />
                    </div>
                </form> */}

        
        
    </div>
    </div>
      <div className={ "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + "bg-white" } >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3
                className={ "font-bold text-lg " + "text-emerald"  } >
                Petty Cash Account
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
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100" }>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Date 
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Receipt No  
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Description  
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Income  
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Expense  
                </th>

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
                  <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
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

// NoticeTable.defaultProps = {
//   color: "light",
// };

// BookTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
