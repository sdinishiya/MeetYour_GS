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

//FINANCE
//Petty Cash
import Receive from "components/Finance/CashReceive.js";
import Expense from "components/Finance/AddExpenses.js";
import PettyCash from "components/Finance/ViewPettycash"; 

//Fund
import Fund from "components/Finance/ViewFund"; 
import ReceivedFund from "components/Finance/AddReceivedfund.js";
import AllocateFund from "components/Finance/AllocateFund.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";

//Donation
import Donation from "components/Finance/ViewDonation";


//MATERIAL
//Const Material
import ConstMaterial from "components/Material/ConstMaterial";
import AddnewconstMaterial from "components/Material/AddnewconstMaterial";
import AddconstMaterial from "components/Material/AddconstMaterial";
import SupplyconstMaterial from "components/Material/SupplyconstMaterial";

//Agri Material
import AgriMaterial from "components/Material/AgriMaterial";

//Other Material
import OtherMaterial from "components/Material/OtherMaterial";

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

      {/* Material */}
      {/* Const Material */}
      <Route path="/ConstMaterial" component={ConstMaterial}/>
      <Route path="/AddnewconstMaterial" component={AddnewconstMaterial}/>
      <Route path="/AddconstMaterial" component={AddconstMaterial}/>
      <Route path="/SupplyconstMaterial" component={SupplyconstMaterial}/>

      {/* Agri Material */}
      <Route path="/AgriMaterial" component={AgriMaterial}/>


      {/* Other Material */}
      <Route path="/OtherMaterial" component={OtherMaterial}/>



    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
