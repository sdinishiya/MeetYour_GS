import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

// components
import Navbarloglanding from "components/Navbars/Navbarlanding";
import Footer from "components/Footers/Footer.js";
import UserHeader from "components/Headers/UserHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function DocumentDetails() {

    const [viewList,setviewList]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/detailsView").then((response)=>{
            setviewList(response.data)
        })
    },[])
    
  return (
    <>
    
  <main>
      <Navbarloglanding transparent />
      {/* Header */}
      <UserHeader />
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      {/* <h3 className="mt-2 mb-4 text-blueGray-500"> Please Bring the following Accoriding to your Appointment Request</h3> */}
        <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-10/12 px-4">


                {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"> */}
                    {/* <div className="rounded-t mb-0 px-4 py-3 border-0"> */}
                    <div className="flex flex-wrap">
                        {viewList.map((record)=>{
                            const dt = new Date(record.uploadDate);
                            const year = dt.getFullYear() + '/';
                            const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                            const day = ('0' + dt.getDate()).slice(-2);

                            const dt1 = new Date(record.expDate);
                            const year1 = dt1.getFullYear() + '/';
                            const month1 = ('0' + (dt1.getMonth() + 1)).slice(-2) + '/';
                            const day1 = ('0' + dt1.getDate()).slice(-2);


              return( 
           
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-350">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{record.topic} </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Average Duraion : {record.duration} Minutes
                    </p>
                    
                    <p className="mt-2 mb-4 text-black">
                    Main Documents : <br />
                    {record.mainDoc}
                    </p>
                    
                    <p className="mt-2 mb-4 text-black">
                     Other Sub Documents : <br />
                     {record.subDoc} 
                    </p>
                    
                  </div>
                </div>
              </div>
              )
            })}

            </div>
            {/* </div> */}
            {/* </div> */}
            </div>
        </div>
        </div>
        </section>
        </div>
        <FooterAdmin />
        </section>
        
      </main>
      
    </>
  );
}
