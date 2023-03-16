import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import styled from "styled-components";
import { Autocomplete } from "@mui/material";
import { Dashboard } from "@material-ui/icons";
import CourseStudentList from "./CourseStudentList.js";
import Stack from "@mui/material/Stack";

import { useParams } from "react-router-dom";

//firebase imports
import {
  filterUsers,
  firebase,
  getStudentsInClass,
  auth,
} from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const interests = [
  { label: "Art and Art History" },
  { label: "Board Games" },
  { label: "Blogging" },
  { label: "Cooking and Baking" },
  { label: "Dancing" },
  { label: "DIY and Crafts" },
  { label: "Fashion and Beauty" },
  { label: "Gardening" },
  { label: "Hiking" },
  { label: "Horseback Riding" },
  { label: "Journaling" },
  { label: "Music and Music Production" },
  { label: "Photography" },
  { label: "Playing Badminton" },
  { label: "Reading" },
  { label: "Running" },
  { label: "Singing" },
  { label: "Soccer" },
  { label: "Swimming" },
  { label: "Tabletop Roleplaying Games" },
  { label: "Traveling and Exploring New Places" },
  { label: "Volleyball" },
  { label: "Volunteering" },
  { label: "Watching Live Sports" },
  { label: "Watching Movies" },
  { label: "Watching Stand-up Comedy" },
  { label: "Watching TV Shows" },
  { label: "Writing (e.g. poetry, short stories, screenplays, etc.)" },
];

const years = [
  { label: "1st year" },
  { label: "2nd year" },
  { label: "3rd year" },
  { label: "4th year" },
  { label: "5th year" },
];

const Container = styled.div`
background-color: #EEEEEE;
height: auto;
color: #333333;
padding: 30px 10px 40px 270px;
align:
  text-align: center;
  h1{
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
  }

/* margin-bottom: 60px; */
`;

const defaultValues = {
  years: [],
  interests: [],
};

const CourseForm = () => {
  let { id } = useParams();
  console.log(id);

  const [checkValues, setcheckValues] = useState(defaultValues);
  const [students, setStudents] = useState(null);
  // allStudentsInCourse holds the list of all students in the course "id"
  const [allStudentsInCourse, setAllStudentsInCourse] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("running use effect from course page");
        console.log(id);
        const otherStudentPromise = getStudentsInClass(
          id
        );
        otherStudentPromise.then((value) => {
          // @Sujay - the request assumes that every student has a distinct name
          // The value here is an array of students with the name id, but there would\
          // always be only one element because of our assumption.
          console.log("logging from course page", value);
          setAllStudentsInCourse(value);
        });
      } else {
        console.log("Dashboard Err!!");
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkValues);

    //update database
    const course = id; //"CS 35L – Software Construction Lab";
    console.log(filterUsers(checkValues.years, checkValues.interests, course));

    const promise = filterUsers(
      checkValues.years,
      checkValues.interests,
      course
    );
    promise.then((value) => {
      setStudents(value);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setcheckValues({
      ...checkValues,
      [name]: value,
    });
  };
  if (!allStudentsInCourse) return <p>Loading ...</p>;
  // console.log("top level students", students);

  if (!students)
  return (
    <Container>
      <h1 align = "left"> {id}</h1>
      <br></br>
      <h4 align="left"> Filter your search</h4>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing="75">
          <Grid item xs={2} direction="column" align={"right"}>
            <Autocomplete
              multiple
              sx={{ backgroundColor: "white" }}
              id="matching-year"
              name="matching-year"
              label="matching-year"
              type="text"
              onChange={(event, value) => {
                let yearList = [];
                value.forEach((year) => {
                  yearList.push(year.label);
                });

                setcheckValues({
                  ...checkValues,
                  years: yearList,
                });
              }} //** on every input change hitting my api**
              options={years}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="year" placeholder="year" />
              )}
            />
          </Grid>
          <Grid item xs={4} direction="column" align={"left"}>
            <Autocomplete
              multiple
              sx={{ backgroundColor: "white" }}
              id="matching-interests-input"
              name="matching-interests"
              label="matching-interests"
              type="text"
              onChange={(event, value) => {
                let interestList = [];
                value.forEach((interests) => {
                  interestList.push(interests.label);
                });

                setcheckValues({
                  ...checkValues,
                  interests: interestList,
                });
              }} //** on every input change hitting my api**
              options={interests}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="matching interests"
                  placeholder="matching interests"
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              type="submit"
              size="large"
              style={{ height: 60, width: 200 }}
              sx={{ backgroundColor: "white" }}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </form>

      <Stack direction="row" spacing={8} sx={{ ml: 28, mt: 5,}} align="center">
        <CourseStudentList props = {allStudentsInCourse} />
      </Stack>
    </Container>
  );

  return (
    <Container>
      <h1 align = "left"> {id}</h1>
      <br></br>
      <h4 align="left"> Filter your search</h4>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing="75">
          <Grid item xs={2} direction="column" align={"right"}>
            <Autocomplete
              multiple
              sx={{ backgroundColor: "white" }}
              id="matching-year"
              name="matching-year"
              label="matching-year"
              type="text"
              onChange={(event, value) => {
                let yearList = [];
                value.forEach((year) => {
                  yearList.push(year.label);
                });

                setcheckValues({
                  ...checkValues,
                  years: yearList,
                });
              }} //** on every input change hitting my api**
              options={years}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="year" placeholder="year" />
              )}
            />
          </Grid>
          <Grid item xs={4} direction="column" align={"left"}>
            <Autocomplete
              multiple
              sx={{ backgroundColor: "white" }}
              id="matching-interests-input"
              name="matching-interests"
              label="matching-interests"
              type="text"
              onChange={(event, value) => {
                let interestList = [];
                value.forEach((interests) => {
                  interestList.push(interests.label);
                });

                setcheckValues({
                  ...checkValues,
                  interests: interestList,
                });
              }} //** on every input change hitting my api**
              options={interests}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="matching interests"
                  placeholder="matching interests"
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              type="submit"
              size="large"
              style={{ height: 60, width: 200 }}
              sx={{ backgroundColor: "white" }}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </form>

      <Stack direction="row" spacing={8} sx={{ ml: 28, mt: 5,}} align="center">
        <CourseStudentList props = {students} />
      </Stack>
    </Container>
  );
};

export default CourseForm;
