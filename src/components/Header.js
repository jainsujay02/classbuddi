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
import { useAuth } from "./hooks/useAuth";

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
  const [u, setU] = useState(null);
  const navigate = useNavigate();
  const { login, logout } = useAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Header user", user);
      if (user) {
        setLoginStatus(true);
        setU(user);
        login(user);
      } else {
        setLoginStatus(false);
        logout();
      }
    });
  }, []);

  const classes = useStyles();
  if (!u) return (<p>Loading...</p>);
  console.log("printing in header" , u.photoURL);
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
              sx={{
                "&.MuiButtonBase-root:hover": {
                    boxShadow: '0px 0px 10px #00000066'}
              }}
              style={{textTransform: 'none', marginLeft: '12px', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: "17.5px", color: "#333333"}}
              onClick={async () => {
                await signInWithGoogle();
                console.log("returned from sign in");
                if (newUser){
                  navigate("/profile");
                } else {
                  navigate("/dashboard");
                }
              }}
            >
              log in
            </Button>
          )}
          {loginStatus && (
            <Button
              variant="text"
              style={{textTransform: 'none', marginLeft: '12px', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: "17.5px", color: "#333333"}}
              onClick={async () => {
                await signOutOfApp();
                console.log("returned from sign out");
                navigate("/");
              }}
            >
              log out
            </Button>
          )}
        </div>
        {loginStatus && (
          <Link to="/">
            <img src={u.photoURL} referrerPolicy="no-referrer" alt="avatar" className={classes.avatar}></img>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
