import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Fade } from "react-animation-components";
import PropTypes from "prop-types";
import Slider from '../../Slider/Slider';
import { NavLink } from "react-router-dom";

const styles = theme => ({
  workHolder: {
    color: "white",
    padding: 0,
    position: "absolute",
    top: 90,
    left: -20,
    width: "100%",
    userSelect: "none",
    [theme.breakpoints.up("md")]: {
      padding: 50,
      left: -60,
      top: 180

    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 70px 70px 70px"
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0px 280px 70px 280px",
      marginTop: 55
    }
  },
  workText: {
    fontSize: 30,
    fontWeight: 900,
    lineHeight: 1,
    margin: '20px 0',
    width: '100%',
    textAlign: 'center'
  },
  hireUsBtn: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      color: "#ffffff",
      position: "absolute",
      top: -165,
      left: "50%",
      fontSize: 14,
      fontWeight: 700,
      transform: "translate(-50%,-50%)",
      textTransform: "uppercase",
      backgroundColor: "#0B34FF",
      padding: "5px 20px",
      cursor: "pointer"
    },
    [theme.breakpoints.up("lg")]:{
      top: -130
    },
    [theme.breakpoints.up("xl")]:{
      top: -185,
      left: 750
    }
  }
});

class Work extends Component {
  componentDidMount = () => {
    this.props.hideMap();
  }
  render() {
    const { classes } = this.props;
    return (
      <Fade in>
        <div className={classes.workHolder}>
          <div className={classes.workText}>Select work</div>
          <Slider />
          <NavLink to="/hire-us" className={classes.hireUsBtn}>
            Hire us
          </NavLink>
        </div>
      </Fade>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Work);
