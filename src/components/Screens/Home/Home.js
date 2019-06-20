import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import homeImage from "../../../assets/image_1.png";
import { NavLink } from "react-router-dom";
import { Fade } from 'react-animation-components'
import PropTypes from "prop-types";

const styles = theme => ({
  homeHolder: {
    color: "white",
    padding: 0,
    position: "absolute",
    top: 150,
    left: -20,
    width: "100%",
    userSelect: 'none',
    [theme.breakpoints.up("md")]: {
      padding: 50,
      top: 280,
      left: -90
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 70px 70px 70px",
      left: 0,
      top: 180
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0px 280px 70px 280px",
      marginTop: 55
    }
  },
  homeText: {
    fontSize: 55,
    fontWeight: 900,
    lineHeight: 1,
    marginTop: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 44,
      "& > span": {
        display: "block"
      }
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 55
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 80
    }
  },
  hireBtn: {
    marginTop: 40,
    position: "relative",
    display: "inline-block",
    zIndex: 9999,
    padding: "5px 17px 5px 5px",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: 14,
    overflow: "hidden",
    width: 100,
    cursor: "pointer",
    userSelect: "none",
    "-webkit-tap-highlight-color": "transparent",
    "&:hover": {
      "& > span": {
        left: 0
      }
    },
    "& > .material-icons": {
      position: "absolute",
      top: 2,
      left: 70
    },
    "& > span": {
      backgroundColor: "#0f33ff",
      width: 110,
      height: 50,
      display: "block",
      position: "absolute",
      left: 30,
      bottom: -12,
      transition: "left .2s ease-in-out",
      zIndex: -1
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      width: 120,
      "& > span": {
        width: 140
      },
      "& > .material-icons": {
        fontSize: 35,
        left: 85
      }
    }
  },
  homeLineHolder: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginTop: 45,
      position: "relative"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 70
    }
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "#787878",
    display: "block",
    position: "relative",
    marginBottom: 60,
    "&::before": {
      content: "''",
      display: "block",
      width: 40,
      height: 5,
      backgroundColor: "#0f33ff",
      position: "absolute",
      top: 0,
      left: 10
    }
  },
  homeLineText: {
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  homeLineTextItem: {
    opacity: 0.2,
    marginBottom: 30,
    cursor: "pointer",
    transition: "all .6s",
    "&:hover": {
      opacity: 1
    },
    "& > h3": {
      fontSize: 16,
      textTransform: "uppercase",
      fontWeight: "600",
      marginTop: 0
    }
  },
  homeImage: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "absolute",
      bottom: 275,
      right: -10,
      "& > img": {
        width: 300,
        height: 300
      }
    },
    [theme.breakpoints.up("md")]: {
      bottom: 196,
      right: -10,
      "& > img": {
        width: 450,
        height: 450
      }
    },
    [theme.breakpoints.up("lg")]: {
      bottom: 179,
      "& > img": {
        width: 500,
        height: 500
      }
    },
    [theme.breakpoints.up("xl")]: {
      "& > img": {
        width: 600,
        height: 600
      }
    }
  },
  hireLink: {
    color: "white"
  }
});

class Home extends Component {
  componentDidMount = () => {
    this.props.hideMap();
  }
  render() {
    const { classes } = this.props;
    return (
      <Fade in>
      <div className={classes.homeHolder} onScroll={this.handleScroll}>
        <div className={classes.homeText}>
          Your next <span>interactive</span> experience
        </div>
        <NavLink to="/hire-us" className={classes.hireLink}>
          <div className={classes.hireBtn}>
            {" "}
            Hire Us<i className="material-icons"> arrow_right_alt </i>
            <span />
          </div>
        </NavLink>
        <div className={classes.homeLineHolder}>
          <div className={classes.homeImage}>
            <img src={homeImage} alt="Home graphic" />
          </div>
          <div className={classes.line} />
          <div className={classes.homeLineText}>
            <div className={classes.homeLineTextItem}>
              <h3>Title & Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do
                da leweot.
              </p>
            </div>
            <div className={classes.homeLineTextItem}>
              <h3>Title & Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do
                da leweot.
              </p>
            </div>
            <div className={classes.homeLineTextItem}>
              <h3>Title & Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do
                da leweot.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
