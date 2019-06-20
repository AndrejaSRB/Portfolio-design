import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  mainMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .7s",
    zIndex: 9999,
    opacity: 1
  },
  MenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  MenuListItem: {
    fontSize: 34,
    cursor: "pointer",
    margin: "10px 0",
    color: "#0b8cd5",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    position: "relative",
    textAlign: "center",
    transform: "rotateX(0deg) rotateY(20deg)",
    transition: "all .7s",
    display: "block",
    [theme.breakpoints.up("md")]: {
      fontSize: 54
    },
    "&:hover": {
      transform: "rotateX(-10deg) rotateY(20deg)",
      "& > span": {
        opacity: 1
      }
    },
    "&:focus": {
      outline: "none"
    },
    "& > span": {
      width: 140,
      height: 10,
      display: "block",
      backgroundColor: "white",
      opacity: 0,
      transition: "all .7s",
      position: "absolute",
      left: -2,
      bottom: 22,
      borderRadius: "5px"
    }
  },
  closeBtn: {
    color: "white",
    position: "absolute",
    right: 20,
    top: 20,
    cursor: "pointer",
    "& > .material-icons": {
      fontSize: 25,
      fontWeight: 700
    }
  },
  activeTab: {
    color: "white",
    transform: "rotateX(-10deg) rotateY(20deg)"
  }
});

class Menu extends Component {
  state = {
    navigationSections: ["Home", "Works", "About", "Contact", "Hire us"]
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainMenu}>
        <ul className={classes.MenuList}>
          <NavLink
            exact
            to="/"
            className={classes.MenuListItem}
            onClick={this.props.hideMenu}
            activeClassName={classes.activeTab}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/work"
            className={classes.MenuListItem}
            onClick={this.props.hideMenu}
            activeClassName={classes.activeTab}
          >
            Work
          </NavLink>
          <NavLink
            exact
            to="/about"
            className={classes.MenuListItem}
            onClick={this.props.hideMenu}
            activeClassName={classes.activeTab}
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className={classes.MenuListItem}
            onClick={this.props.hideMenu}
            activeClassName={classes.activeTab}
          >
            Contact
          </NavLink>
          <NavLink
            exact
            to="/hire-us"
            className={classes.MenuListItem}
            onClick={this.props.hideMenu}
            activeClassName={classes.activeTab}
          >
            Hire Us
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
