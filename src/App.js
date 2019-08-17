import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import studentsList from "./pages/students/list";
import login from "./pages/auth/login";
import recover from "./pages/auth/recover";
import register from "./pages/auth/register";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={studentsList} />
        <Route exact path="/login" component={login} />
        <Route exact path="/recover" component={recover} />
        <Route exact path="/register" component={register} />
      </div>
    </Router>
  );
}

export default App;
