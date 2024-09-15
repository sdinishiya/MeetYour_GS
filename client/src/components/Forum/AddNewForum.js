import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import Navbarloglanding from "components/Navbars/Navbarlanding";
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios';
import validator from 'validator'
import props from 'prop-types';

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function ForumTable({ color }) {

  //const [searchTerm, setSearchTerm] = useState("");
  //const [forums, setforums] = useState([]);
  const [forumID, setID] = useState("");
  const [topic, setTopic] = useState("");
  const [postText, setpostText] = useState("");
  const [uploadDate,setUploadDate] = useState("");
  const [emailID, setemailID] = useState("");
  const [active_status, setactive_status] = useState("");
  const history = useHistory();
  // const classes = useStyles();


  // useEffect(() => {
  //   axios.get("http://localhost:3001/forumview").then((response) => {
  //     setforums(response.data)
  //   })
  // }, [])

const [IDError, setIDError] = useState('')
  const validateID = (event) => {
    var emailID = event.target.value;
   
    if (validator.isID(emailID)) {
      setIDError('Valid ID :)')
    } else {
      setIDError('Enter valid ID!')
    }
  }


  const forumadd = () => {
    console.log(forumID);

    axios.post('http://localhost:3001/AddNewForum', {
      topic: topic,
      postText: postText,
      uploadDate: uploadDate,
      emailID: emailID,
      active_status: active_status,

    }).then(() => {
      console.log("success");
    });
      alert("Message is sent");
      history.push("/ForumView");

    
  };

  return (
    <>
      <Navbarloglanding transparent />

      <UserHeader />
      <section>

        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/3 px-6">
              <Link to="/AddNewForum">
                <button className="bg-emerald-450 text-white active:bg-emerald-450 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit" >
                  Add New Forums
                </button>
              </Link>
              <Link to="/ForumView">
                <button className="bg-emerald-450 text-white active:bg-emerald-450 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit" >
                  View Forums
                </button> <br /><br />
              </Link>
            </div>

          </div>
        </div>

        <div className="flex-auto p-5 lg:p-8">
          <h1 className="text-2xl font-semibold text-center justify-center">
            ADD YOUR FORUM
          </h1>
          <div className="relative w-full mb-3 mt-8">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Topic
            </label>
            <input type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              name="topic" onChange={(event) => {setTopic(event.target.value); }}
              required
              placeholder="Topic" />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Message
            </label>
            <textarea
              rows="4"
              cols="80"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              name="description" onChange={(event) => {setpostText(event.target.value); }}
              required
              placeholder="Type a message to notify..."
            />
          </div>
          <div className="relative w-full mb-3 mt-8">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Date Uploaded
            </label>
            <input type="date"
              name="uploadDate" onChange={(event) => {setUploadDate(event.target.value); }}
              required
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>

          <div className="relative w-full mb-3 mt-8">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              ID Confirmation
            </label>
            <input type="text"
              name="confirm" onChange={(event) => {setemailID(event.target.value);{/*validateID(event)*/}}}
              required
              placeholder="Type your ID No"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>

          <box>
            <div className="text-center mt-6">
              <button
                className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={forumadd}
              > Add
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