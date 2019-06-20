import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  timeLine: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      position: "absolute",
      left: 80,
      top: 70
    },
    [theme.breakpoints.up("xl")]: {
      left: 280,
      top: 135
    }
  },
  timeLineList: {
    color: "white",
    listStyle: "none",
    position: "relative",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 260,
    top: 150,
    "&::before": {
      content: "''",
      display: "block",
      width: 2,
      height: 550,
      backgroundColor: "gray",
      position: "absolute",
      opacity: 0.4,
      left: 0,
      top: -145
    }
  },
  timeLineListItem: {
    margin: "40px 10px",
    cursor: "pointer",
    userSelect: "none",
    color: "white",
    zIndex: 9999,
    "& > .name": {
      position: "relative",
      left: 15,
      opacity: 0,
    },
    "& > .number": {
      opacity: 0.5,
      transition: "all .5s"
    },
    "&::before": {
      content: "''",
      display: "block",
      width: 2,
      height: 3,
      backgroundColor: "white",
      position: "relative",
      left: -10,
      top: 13
    }
  },
  listItemActive: {
    "&::before": {
      backgroundColor: "#0f33ff"
    },
    "& > .number": {
      position: "absolute",
      left: -50,
      opacity: 1,
      transition: "all .5s"
    },
    "& > .name": {
      display: "block",
      opacity: 1,
      transition: "all .5s"
    }
  }
});

class TimeLine extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.timeLine}>
        <ul className={classes.timeLineList}>
          <NavLink
            to="/"
            exact
            className={classes.timeLineListItem}
            activeClassName={classes.listItemActive}
          >
            <span className="number">01</span>
            <span className="name">Home</span>
          </NavLink>
          <NavLink
            to="/work"
            exact
            className={classes.timeLineListItem}
            activeClassName={classes.listItemActive}
          >
            <span className="number">02</span>
            <span className="name">Work</span>
          </NavLink>
          <NavLink
            to="/about"
            exact
            className={classes.timeLineListItem}
            activeClassName={classes.listItemActive}
          >
            <span className="number">03</span>
            <span className="name">About</span>
          </NavLink>
          <NavLink
            to="/contact"
            exact
            className={classes.timeLineListItem}
            activeClassName={classes.listItemActive}
          >
            <span className="number">04</span>
            <span className="name">Contact</span>
          </NavLink>
          <NavLink
            to="/hire-us"
            exact
            className={classes.timeLineListItem}
            activeClassName={classes.listItemActive}
          >
            <span className="number">05</span>
            <span className="name">Hire Us</span>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(TimeLine);
