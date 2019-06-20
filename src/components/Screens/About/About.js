import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Fade } from "react-animation-components";
import PropTypes from "prop-types";
import backgroundImage from "../../../assets/about-background.png";
import ImageOne from "../../../assets/image-1.jpg";
import ImageTwo from "../../../assets/image-2.jpg";
import ImageThree from "../../../assets/image-3.jpg";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  aboutHolder: {
    color: "white",
    padding: 0,
    position: "absolute",
    top: 150,
    left: -20,
    width: "100%",
    userSelect: 'none',
    [theme.breakpoints.up("sm")]: {
      top: 270
    },
    [theme.breakpoints.up("md")]: {
      padding: "50px 50px 50px 0",
      top: 220,
      left: -70
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 70px 70px 70px",
      left: 30,
      top: 170
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0px 280px 70px 280px",
      marginTop: 55
    }
  },
  aboutTitle: {
    fontSize: 55,
    fontWeight: 900,
    lineHeight: 1,
    marginTop: 20,
    position: "relative",
    userSelect: 'none',
    "& > span": {
      display: "block"
    },
    "&::after": {
      content: "''",
      display: "block",
      borderTop: "5px solid #0B34FF",
      borderLeft: "5px solid #0B34FF",
      borderRight: "5px solid transparent",
      borderBottom: "5px solid transparent",
      transform: "rotate(-25deg)",
      width: 10,
      height: 10,
      position: "absolute",
      top: 0,
      left: 160,
      [theme.breakpoints.up("md")]: {
        left: 205,
        top: -20
      }
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 44
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 68
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 80
    }
  },
  aboutCareerBtn: {
    textTransform: "uppercase",
    fontWeight: 700,
    position: "relative",
    marginTop: 30,
    display: "inline-block",
    cursor: "pointer",
    "& > .material-icons": {
      position: "absolute",
      top: -2,
      left: 65,
      transition: "all .6s"
    },
    "&:hover": {
      "& > .material-icons": {
        left: 75
      }
    }
  },
  believeSpan: {
    display: "inline-block",
    "& > span": {
      position: "relative",
      "&::after": {
        content: "''",
        display: "block",
        width: 30,
        height: 30,
        backgroundColor: "#0B34FF",
        position: "absolute",
        left: -8,
        bottom: 45,
        borderRadius: "50%",
        [theme.breakpoints.up("sm")]: {
          bottom: 37
        },
        [theme.breakpoints.up("md")]: {
          bottom: 55,
          left: -5
        },
        [theme.breakpoints.up("xl")]:{
          left: -2,
          bottom: 65
        }
      }
    }
  },
  peopleSpan: {
    display: "inline-block",
    position: "relative",
    "&::after": {
      content: "''",
      display: "block",
      width: 10,
      height: 10,
      backgroundColor: "#0B34FF",
      position: "absolute",
      left: 210,
      bottom: 7,
      [theme.breakpoints.up("sm")]: {
        left: 180
      },
      [theme.breakpoints.up("md")]: {
        left: 265
      },
      [theme.breakpoints.up("xl")]:{
        left: 305
      }
    }
  },
  weSpan: {
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: "''",
      display: "block",
      borderTop: "5px solid #0B34FF",
      borderLeft: "5px solid #0B34FF",
      borderRight: "5px solid #0B34FF",
      borderBottom: "5px solid #0B34FF",
      transform: "rotate(-25deg)",
      width: 10,
      height: 10,
      position: "absolute",
      bottom: 15,
      left: 300,
      [theme.breakpoints.up("md")]: {
        left: 400,
        bottom: 40
      }
    }
  },
  backgroundImage: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "absolute",
      bottom: 0,
      right: -12,
      "& > img": {
        width: 315
      }
    },
    [theme.breakpoints.up("md")]: {
      "& > img": {
        width: "100%"
      }
    },
    [theme.breakpoints.up("lg")]:{
      right: 30
    },
    [theme.breakpoints.up("xl")]: {
      right: 250
    }
  },
  aboutBottomHolder: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      position: "relative",
      top: 50,
      maxWidth: 600,
      justifyContent: "space-between"
    },

  },
  aboutItem: {
    width: 170,
    height: 90,
    border: "10px solid #0B34FF",
    position: "relative",
    cursor: "pointer",
    "&:nth-child(1)": {
      backgroundImage: `url(${ImageOne})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "block"
    },
    "&:nth-child(2)": {
      backgroundImage: `url(${ImageTwo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "block"
    },
    "&:nth-child(3)": {
      backgroundImage: `url(${ImageThree})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "block"
    },
    "&:hover": {
      "& > div": {
        bottom: -32
      }
    },
    "& > div": {
      fontSize: 16,
      textTransform: "uppercase",
      transition: "all .3s ease-in",
      fontWeight: 700,
      position: "absolute",
      bottom: -22,
      left: 10
    }
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
      top: -175,
      left: 600
    }
  }
});

class About extends Component {
  componentDidMount = () => {
    this.props.hideMap();
  }
  render() {
    const { classes } = this.props;
    return (
      <Fade in>
        <div className={classes.aboutHolder}>
          <div className={classes.aboutTopHolder}>
            <div className={classes.aboutTitle}>
              <span className={classes.weSpan}>We </span>
              <span className={classes.believeSpan}>
                believe <span>in</span>
              </span>
              <span className={classes.passionateSpan}>passionate</span>
              <span className={classes.peopleSpan}>people</span>
            </div>
            <div className={classes.aboutCareerBtn}>
              Career<i className="material-icons"> arrow_right_alt </i>
            </div>
            <div className={classes.backgroundImage}>
              {" "}
              <img src={backgroundImage} alt="background" />{" "}
            </div>
          </div>
          <div className={classes.aboutBottomHolder}>
            <div className={classes.aboutItem}>
              <div>Winners</div>
            </div>
            <div className={classes.aboutItem}>
              <div>Philosophy</div>
            </div>
            <div className={classes.aboutItem}>
              <div>History</div>
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

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
