import React from "react";
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import MaterialHeader from "components/Material/MaterialHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function ConstMaterial() {
    const [searchTerm,setSearchTerm]=useState("");
  const [transaction,settransaction]=useState([])
  // const classes = useStyles();


  useEffect(()=>{
    axios.get("http://localhost:3001/transaction").then((response)=>{
        settransaction(response.data)
    })
  },[])    
  
  const getTotal = () => {
    let total = 0;
    transaction.forEach(tr => {
      if (tr.income > 0) {
        total += tr.income;
      } else {
        total -= tr.expense;
      }
    })
    return total;
  }
  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <MaterialHeader /> 
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <br /> <br /> <br /> <br /> 
      <section>
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/3 px-6 ml={120} ">
              <Link to="/AddnewconstMaterial">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      Add New Material
                </button> <br /><br />
              </Link>
          </div>
          <div className="w-1/3 px-6">
              <Link to="/AddconstMaterial">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      Add Material
                </button> <br /><br />
              </Link>  
          </div>
          <div className="w-1/3 px-6 ml={120} ">
              <Link to="/SupplyconstMaterial">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      Supply Material
                </button> <br /><br />
              </Link>
          </div>
        </div>
      </div>
      <div className={ " flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + "bg-white" } >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1  ">
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
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td> 
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>Cash in Hand: </b>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>{getTotal()}</b>
                  </td>
                </tr>
                <tr
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100" }>
                <th className={ "px-12 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
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
            {transaction.map((record)=>{
                const dt = new Date(record.date);
                const year = dt.getFullYear() + '/';
                const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                const day = ('0' + dt.getDate()).slice(-2);

                return(
              <tr>
                <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
                    {year + month + day}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.receiptno}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.description}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.income}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.expense}
                </td>
              </tr>
                )
              
            })} 
            
            </tbody>
          </table>
        </div>
      </div>
      </section> 
        </div>
        <FooterAdmin />
        </section>
        
        </div>
      </main>
      
    </>
  );
}
