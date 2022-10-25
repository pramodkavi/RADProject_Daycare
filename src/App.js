import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

// Import files of gardian

import EditEvent from "./components/edit-Event.component";
import CreateEvent from "./components/create-Event.component";
import EventList from "./components/Event-list.component";
import Report from "./components/Report";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div>
      <Navbar />

      <div>
        <br />
        <Route path="/" exact component={Home} />
        {/*Routes for gardian */}
        
        <Route path="/gardian" component={EventList} />
        <Route path="/gardian/edit/:id" component={EditEvent} />
        <Route path="/gardian/create" component={CreateEvent} />
        <Route path="/gardian/Report" component={Report} />

        {/*Routes for Children */}

        {/*Routes for Teachers */}

        {/*Routes for Applications */}


      </div>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
