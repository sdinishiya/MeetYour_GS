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
import ViewScheduled from "components/Appointment/ViewScheduled.js";
import Schedule from "components/Appointment/schedule.js";
import UserView from "components/Appointment/UserView.js";
import ViewRequests from "components/Appointment/ViewRequests.js";
import ViewConfirmed from "components/Appointment/ViewConfirmed.js";


//Notice 
import AddNotice from "components/Notice/AddNotice.js";
import NoticeTable from "components/Notice/noticeView.js";

//FINANCE
//Petty Cash
import Receive from "components/Finance/CashReceive.js";
import Expense from "components/Finance/AddExpenses.js";
import PettyCash from "components/Finance/ViewPettycash"; 

//Fund
import Fund from "components/Finance/ViewFund"; 
import ReceivedFund from "components/Finance/AddReceivedfund.js";
import AllocateFund from "components/Finance/AllocateFund.js";


import CardPageVisitsCheck from "components/Cards/CardPageVisitsCheck.js";

//Donation
import Donation from "components/Finance/ViewDonation";
import AddDonation from "components/Finance/AddDonation";

//MATERIAL
//Const Material
import ConstMaterial from "components/Material/ConstMaterial";
import AddnewconstMaterial from "components/Material/AddnewconstMaterial";
import AddconstMaterial from "components/Material/AddconstMaterial";
import SupplyconstMaterial from "components/Material/SupplyconstMaterial";

//Agri Material
import AgriMaterial from "components/Material/AgriMaterial";
import AddnewagriMaterial from "components/Material/AddnewagriMaterial";
import AddagriMaterial from "components/Material/AddagriMaterial";
import SupplyagriMaterial from "components/Material/SupplyagriMaterial";

//Other Material
import OtherMaterial from "components/Material/OtherMaterial";
import AddnewotherMaterial from "components/Material/AddnewotherMaterial";
import AddotherMaterial from "components/Material/AddotherMaterial";
import SupplyotherMaterial from "components/Material/SupplyotherMaterial";

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
      <Route path="/ViewScheduled"  component={ViewScheduled} />
      <Route path="/schedule"  component={Schedule} />
      <Route path="/UserView"  component={UserView} />
      <Route path="/ViewRequests"  component={ViewRequests} />
      <Route path="/ViewConfirmed"  component={ViewConfirmed} />

      {/* Notices */}
      <Route path="/AddNotice"  component={AddNotice} />
      <Route path="/noticeView"  component={NoticeTable} />

      {/* FINANCE */}
      {/* Petty Cash */}
      <Route path="/CashReceive" component={Receive}/>
      <Route path="/AddExpenses" component={Expense}/>
      <Route path="/ViewPettycash" component={PettyCash}/>

      {/* Fund */}
      <Route path="/ViewFund" component={Fund}/>
      <Route path="/AddReceivedfund" component={ReceivedFund}/>
      <Route path="/AllocateFund" component={AllocateFund}/>
 {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}

      {/* Donation */}
      <Route path="/ViewDonation" component={Donation}/>
      <Route path="/AddDonation" component={AddDonation}/>
      {/* <Route path="/viewwdonation" component={ViewDonation}/> */}
      {/* Material */}
      {/* Const Material */}
      <Route path="/ConstMaterial" component={ConstMaterial}/>
      <Route path="/AddnewconstMaterial" component={AddnewconstMaterial}/>
      <Route path="/AddconstMaterial" component={AddconstMaterial}/>
      <Route path="/SupplyconstMaterial" component={SupplyconstMaterial}/>

      {/* Agri Material */}
      <Route path="/AgriMaterial" component={AgriMaterial}/>
      <Route path="/AddnewagriMaterial" component={AddnewagriMaterial}/>
      <Route path="/AddagriMaterial" component={AddagriMaterial}/>
      <Route path="/SupplyagriMaterial" component={SupplyagriMaterial}/>

      {/* Other Material */}
      <Route path="/OtherMaterial" component={OtherMaterial}/>
      <Route path="/AddnewotherMaterial" component={AddnewotherMaterial}/>
      <Route path="/AddotherMaterial" component={AddotherMaterial}/>
      <Route path="/SupplyotherMaterial" component={SupplyotherMaterial}/>



      <Route path="/CardPageVisitsCheck" component={CardPageVisitsCheck}/>
      {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
