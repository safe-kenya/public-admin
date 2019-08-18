import React from "react";
import { Route, HashRouter } from "react-router-dom";

import home from "./pages/home";
import students from "./pages/students";
// import login from "./pages/auth/login";
// import recover from "./pages/auth/recover";
// import register from "./pages/auth/register";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={home} />
      <Route path="/students" component={students} />
      <Route path="/parents" component={students} />
      <Route path="/drivers" component={students} />
      <Route path="/busses" component={students} />
      <Route path="/routes" component={students} />
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
