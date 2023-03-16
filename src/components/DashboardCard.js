import Grid from "@mui/material/Grid";
import ProfileIconImage from "./ProfileIconImage";
import ArrowIcon from "./ArrowIcon";
import Box from "@mui/material/Box";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUserDataFromName } from "./utils/firebase";

const CardStyle = styled(Box)({
  width: 348,
  height: 96,
  maxWidth: 348,
  maxHeight: 96,
  fontSize: 16,
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 0px 10px #00000040",
  transitionDuration: "1s",
  "&:hover": {
    boxShadow: "0px 0psx 10px #00000080",
  },
});

const nameStyle = {
  textAlign: "middle",
  color: "#333333",
};

function handleProfileImage(image) {
  if (image === "") {
    image = undefined;
  }
  return image;
}

function DashboardCard(props) {
  console.log("what is the props here?", props);
  let image = handleProfileImage(props.image);
  // state variable to hold student's profile object
  const [student, setStudent] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Header user", user);
      if (user) {
        console.log("running use effect from profile");
        const studentPromise = getUserDataFromName(props.name);
        studentPromise.then((value) => {
          console.log(value);
          setStudent(value[0]);
        });
      } else {
        console.log("dashboard card err!!");
      }
    });
  }, []);

  if (!student?.imgUrl) {
    return (
      <CardStyle>
        <Box
          sx={{
            padding: "22px",
          }}
        >
          <Grid container columnSpacing={5} alignItems="center">
            <Grid item xs={3}>
              <ProfileIconImage image={image} />
            </Grid>
            <Grid item xs={6.5}>
              <div style={nameStyle}>{props.name}</div>
            </Grid>
            <Grid item xs={2}>
              <ArrowIcon />
            </Grid>
          </Grid>
        </Box>
      </CardStyle>
    );
  } else {
    return (
      <CardStyle>
        <Box
          sx={{
            padding: "22px",
          }}
        >
          <Grid container columnSpacing={5} alignItems="center">
            <Grid item xs={3}>
              <img
                src={student.imgUrl}
                style={{
                  flexGrow: "1",
                  cursor: "pointer",
                  display: "flex",
                  height: "3.5vw",
                  marginRight: "2rem",
                  borderRadius: "50%",
                }}
              />
            </Grid>
            <Grid item xs={6.5}>
              <div style={nameStyle}>{props.name}</div>
            </Grid>
            <Grid item xs={2}>
              <ArrowIcon />
            </Grid>
          </Grid>
        </Box>
      </CardStyle>
    );
  }
}
export default DashboardCard;
