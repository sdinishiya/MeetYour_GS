import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import ForumHeader from "components/Forum/ForumHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default function AddForum() {
  const [forumID, setID] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [confirm, setConfirm] = useState("");
  const [active_status, setStatus] = useState("");
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");
  const [forums, setforums] = useState([])
  // const classes = useStyles();


  useEffect(() => {
    axios.get("http://localhost:3001/forumview").then((response) => {
      setforums(response.data)
    })
  }, [])

  const forumadd = () => {
    console.log(forumID);

    axios.post('http://localhost:3001/addnewforum', {
      topic: topic,
      description: description,
      uploadDate: uploadDate,
      confirm: confirm,
      active_status: active_status,

    }).then(() => {
      console.log("success");

    });

    alert(" Added successfully ");
    history.push("/ForumView");
  };
  return (
    <>

      <main>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <ForumHeader />
          <section className="pb-18 relative block bg-white">
            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
              <br /> <br /> <br /> <br />
              <section className="relative block py-18 lg:pt-0 ">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                        <div className="flex-auto p-5 lg:p-10">
                          <h1 className="text-2xl font-semibold text-center justify-center">
                            PUBLISH YOUR FORUM
                          </h1>
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Topic
                            </label>
                            <input type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              name="topic" onChange={(event) => { setTopic(event.target.value); }}
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
                              name="description" onChange={(event) => { setDescription(event.target.value); }}
                              required
                              placeholder="Type a message to notify..."
                            />
                          </div>
                          <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Date Uploaded
                            </label>
                            <input type="date"
                              name="uploadDate" onChange={(event) => { setUploadDate(event.target.value); }}
                              required
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                          </div>
                          {/* <div className="relative w-full mb-3 mt-8">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                              Confirmation
                            </label>
                            <input type="text"
                              name="expDate" onChange={(event) => { setConfirm(event.target.value); }}
                              required
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                          </div> */}

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
                      </div>
                    </div>
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