import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import LogLanding from "views/Loglanding.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

//appointment
import Schedule from "components/Appointment/schedule.js";
import AddNotice from "components/Notice/AddNotice.js";

//Finance
import Receive from "components/Finance/CashReceive.js";
import Expense from "components/Finance/AddExpenses.js";
import Donation from "components/Finance/ViewDonation";
import PettyCash from "components/Finance/ViewPettycash";       
import Fund from "components/Finance/ViewFund"; 
import ReceivedFund from "components/Finance/AddReceivedfund.js";
import AllocateFund from "components/Finance/AllocateFund.js";


import CardPageVisitsCheck from "components/Cards/CardPageVisitsCheck.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/Loglanding" exact component={LogLanding} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
      
      {/* Appointment  */}
      <Route path="/schedule"  component={Schedule} />
      <Route path="/AddNotice"  component={AddNotice} />

      {/* Finance */}
      <Route path="/CashReceive" component={Receive}/>
      <Route path="/AddExpenses" component={Expense}/>
      <Route path="/ViewDonation" component={Donation}/>
      <Route path="/ViewPettycash" component={PettyCash}/>
      <Route path="/ViewFund" component={Fund}/>
      <Route path="/AddReceivedfund" component={ReceivedFund}/>
      <Route path="/AllocateFund" component={AllocateFund}/>

      <Route path="/CardPageVisitsCheck" component={CardPageVisitsCheck}/>
      {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
