import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Fade } from "react-animation-components";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import classNames from "classnames";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import { FormHelperText } from "@material-ui/core";

const styles = theme => ({
  hireHolder: {
    color: "white",
    padding: 0,
    position: "absolute",
    top: 100,
    left: -20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      left: -10
    },
    [theme.breakpoints.up("md")]: {
      padding: 50,
      top: 190,
      left: -75
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 190px 70px 190px",
      left: -30
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0px 280px 70px 280px",
      marginTop: 55
    }
  },
  checkbox: {
    border: "2px solid #ffffff",
    fontWeight: 600,
    backgroundColor: "transparent",
    margin: 0,
    width: "100%",
    cursor: "pointer",
    "& > span": {
      fontSize: 16,
      userSelect: "none"
    },
    "& > span > span": {
      color: "white"
    }
  },
  checked: {
    border: "2px solid #3F52B5",
    backgroundColor: "#3F52B5"
  },
  selectHolder: {
    width: "50%",
    padding: "5px 0",
    [theme.breakpoints.up("md")]: {
      padding: 5,
      width: "33.3%"
    },
    "&:nth-child(odd)": {
      paddingRight: 5
    }
  },
  hireUsTitle: {
    display: "block",
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontSize: 50
    }
  },
  formGroup: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 15
  },
  formHolder: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-evenly"
    }
  },
  formControl: {
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "33.3%"
    },
    "&:nth-child(1)": {
      paddingRight: 5
    }
  },
  input: {
    color: "#ffffff"
  },
  label: {
    color: "#ffffff",
    [theme.breakpoints.up("md")]: {
      fontSize: 20
    },
    "&:nth-child(2)": {
      marginLeft: 5
    }
  },
  warningText: {
    color: "red",
    "& > span": {
      display: "block"
    }
  },
  warningTextCheckbox: {
    color: "#ffffff",
    width: "100%",
    textAlign: "center",
    userSelect: "none"
  },
  button: {
    backgroundColor: "#0B34FF",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 700,
    width: "100%",
    border: "none",
    lineHeight: "50px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all .7s",
    [theme.breakpoints.up("md")]: {
      width: "300px",
      marginTop: 20
    },
    "&:hover": {
      opacity: "0.8"
    }
  },
  form: {
    textAlign: "center"
  }
});

class HireUs extends Component {
  state = {
    planning: false,
    development: false,
    uxDesign: false,
    seo: false,
    coding: false,
    marketing: false,
    name: "",
    email: "",
    nameValid: true,
    formValid: false,
    emailValid: true,
    sent: false
  };
  componentDidMount = () => {
    this.props.hideMap();
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked, sent: false });
  };
  handleInput = name => event => {
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField = (name, value) => {
    let emailValid = this.state.emailValid;
    switch (name) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid === null ? (emailValid = false) : (emailValid = true);
        this.setState({ emailValid: emailValid });
        break;
      case "name":
        value !== ""
          ? this.setState({ nameValid: true })
          : this.setState({ nameValid: false });
        break;
      default:
        break;
    }
    this.validateForm();
  };

  validateForm = () => {
    this.state.emailValid && this.state.nameValid
      ? this.setState({ formValid: true })
      : this.setState({ formValid: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formValid) {
      this.setState({ sent: true });
      let data = {
        name: this.state.name,
        email: this.state.email,
        planning: this.state.planning,
        development: this.state.development,
        uxDesign: this.state.uxDesign,
        seo: this.state.seo,
        coding: this.state.coding,
        marketing: this.state.marketing
      };
      console.log("data", data);
      setTimeout(this.clearFields, 3500);
    }
  };
  clearFields = () => {
    this.setState({
      planning: false,
      development: false,
      uxDesign: false,
      seo: false,
      coding: false,
      marketing: false,
      name: "",
      email: ""
    });
  };

  render() {
    const { classes } = this.props;
    const {
      planning,
      development,
      uxDesign,
      seo,
      coding,
      marketing,
      nameValid,
      emailValid,
      sent
    } = this.state;
    const renderWarningMsgName = nameValid ? null : (
      <FormHelperText className={classes.warningText}>
        Name is required.
      </FormHelperText>
    );
    const renderWarningMsgEmail = emailValid ? null : (
      <FormHelperText className={classes.warningText}>
        You didn't input the correct form. <span>Example: test@email.com</span>
      </FormHelperText>
    );
    const error =
      [planning, development, uxDesign, seo, marketing, coding].filter(v => v)
        .length !== 0;

    const renderWarningMsgBoxes = error ? null : (
      <FormHelperText className={classes.warningTextCheckbox}>
        You have to choose at least one box.
      </FormHelperText>
    );
    const renderSentMessage = sent ? (
      <FormHelperText className={classes.warningTextCheckbox}>
        You request has been sent.
      </FormHelperText>
    ) : null;
    return (
      <Fade in>
        <div className={classes.hireHolder}>
          <h3 className={classes.hireUsTitle}>You want us to do</h3>
          <FormGroup className={classes.formGroup}>
            <div className={classes.selectHolder}>
              <FormControlLabel
                className={classNames(classes.checkbox, {
                  [classes.checked]: planning
                })}
                control={
                  <Checkbox
                    checked={this.state.planning}
                    onChange={this.handleChange("planning")}
                    value="planning"
                    color="primary"
                  />
                }
                label="Planning"
                labelPlacement="end"
              />
            </div>
            <div className={classes.selectHolder}>
              <FormControlLabel
                className={classNames(classes.checkbox, {
                  [classes.checked]: development
                })}
                control={
                  <Checkbox
                    checked={this.state.development}
                    onChange={this.handleChange("development")}
                    value="development"
                    color="primary"
                  />
                }
                label="Development"
              />
            </div>
            <div className={classes.selectHolder}>
              <FormControlLabel
                className={classNames(classes.checkbox, {
                  [classes.checked]: uxDesign
                })}
                control={
                  <Checkbox
                    checked={this.state.uxDesign}
                    onChange={this.handleChange("uxDesign")}
                    value="uxDesign"
                    color="primary"
                  />
                }
                label="UX Design"
              />
            </div>
            <div className={classes.selectHolder}>
              <FormControlLabel
                className={classNames(classes.checkbox, {
                  [classes.checked]: seo
                })}
                control={
                  <Checkbox
                    checked={this.state.seo}
                    onChange={this.handleChange("seo")}
                    value="seo"
                    color="primary"
                  />
                }
                label="SEO"
              />
            </div>
            <div className={classes.selectHolder}>
              <FormControlLabel
                className={classNames(classes.checkbox, {
                  [classes.checked]: coding
                })}
                control={
                  <Checkbox
                    checked={this.state.coding}
                    onChange={this.handleChange("coding")}
                    value="coding"
                    color="primary"
                  />
                }
                label="Coding"
              />
            </div>
            <div className={classes.selectHolder}>
              <FormControlLabel
                className={classNames(classes.checkbox, {
                  [classes.checked]: marketing
                })}
                control={
                  <Checkbox
                    checked={this.state.marketing}
                    onChange={this.handleChange("marketing")}
                    value="marketing"
                    color="primary"
                  />
                }
                label="Marketing"
              />
            </div>
            {renderWarningMsgBoxes}
          </FormGroup>
          <form onSubmit={e => this.handleSubmit(e)} className={classes.form}>
            <FormGroup className={classes.formHolder}>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
              >
                <InputLabel htmlFor="Name" className={classes.label}>
                  Name
                </InputLabel>
                <Input
                  id="Name"
                  name="Name"
                  autoComplete="Name"
                  required
                  onChange={this.handleInput("name")}
                  className={classes.input}
                  value={this.state.name}
                  disableUnderline={true}
                />
                {renderWarningMsgName}
              </FormControl>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
              >
                <InputLabel htmlFor="email" className={classes.label}>
                  Email Address
                </InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  onChange={this.handleInput("email")}
                  className={classes.input}
                  value={this.state.email}
                  disableUnderline={true}
                />
                {renderWarningMsgEmail}
              </FormControl>
            </FormGroup>
            <button className={classes.button}>Send request</button>
            {renderSentMessage}
          </form>
        </div>
      </Fade>
    );
  }
}

HireUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HireUs);
