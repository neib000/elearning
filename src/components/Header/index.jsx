import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>

          {this.props.isLogin ? (
            <Button color="inherit">Hello, homie.</Button>
          ) : (
            <>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Signup</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: !!state.credentials.token,
  };
};

export default connect(mapStateToProps)(Header);
