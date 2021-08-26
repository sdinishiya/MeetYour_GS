import React from "react";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Schedule() {
    const [appointID,setID] = useState("");
    const [gsname,setName] = useState("");
    const [date,setDate] = useState("");
    const [startTime,setStartTime] = useState("");
    const [endTime,setEndTime] = useState("");
    const [description,setDescription] = useState("");
    const history  = useHistory();

    const schedule = ()=>{
      console.log(appointID);

      const d1 = new Date();
      const d2 = new Date(date);
      if (d2.getTime() < d1.getTime()) {
        alert("Date must be greater than today");
        return;
      }

       axios.post('http://localhost:3001/schedule',{
        gsname:gsname,
        date:date,
        startTime: startTime,
        endTime:endTime,
        description:description,

        }).then(()=>{
           console.log("success");
           //history.push("/Appointment/viewScheduled");
         });
    };
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Schedule Appointments
                </h2>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Add Available Time Slots For Appointments
                    </h4>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        GS Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setName(event.target.value);}} 
                        required
                        placeholder="GS Name"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="date" onChange={(event)=>{setDate(event.target.value);}} 
                        required
                        placeholder="Date"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Start Time
                      </label>
                      <input type="time"
                        name="startTime" onChange={(event)=>{setStartTime(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        End Time
                      </label>
                      <input type="time"
                        name="endTime" onChange={(event)=>{setEndTime(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        name="description" onChange={(event)=>{setDescription(event.target.value);}} 
                        required
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={schedule}
                      >
                        Schedule Slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
