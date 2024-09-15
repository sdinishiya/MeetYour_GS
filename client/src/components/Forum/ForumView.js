import * as React from "react";
import { PropTypes, props } from "prop-types";
import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Navbarloglanding from "components/Navbars/Navbarlanding";
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { DataGrid, GridRowModel } from '@mui/x-data-grid';

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { SettingsPowerRounded } from "@material-ui/icons";

export default function ForumTable({ color }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [forumID, setID] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [confirm, setConfirm] = useState("");
  const [active_status, setStatus] = useState("");

  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  // const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [forums, setforums] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/forumview").then((response) => {
      setforums(response.data)
    })
  }, [])

  function createData(
    name: string,
  ) {
    return { name };
  }

  const rows = [
    createData('Hello. Thank you for the post')
  ];

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

      </section>

      <section className="pb-20 bg-white-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32">

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">
                <blockquote className="relative p-8 mb-4">

                  <h4 className="text-xl font-bold text-black">
                    Topic 1
                  </h4>
                  <p className="text-md font-light mt-2 text-black">
                    Hello
                  </p>
                  <br />

                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Reply
                        </button>

                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TextField id="outlined-basic" label="ID Number" variant="outlined" required /><br />
                              <TextField id="standard-basic" label="Message" variant="standard" />
                              <br />
                              <button className="bg-emerald-350 text-white active:bg-emerald-350 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Submit
                              </button>
                            </Box>


                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>

                  <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Report
                  </button>

                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Comments
                        </button>

                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Comments</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows.map((row) => (
                                      <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          {row.name}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                              <br />
                            </Box>


                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>

                </blockquote>
              </div>

            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">

                <blockquote className="relative p-8 mb-4">

                  <h4 className="text-xl font-bold text-black">
                    Topic 2
                  </h4>
                  <p className="text-md font-light mt-2 text-black">
                    Hello
                  </p>
                  <br />
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Reply
                        </button>

                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TextField id="outlined-basic" label="ID Number" variant="outlined" required /><br />
                              <TextField id="standard-basic" label="Message" variant="standard" />
                              <br />
                              <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Submit
                              </button>
                            </Box>


                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>

                  <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Report
                  </button>

                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Comments
                        </button>

                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Comments</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows.map((row) => (
                                      <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          {row.name}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                              <br />
                            </Box>


                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </blockquote>

              </div>

            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">

                <blockquote className="relative p-8 mb-4">

                  <h4 className="text-xl font-bold text-black">
                    Topic 3
                  </h4>
                  <p className="text-md font-light mt-2 text-black">
                    Hello
                  </p>
                  <br />
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Reply
                        </button>

                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TextField id="outlined-basic" label="ID Number" variant="outlined" required /><br />
                              <TextField id="standard-basic" label="Message" variant="standard" />
                              <br />
                              <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Submit
                              </button>
                            </Box>


                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>

                  <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Report
                  </button>

                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Comments
                        </button>

                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <Box
                              component="form"
                              sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Comments</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows.map((row) => (
                                      <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          {row.name}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                              <br />
                            </Box>


                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>


                </blockquote>

              </div>

            </div>
            {forums.map((record) => {

              return (<blockquote className="relative p-8 mb-4">

                <h4 className="text-xl font-bold text-black">
                  {record.topic}
                </h4>
                <p className="text-md font-light mt-2 text-black">
                  {record.postText}
                </p>
                <br />
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Reply
                      </button>

                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <Typography sx={{ p: 2 }}>
                          <Box
                            component="form"
                            sx={{
                              '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField id="outlined-basic" label="ID Number" variant="outlined" required /><br />
                            <TextField id="standard-basic" label="Message" variant="standard" />
                            <br />
                            <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                              Submit
                            </button>
                          </Box>


                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>

                <button className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  Report
                </button>

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <button variant="contained" {...bindTrigger(popupState)} className="bg-emerald-350 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Comments
                      </button>

                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <Typography sx={{ p: 2 }}>
                          <Box
                            component="form"
                            sx={{
                              '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Comments</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row) => (
                                    <TableRow
                                      key={row.name}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {row.name}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <br />
                          </Box>


                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>


              </blockquote>)

            })}
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">



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