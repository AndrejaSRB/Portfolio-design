import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../../assets/Logo.png";
import HamburgerIcon from "../../assets/hamburger.png";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  mainHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    width: "100vw",
    position: "absolute",
    top: 0,
    [theme.breakpoints.up("md")]: {
      padding: 40
    },
    [theme.breakpoints.up("lg")]: {
      padding: "30px 70px"
    },
    [theme.breakpoints.up("xl")]: {
      padding: "30px 280px"
    }
  },
  logo: {
    margin: 0,
    userSelect: "none",
    cursor: "pointer",
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    position: "relative",
    zIndex: 9999,
    "& > span": {
      position: "absolute",
      left: 40,
      bottom: 8,
      fontWeight: 700
    }
  },
  hamburgerIcon: {
    alignSelf: "center",
    cursor: "pointer",
    userSelect: "none",
    zIndex: 9999,
    [theme.breakpoints.up("sm")]: {
      "& > img": {
        width: 25
      }
    }
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainHeader}>
        <NavLink to="/">
          <h1 className={classes.logo}>
            {" "}
            <img src={Logo} alt="Logo" /> <span>Global</span>
          </h1>
        </NavLink>

        <div className={classes.hamburgerIcon} onClick={this.props.showMenu}>
          {" "}
          <img src={HamburgerIcon} alt="Menu" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
