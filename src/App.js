import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { creatorAction } from "./redux/actions";
import SignIn from "./pages/SignIn";
import { connect } from "react-redux";
import { SET_TOKEN } from "./redux/actions/type";
import Detail from "./pages/Detail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/detail/:course_id" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("t");
    if (token) {
      console.log("app token");
      this.props.dispatch(creatorAction(SET_TOKEN, token));
    }
  }
}
export default connect()(App);
