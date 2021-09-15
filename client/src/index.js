import React, { Suspense } from "react";
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
import UserBooking from "components/Appointment/UserBooking";

//Forms
import AddForm from "components/FormTemplate/AddForms.js";
import FormTemplateView from "components/FormTemplate/FormTemplateView.js";
import ActiveForms from "components/FormTemplate/ActiveForms.js"; 
import UserFormView from "components/FormTemplate/UserFormView.js"; 

//Notice 
import AddNotice from "components/Notice/AddNotice.js";
import NoticeTable from "components/Notice/noticeView.js";
import AllNotice from "components/Notice/AllNoticeView.js";

//SMSmessage
import AddMessage from "components/Notice/AddMessage.js";
import MessageView from "components/Notice/MessageView.js";
import AllMessageView from "components/Notice/AllMessageView.js";


//FINANCE
//Petty Cash
import Receive from "components/Finance/CashReceive.js";
import Expense from "components/Finance/AddExpenses.js";
import PettyCash from "components/Finance/ViewPettycash.js"; 

//Forum
import AddForum from "components/Forum/AddForum.js";
import ForumTable from "components/Forum/ForumView.js";
import ForumView from "components/Pages/Formpage.js";
import AddNewForum from "components/Forum/AddNewForum.js"

//Fund
import Fund from "components/Finance/ViewFund"; 
import ReceivedFund from "components/Finance/AddReceivedfund.js";
import AllocateFund from "components/Finance/AllocateFund.js";


import CardPageVisitsCheck from "components/Cards/CardPageVisitsCheck.js";

//Donation
import Donation from "components/Finance/ViewDonation";
import AddDonation from "components/Finance/AddDonation";
import Donate2 from "components/Donation/donate2";

//MATERIAL
//Const Material
import ConstMaterial from "components/Material/ConstMaterial";
import AddnewconstMaterial from "components/Material/AddnewconstMaterial";
import AddconstMaterial from "components/Material/AddconstMaterial";
import SupplyconstMaterial from "components/Material/SupplyconstMaterial";
import ViewSupplyConst from "components/Material/ViewSuppliedconstMaterial";
import UpdateconstMaterial from "components/Material/UpdateconstMaterial";

//Agri Material
import AgriMaterial from "components/Material/AgriMaterial";
import AddnewagriMaterial from "components/Material/AddnewagriMaterial";
import AddagriMaterial from "components/Material/AddagriMaterial";
import SupplyagriMaterial from "components/Material/SupplyagriMaterial";
import ViewSupplyAgri from "components/Material/ViewSuppliedagriMaterial";

//Other Material
import OtherMaterial from "components/Material/OtherMaterial";
import AddnewotherMaterial from "components/Material/AddnewotherMaterial";
import AddotherMaterial from "components/Material/AddotherMaterial";
import SupplyotherMaterial from "components/Material/SupplyotherMaterial";
//import ForumTable from "components/Forum/ForumView";

import ViewSupplyOther from "components/Material/ViewSuppliedotherMaterial";

//Users(Material)
import Const from "components/Material/Users/Const.js";
import Agri from "components/Material/Users/Agri.js";
import Other from "components/Material/Users/Other.js";



import './i18';

import App from 'App.js';
// import Register from "components/Votors/RegisterVillager.js";

// Projects
import PresentProject from "components/Projects/PresentProjects";
import FutureProject from "components/Projects/FutureProject";
import PastProject from "components/Projects/PastProject";
import AddProjects from "components/Projects/AddProjects";
import EditProjects from "components/Projects/EditProject";




ReactDOM.render(
 

  <BrowserRouter>
    <Switch>

{/* 
      <Route path="/RegisterVillager" component={Register} /> */}
        
      {/* <App /> */}
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
      <Route path="/ViewRequests"  component={ViewRequests} />
      <Route path="/ViewConfirmed"  component={ViewConfirmed} />
      <Route path="/UserView"  component={UserView} />
      <Route path="/UserBooking/:availID"  component={UserBooking} />
      
      {/* FormTemplate */}
      <Route path="/AddForms"  component={AddForm} />
      <Route path="/FormTemplateView"  component={FormTemplateView} />
      <Route path="/ActiveForms"  component={ActiveForms} />
      <Route path="/UserFormView"  component={UserFormView} />
      

      {/* Notices */}
      <Route path="/AddNotice"  component={AddNotice} />
      <Route path="/noticeView"  component={NoticeTable} />
      <Route path="/AllNoticeView"  component={AllNotice} />
      {/* sms */}
      <Route path="/AddMessage"  component={AddMessage} />
      <Route path="/MessageView"  component={MessageView} />
      <Route path="/AllMessageView"  component={AllMessageView} />
      

      {/* FINANCE */}
      {/* Petty Cash */}
      <Route path="/CashReceive" component={Receive}/>
      <Route path="/AddExpenses" component={Expense}/>
      <Route path="/ViewPettycash" component={PettyCash}/>

      {/* Forum */}
      <Route path="/AddForum" component={AddForum}/>
      <Route path="/AddNewForum" component={AddNewForum}/>
      <Route path="/forumView" component={ForumTable}/>
      <Route path="/Forumpage" component={ForumView}/>

      {/* Fund */}
      <Route path="/ViewFund" component={Fund}/>
      <Route path="/AddReceivedfund" component={ReceivedFund}/>
      <Route path="/AllocateFund" component={AllocateFund}/>
      {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}

      {/* Donation */}
      <Route path="/ViewDonation" component={Donation}/>
      <Route path="/AddDonation" component={AddDonation}/>
      <Route path="/donate2" component={Donate2}/>


      {/* <Route path="/viewwdonation" component={ViewDonation}/> */}
      {/* Material */}
      {/* Const Material */}
      <Route path="/ConstMaterial" component={ConstMaterial}/>
      <Route path="/AddnewconstMaterial" component={AddnewconstMaterial}/>
      <Route path="/AddconstMaterial" component={AddconstMaterial}/>
      <Route path="/SupplyconstMaterial" component={SupplyconstMaterial}/>
      <Route path="/ViewSuppliedconstMaterial" component={ViewSupplyConst}/>
      <Route path="/UpdateconstMaterial/:materialid" component={UpdateconstMaterial}/>

      {/* Agri Material */}
      <Route path="/AgriMaterial" component={AgriMaterial}/>
      <Route path="/AddnewagriMaterial" component={AddnewagriMaterial}/>
      <Route path="/AddagriMaterial" component={AddagriMaterial}/>
      <Route path="/SupplyagriMaterial" component={SupplyagriMaterial}/>
      <Route path="/ViewSuppliedagriMaterial" component={ViewSupplyAgri}/>

      {/* Other Material */}
      <Route path="/OtherMaterial" component={OtherMaterial}/>
      <Route path="/AddnewotherMaterial" component={AddnewotherMaterial}/>
      <Route path="/AddotherMaterial" component={AddotherMaterial}/>
      <Route path="/SupplyotherMaterial" component={SupplyotherMaterial}/>
      <Route path="/ViewSuppliedotherMaterial" component={ViewSupplyOther}/>

      {/* Users(Material) */}
      <Route path ="/Users/Const" component={Const}/>
      <Route path ="/Users/Agri" component={Agri}/>
      <Route path ="/Users/Other" component={Other}/>

      {/* Upload */}
      {/* <Route path ="Upload/FileUpload" component={FileUpload}/>
      <Route path ="Upload/Message" component={Message}/>
      <Route path ="Upload/Progress" component={Progress}/> */}
      {/* people */}


      <Route path="/CardPageVisitsCheck" component={CardPageVisitsCheck}/>
      {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}

      {/* Projects */}
      <Route path="/PresentProjects" component={PresentProject}/>
      <Route path="/FutureProject" component={FutureProject}/>
      <Route path="/PastProject" component={PastProject}/>
      <Route path="/AddProjects" component={AddProjects}/>
      <Route path="/EditProject" component={EditProjects}/>


    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
