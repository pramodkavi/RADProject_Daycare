import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

// Import files of gardian

import EditEvent from "./components/edit-Event.component";
import CreateEvent from "./components/create-Event.component";
import EventList from "./components/Event-list.component";
import Report from "./components/Report";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />

        {/*Routes for gardian */}
        <Route path="/gardian" component={EventList} />
        <Route path="/gardian/edit/:id" component={EditEvent} />
        <Route path="/gardian/create" component={CreateEvent} />
        <Route path="/gardian/Report" component={Report} />

        {/*Routes for Children */}

        {/*Routes for Teachers */}

        {/*Routes for Applications */}


      </div>{" "}
    </Router>
  );
}

export default App;
