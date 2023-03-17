import ClassesStacked from "./ClassesStacked";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Container } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { Button } from "@mui/material";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getUserData, auth } from "./utils/firebase";
import { Link } from "react-router-dom";

const Bg = styled.div`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-width;
`;

const Text1 = {
  marginTop: "-20px",
  marginBottom: "0px",
  width: "716px",
  height: "120px",

  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "72px",

  display: "flex",
  alignItems: "center",
  letterSpacing: "-0.25px",

  color: "#333333",
};

const Text2 = {
  marginTop: "38px",
  width: "328px",
  height: "36px",

  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "22px",
  lineHeight: "72px",

  display: "flex",
  alignItems: "center",
  letterSpacing: "-0.25px",

  color: "#333333",
};

const CSClasses = [
  { label: "CS 1 – Computer Science Seminar" },
  { label: "CS 30 – Principles & Practices of Computing" },
  { label: "CS 31 – Intro to Com Sci I" },
  { label: "CS 32 – Intro to Com Sci II." },
  { label: "CS 33 – Intro to Comp. Organization" },
  { label: "CS 35L – Software Construction Lab" },
  { label: "CS M51A – Logic Design of Digital Systems" },
  { label: "CS M119 – Fundamentals of Embedded Network Systems" },
  { label: "CS CM121 – Introduction to Bioinformatics" },
  { label: "CS CM122 – Algorithms in Bioinformatics and Systems Biology" },
  { label: "CS CM124 – Computational Genetics" },
  { label: "CS 130 – Software Engineering" },
  { label: "CS 131 – Programming Languages" },
  { label: "CS 132 – Compiler Construction" },
  { label: "CS 133 – Parallel and Distributed Computing" },
  { label: "CS 136 – Introduction to Computer Security" },
  { label: "CS 143 – Database Systems" },
  { label: "CS 145 – Introduction to Data Mining" },
  { label: "CS M146 – Introduction to Machine Learning" },
  { label: "CS M148 – Data Science" },
  { label: "CS M151B – Computer Systems Architecture" },
  { label: "CS M152A – Intro to Digital Design Lab" },
  { label: "CS 152B – Digital Design Project Lab" },
  { label: "CS 161 – Fundamentals of Artificial Intelligence" },
  { label: "CS 174A – Intro to Computer Graphics" },
  { label: "CS C174C – Computer Animation" },
  { label: "CS 180 – Intro to Algorithms and Complexity" },
  { label: "CS 181 – Intro to Formal Languages and Automata" },
  { label: "CS M182 – Systems Biomodeling and Simulation Basics" },
  { label: "CS 183 – Introduction to Cryptography" },
  { label: "CS M184 – Intro to Computational and Systems Biology" },
  {
    label:
      "CS CM186 – Computational & Systems Biology: Modeling and Simulation",
  },
  { label: "CS 188 – Special topics in Computer Science" },
];

const SearchCourseForm = () => {
  const [searchCourse, setSearchCourse] = useState("");

  // state variable to hold student's profile object
  const [student, setStudent] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("running use effect from searchLanding");
        const studentPromise = getUserData();
        studentPromise.then((value) => {
          // console.log(value);
          setStudent(value);
        });
      } else {
        // console.log("Dashboard Err!!");
      }
    });
  }, []);
  // console.log("Checking nullity", student);
  // if (!studentCourses) return <p>Loading...</p>;
  if (!student?.name) return (<p>Loading...</p>);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(searchCourse);
  };

  // console.log("what are student courses", student);


  return (
    <Bg>
      <Container
        fixed
        sx={{ marginBottom: "50px", display: "flex", marginLeft: "20%" }}
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <p style={Text1}> Find a class </p>
            <Autocomplete
              onChange={(event, value) => {
                setSearchCourse(value);
              }}
              disablePortal
              id="combo-box-demo"
              options={CSClasses}
              ListboxProps={{
                sx: { fontFamily: "Poppins", fontStyle: "normal" },
              }}
              sx={{
                "& .MuiAutocomplete-input": {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                },
                width: 812,
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ backgroundColor: "white" }}
                  label="Search for a course and find a classbuddi!"
                />
              )}
            />
            <br></br>
            <Link to={`/search/${searchCourse.label}`} style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                size="large"
                style={{ height: 60, width: 200 }}
                sx={{ backgroundColor: "white" }}
              >
                Search
              </Button>
            </Link>
            <p style={Text2}> Your current courseload: </p>
            <ClassesStacked props = {student} />
          </Stack>
        </form>
      </Container>
    </Bg>
  );
};
export default SearchCourseForm;
