import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import {
  Example04,
  Exercise1,
  Solution1,
  Example05,
  Exercise2,
  Solution2,
  Example06,
  Exercise3,
  Solution3,
  Example07,
} from "./examples/index";
// CSS
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1>Redux</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <aside>
            <nav className="nav flex-column">
              <NavLink to="#" className="nav-link">
                01
              </NavLink>
              <NavLink to="#" className="nav-link">
                02
              </NavLink>
              <NavLink to="#" className="nav-link">
                03
              </NavLink>
              <NavLink to="/04" className="nav-link">
                04
              </NavLink>
              <NavLink to="/exercise1" className="nav-link">
                Exercise 1
              </NavLink>
              <NavLink to="/solution1" className="nav-link">
                Solution 1
              </NavLink>
              <NavLink to="/05" className="nav-link">
                05
              </NavLink>
              <NavLink to="/exercise2" className="nav-link">
                Exercise 2
              </NavLink>
              <NavLink to="/solution2" className="nav-link">
                Solution 2
              </NavLink>
              <NavLink to="/06" className="nav-link">
                06
              </NavLink>
              <NavLink to="/exercise3" className="nav-link">
                Exercise 3
              </NavLink>
              <NavLink to="/solution3" className="nav-link">
                Solution 3
              </NavLink>
              <NavLink to="/07" className="nav-link">
                07
              </NavLink>
            </nav>
          </aside>
        </div>
        <div className="col-9">
          <Route exact path="/04" component={Example04} />
          <Route exact path="/exercise1" component={Exercise1} />
          <Route exact path="/solution1" component={Solution1} />
          <Route exact path="/05" component={Example05} />
          <Route exact path="/exercise2" component={Exercise2} />
          <Route exact path="/solution2" component={Solution2} />
          <Route exact path="/06" component={Example06} />
          <Route exact path="/exercise3" component={Exercise3} />
          <Route exact path="/solution3" component={Solution3} />
          <Route exact path="/07" component={Example07} />
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
