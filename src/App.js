import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Holder from "./components/Holder/Holder";
import { BrowserRouter } from "react-router-dom";

const styles = {
  app: {
    height: "100vh",
    backgroundColor: "#0c0c0c"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.app}>
          <Holder />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
