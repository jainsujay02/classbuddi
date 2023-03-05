import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/ClassBuddi-logo.svg";
import Avatar from "../images/Avatar.svg";
import {
  signInWithGoogle,
  signOutOfApp,
  auth,
  newUser,
} from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

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
  avatar: {
    flexGrow: "1",
    cursor: "pointer",
    display: "flex",
    height: "3.5vw",
    marginRight: "2rem",
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

function Navbar() {
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginStatus(true);
        if (!newUser) {
          navigate("/dashboard");
        }
        else {
          // navigate to sign up page
          navigate("/")
        }
      } else {
        setLoginStatus(false);
        navigate("/");
      }
    });
  }, []);

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
            about us
          </Link>
          {!loginStatus && (
            <Link to="/join" className={classes.link}>
              join
            </Link>
          )}
          {!loginStatus && (
            <Button
              variant="text"
              onClick={() => {
                const x = signInWithGoogle();
                console.log(x);
              }}
              style={{ fontFamily: "Poppins", textDecoration: "none" }}
            >
              log in
            </Button>
          )}
          {loginStatus && (
            <Button variant="text" onClick={signOutOfApp}>
              log out
            </Button>
          )}
        </div>
        {loginStatus && (
          <Link to="/">
            <img src={Avatar} alt="avatar" className={classes.avatar}></img>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
