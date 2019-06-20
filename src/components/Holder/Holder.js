import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Home from "../Screens/Home/Home";
import About from "../Screens/About/About";
import Work from "../Screens/Work/Work";
import Contact from "../Screens/Contact/Contact";
import HireUs from "../Screens/HireUs/HireUs";
import classNames from "classnames";
import TimeLine from "../TimeLine/TimeLine";
import BGImage from "../../assets/belgrade-map.png";
import CustomRoute from "../../hoc/CustomRoute/CustomRoute";
import { Switch } from "react-router-dom";

const styles = theme => ({
  app: {
    height: "100vh",
    backgroundColor: "#0c0c0c",
    position: "fixed",
    width: "100%",
    overflow: "hidden",
    perspective: "1500px"
  },
  modalView: {
    boxShadow: "0 0 45px 5px rgba(0,0,0,0.85)",
    position: "fixed"
  },
  appHolder: {
    opacity: 1,
    outline: "none",
    transition: "all .9s",
    position: "fixed",
    width: "100%",
    height: "100%"
  },
  appHolderMap: {
    backgroundImage: `url(${BGImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  menu: {
    position: "absolute",
    right: "-100%",
    top: "50%",
    opacity: 1,
    transform: "translateY(-50%)",
    transition: "all .9s",
    zIndex: -1
  },
  menuOpen: {
    opacity: 1,
    transition: "all .9s",
    zIndex: 1,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%"
  },
  containerMenuOpen: {
    zIndex: 999,
    transform: "translateZ(-2000px) translateX(-50%) rotateY(50deg)",
    position: "fixed",
    top: "50%",
    transition: "all 2s",
    transformOrigin: "0% 50%",
    cursor: "pointer"
  },
  container: {
    top: 0,
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "all .6s",
    transformOrigin: "0% 0%",
    outline: "25px solid #0f33ff"
  },
  screenHolder: {
    display: "static",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "100%"
    }
  },
  timeLine: {
    width: "20%"
  },
  screens: {
    width: "90%",
    position: "absolute",
    left: 40,
    top: 0,
    [theme.breakpoints.up("md")]: {
      left: 120
    },
    [theme.breakpoints.up("xl")]: {
      width: "80%",
      left: 320
    }
  }
});

class Holder extends Component {
  state = {
    open: false,
    map: false
  };
  showMenu = e => {
    e.stopPropagation();
    this.setState({ open: true });
  };
  hideMenu = () => {
    this.setState({ open: false });
  };
  showMap = () => {
    this.setState({
      map: true
    });
  };
  hideMap = () => {
    this.setState({
      map: false
    });
  };
  render() {
    const { classes } = this.props;
    const renderMenu = (
      <div
        className={classNames(classes.menu, {
          [classes.menuOpen]: this.state.open
        })}
      >
        <Menu hideMenu={this.hideMenu} />
      </div>
    );
    return (
      <div
        className={classNames(classes.app, {
          [classes.modalView]: this.state.open
        })}
      >
        <div
          className={classNames(classes.container, {
            [classes.containerMenuOpen]: this.state.open
          })}
          onClick={this.hideMenu}
        >
          <div
            className={classNames(
              classes.appHolder,
              {
                [classes.modalView]: this.state.open
              },
              {
                [classes.appHolderMap]: this.state.map
              }
            )}
          >
            <Header showMenu={this.showMenu} />
            <div className={classes.screenHolder}>
              <div className={classes.timeLine}>
                <TimeLine />
              </div>
              <div className={classes.screens}>
                <Switch>
                <CustomRoute
                  path="/about"
                  exact
                  component={About}
                  hideMap={this.hideMap}
                />
                <CustomRoute
                  path="/work"
                  exact
                  component={Work}
                  hideMap={this.hideMap}
                />
                <CustomRoute
                  path="/contact"
                  exact
                  component={Contact}
                  showMap={this.showMap}
                />
                <CustomRoute
                  path="/hire-us"
                  exact
                  component={HireUs}
                  hideMap={this.hideMap}
                />
                <CustomRoute
                  path="/"
                  exact
                  component={Home}
                  hideMap={this.hideMap}
                />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        {renderMenu}
      </div>
    );
  }
}

export default withStyles(styles)(Holder);
