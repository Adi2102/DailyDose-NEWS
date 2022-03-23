import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 16;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="General"
                counrty="in"
                category="General"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="Business"
                counrty="in"
                category="Business"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="Entertainment"
                counrty="in"
                category="Entertainment"
                pageSize={this.pageSize}
              />
            </Route>
            {/* <Route exact path="/general">
              <News
                key="General"
                counrty="in"
                category="General"
                pageSize={this.pageSize}
              />
            </Route> */}
            <Route exact path="/health">
              <News
                key="Health"
                counrty="in"
                category="Health"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/science">
              <News
                key="Science"
                counrty="in"
                category="Science"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="Sports"
                counrty="in"
                category="Sports"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="Technology"
                counrty="in"
                category="Technology"
                pageSize={this.pageSize}
              />
            </Route>
            {/* <Route exact path="/about">
              <News
                key="About Us"
                counrty="in"
                category="About Us"
                pageSize={this.pageSize}
              />
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
