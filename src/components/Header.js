import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../images/ClassBuddi-logo.svg";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginRight: "5%",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    display: "flex",
    height: "10vw",
    margin: "10%",
  },
  link: {
    textDecoration: "none",
    color: "#333333",
    fontSize: "18px",
    fontFamily: "Poppins",
    cursor: "pointer",
    padding: "1.5rem",
  },
}));
// The value of loginStatus depends on whether the user is authenticated or not
const loginStatus = true;

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ background: "#EEEEEE" }}>
      <CssBaseline />
      <Toolbar>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.logo}></img>
        </Link>
        <div className={classes.navlinks}>
          {loginStatus && (
            <Link to="/dashboard" className={classes.link}>
              dashboard
            </Link>
          )}
          {loginStatus && (
            <Link to="/search" className={classes.link}>
              search
            </Link>
          )}
          <Link to="/about" className={classes.link}>
            about
          </Link>
          <Link to="/join" className={classes.link}>
            join
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
