import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

// components
import Navbarloglanding from "components/Navbars/Navbarlanding.js";
import UserHeader from "components/Headers/UserHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function UserBooking() {
    const { appID } = useParams();
    const [newnic, setNewNic] = useState("");
    const [newname, setNewName] = useState("");
    const [newhome_no, setNewHome_no] = useState("");
    const [newaddress, setNewAddress] = useState("");
    const [newphone, setNewPhone] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newdes, setNewDes] = useState("");
    const [newbook_status, setNewbook_status] = useState("1");

  //let history = useHistory();

  const [Dt, setDt] = useState([]);
  const [BookingList, setBookingList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/appview").then((response) => {
      setBookingList(response.data);
    });
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/appdetails", {
      params: {
        appID: appID,
      },
    });

    setDt(response.data[0]);
    setNewNic(response.data[0].nic);
    setNewName(response.data[0].name);
    setNewHome_no(response.data[0].home_no);
    setNewAddress(response.data[0].address);
    setNewPhone(response.data[0].phone);
    setNewEmail(response.data[0].email);
    setNewDes(response.data[0].des);
    setNewbook_status(response.data[0].des);

    console.log(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [appID]);

  const AddBook = (appID) => {
    console.log("UI reach");
    console.log(appID);
    axios
      .put("http://localhost:3001/add-app-booking", {
        nic: newnic,
        name: newname,
        home_no: newhome_no,
        address: newaddress,
        phone: newphone,
        email: newemail,
        des: newdes,
        book_status:newbook_status,
        appID: appID,
      })
      .then((response) => {
        console.log("booked");
      });
    //alert(" Appointment Booked successfully ");
    // history.push("/Appointment/thankyou");
  };
  return (
    <>
    
  <main>
    <Navbarloglanding />
      {/* Header */}
      <UserHeader />
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br />  
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold text-center justify-center">
                        MAKE APPOINTMENT BOOKINGS 
                    </h1>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        NIC
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" 
                        defaultValue={newnic}
                        onChange={(event) => {
                          setNewNic(event.target.value);
                        }}
                        required
                        placeholder="NIC*"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Villager Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="name" 
                        defaultValue={newname}
                        onChange={(event) => {
                          setNewName(event.target.value);
                        }}
                        required
                        placeholder="Name*"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Home No./ Home Name
                      </label>
                      <input type="text"
                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         name="home_no"
                         defaultValue={newhome_no}
                         onChange={(event) => {
                           setNewHome_no(event.target.value);
                         }}
                         required
                         placeholder="House No. / House Name*"
                        />
                    </div>
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Address
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="address"
                        defaultValue={newaddress}
                        onChange={(event) => {
                          setNewAddress(event.target.value);
                        }}
                        required
                        placeholder="Address"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Contact 
                      </label>
                      <input type="int"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="phone"
                        defaultValue={newphone}
                        onChange={(event) => {
                          setNewPhone(event.target.value);
                        }}
                        required
                        placeholder="Contact No.*"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        E-mail 
                      </label>
                      <input type="text"
                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         name="email"
                         defaultValue={newemail}
                         onChange={(event) => {
                          setNewEmail(event.target.value);
                         }}
                         required
                         placeholder="E-mail Address"
                        />
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Topic
                      </label>
                      <input type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          name="des"
                          defaultValue={newdes}
                          onChange={(event) => {
                            setNewDes(event.target.value);
                          }}
                          required
                          placeholder="Additional Note If Any"
                        />
                    </div>

                    <box>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={AddBook(appID)}
                      > Book 
                      </button>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      > 
                        Cancel  
                      </button>
                    </div>
                    </box>

                  </div>
                </div>
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
