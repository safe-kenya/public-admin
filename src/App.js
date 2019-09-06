import React from "react";
import { Route, HashRouter } from "react-router-dom";

import home from "./pages/home";
import students from "./pages/students";
import parents from "./pages/parents";
import drivers from "./pages/drivers";
import busses from "./pages/busses"
import routes from "./pages/routes"
import schedules from "./pages/schedules"

import login from "./pages/auth/login";
// import recover from "./pages/auth/recover";
// import register from "./pages/auth/register";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={login} />
      <Route exact path="/home" component={home} />
      <Route path="/students" component={students} />
      <Route path="/schedules" component={schedules} />
      <Route path="/parents" component={parents} />
      <Route path="/drivers" component={drivers} />
      <Route path="/busses" component={busses} />
      <Route path="/routes" component={routes} />
      <Route path="/messages" component={students} />
      <Route path="/comms/sms" component={students} />
      <Route path="/comms/email" component={students} />
      <Route path="/reports/bus/:id" component={students} />
      {/* <Route exact path="/login" component={login} />
        <Route exact path="/recover" component={recover} />
        <Route exact path="/register" component={register} /> */}
    </HashRouter>
  );
}

export default App;
