import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Fade } from "react-animation-components";
import PropTypes from "prop-types";
import Resume from "../../../assets/resume.pdf";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  contactHolder: {
    color: "white",
    padding: 0,
    position: "absolute",
    top: 150,
    width: "100%",
    display: "block",
    height: "100vh",
    left: -20,
    [theme.breakpoints.up("md")]: {
      padding: 50,
      top: 180,
      left: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 70px 70px 70px"
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0px 280px 70px 280px",
      marginTop: 55
    }
  },
  contactContentHolder: {
    width: 300,
    margin: "0 auto",
    padding: "35px 0",
    textAlign: "center",
    backgroundColor: "#0C0C0C",
    boxShadow: "0 0 30px 0 rgba(0,0,0,0.75)",
    userSelect: 'none',
    [theme.breakpoints.up("md")]: {
      margin: 0,
      marginLeft: "auto",
    }
  },
  text: {
    "& > span": {
      display: "block",
      margin: "15px 0",
      color: "#ffffff",
      fontWeight: 700
    }
  },
  buttonsGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > a": {
      display: "block",
      textTransform: "uppercase",
      margin: "15px 0"
    }
  },
  github: {
    width: 130,
    padding: "10px 0",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#23282D",
    fontWeight: 700,
    boxShadow: "0 0 30px 0 rgba(0,0,0,0.75)"
  },
  resume: {
    width: 130,
    padding: "10px 0",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#1769ff",
    fontWeight: 700,
    boxShadow: "0 0 30px 0 rgba(0,0,0,0.75)"
  },
  contact: {
    width: 130,
    padding: "10px 0",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#ea4c89",
    fontWeight: 700,
    boxShadow: "0 0 30px 0 rgba(0,0,0,0.75)"
  },
  hireUsBtn: {
    display: "none",
    zIndex: 9999,
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
      cursor: "pointer",
    },
    [theme.breakpoints.up("lg")]:{
      top: -135
    },
    [theme.breakpoints.up("xl")]:{
      top: -185,
      left: 600
    }
  }
});

class Contact extends Component {
  componentDidMount = () => {
    this.props.showMap();
  };
  render() {
    const { classes } = this.props;
    return (
      <Fade in>
        <div className={classes.contactHolder}>
          <div className={classes.contactContentHolder}>
            <div className={classes.text}>
              <span>Belgrade, 11000 Serbia</span>
              <span>andreja.kojadinovic@gmail.com</span>
              <span>+381 66 511 977</span>
            </div>
            <div className={classes.buttonsGroup}>
              <a
                className={classes.github}
                href="https://github.com/AndrejaSRB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a className={classes.resume} href={Resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a
                className={classes.contact}
                href="mailto:andreja.kojadinovic@gmail.com"
                rel="noopener noreferrer"
              >
                Email US
              </a>
            </div>
          </div>
          <NavLink to="/hire-us" className={classes.hireUsBtn}>
            Hire us
          </NavLink>
        </div>
      </Fade>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
