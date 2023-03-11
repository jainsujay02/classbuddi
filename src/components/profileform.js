import Profiletitle from "./profiletitle.js";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormLabel } from "@mui/material";

import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import TagIcon from "@mui/icons-material/Tag";
import styled from "styled-components";
import { Autocomplete } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//firebase imports
import { updateUser, firebase } from "./utils/firebase";
import { Link } from "react-router-dom";

const compsciclasses = [
  { label: "CS 1 – Computer Science Seminar" },
  { label: "CS 30 – Principles & Practices of Computing" },
  { label: "CS 31 – Intro to Com Sci I." },
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

const theme = createTheme({
  palette: {
    buttonColor: {
      main: "#A1C4FD",
      contrastText: "#616161",
    },
  },
});

const Container = styled.div`
  background-color: #eeeeee;
  height: auto;
  color: #333333;
  padding: 30px 0 10px 0;
  text-align: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
  }

  /* margin-bottom: 60px; */
`;
const defaultValues = {
  name: "",
  major: "",
  year: "",
  pronouns: "",
  instagram: "",
  reddit: "",
  discord: "",
  courses: [],
  interests: [],
  intro: "",
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [buttonText, setButtonText] = useState("Upload");
  // const [courseText, setCourseText] = useState([compsciclasses[1]]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    //update database
    updateUser(formValues);
  };
  return (
    <Container>
      <Profiletitle></Profiletitle>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent={"space-around"} columnSpacing="150">
          <Grid item xs={6} direction="column" align={"right"}>
            <br></br>
            <TextField
              fullWidth
              required
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              style={{ width: 300 }}
              sx={{ backgroundColor: "white" }}
            />
            <br></br>
            <br></br>
            <FormControl required>
              <InputLabel>Year</InputLabel>
              <Select
                label="year"
                name="year"
                style={{ width: 300 }}
                sx={{ backgroundColor: "white" }}
                value={formValues.year}
                onChange={handleInputChange}
              >
                <MenuItem key="1st year" value="1st year">
                  1st year
                </MenuItem>
                <MenuItem key="2nd year" value="2nd year">
                  2nd year
                </MenuItem>
                <MenuItem key="3rd year " value="3rd year">
                  3rd Year
                </MenuItem>
                <MenuItem key="4th year " value="4th year">
                  4th Year
                </MenuItem>
                <MenuItem key="5th year " value="5th year">
                  5th year
                </MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <TextField
              required
              style={{ width: 300 }}
              sx={{ backgroundColor: "white" }}
              id="major-input"
              name="major"
              label="Major"
              type="text"
              value={formValues.age}
              onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <FormControl required>
              <InputLabel>Pronouns</InputLabel>
              <Select
                style={{ width: 300 }}
                sx={{ backgroundColor: "white" }}
                name="pronouns"
                label="pronouns"
                value={formValues.pronouns}
                onChange={handleInputChange}
              >
                <MenuItem key="he/him/his" value="he/him/his">
                  he/him/his
                </MenuItem>
                <MenuItem key="she/her/hers" value="she/her/hers">
                  she/her/hers
                </MenuItem>
                <MenuItem key="they/them/theirs" value="they/them/theirs">
                  they/them/theirs
                </MenuItem>
                <MenuItem key="prefer not to say" value="prefer not to say">
                  Prefer not to say
                </MenuItem>
                <MenuItem key="other" value="other">
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} direction="column" align="left">
            <p> Add a profile picture</p>
            <Button
              variant="outlined"
              component="label"
              size="large"
              style={{ width: 300 }}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                border: "1.5px solid #A1C4FD",
                color: "#A1C4FD",
              }}
              onClick={() => setButtonText("Uploading")}
            >
              {buttonText}
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={() => setButtonText("Uploaded")}
              />
            </Button>
            <br></br>
            <p> How should people contact you?</p>
            <TextField
              sx={{ backgroundColor: "white" }}
              value={formValues.instagram}
              onChange={handleInputChange}
              name="instagram"
              type="text"
              id="instagram-input"
              label="Instagram"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br></br>
            <br></br>
            <TextField
              value={formValues.discord}
              sx={{ backgroundColor: "white" }}
              onChange={handleInputChange}
              name="discord"
              type="text"
              id="discord-input"
              label="Discord"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TagIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br></br>
            <br></br>

            <TextField
              value={formValues.reddit}
              sx={{ backgroundColor: "white" }}
              onChange={handleInputChange}
              name="reddit"
              type="text"
              id="reddit-input"
              label="Reddit"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RedditIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
          <Grid item direction="column" align="center" xs={6.8}>
            <br></br>
            <p>Select your courses</p>
            <Autocomplete
              multiple
              sx={{ backgroundColor: "white" }}
              id="courses-input"
              name="courses"
              label=" Courses"
              type="text"
              onChange={(event, value) => {
                let coursesList = [];
                value.forEach((course) => {
                  coursesList.push(course.label);
                });

                setFormValues({
                  ...formValues,
                  courses: coursesList,
                });
              }} //** on every input change hitting my api**
              options={compsciclasses}
              getOptionLabel={(option) => option.label}
              InputLabelProps={{ required: true }}
              renderInput={(params) => (
                <TextField
                  sx={{ backgroundColor: "white" }}
                  {...params}
                  label="courses"
                  placeholder="courses"
                />
              )}
            />
            <br></br>
            <p> Select a few hobbies or interests</p>
            <Autocomplete
              multiple
              sx={{ backgroundColor: "white" }}
              id="interests-input"
              name="interests"
              label="interests"
              type="text"
              onChange={(event, value) => {
                let interestList = [];
                value.forEach((interests) => {
                  interestList.push(interests.label);
                });

                setFormValues({
                  ...formValues,
                  interests: interestList,
                });
              }} //** on every input change hitting my api**
              options={interests}
              getOptionLabel={(option) => option.label}
              InputLabelProps={{ required: true }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="interests"
                  placeholder="interests"
                />
              )}
            />
            <br></br>

            <p> Help similar buddi’s find you</p>
            <TextField
              fullWidth
              sx={{ backgroundColor: "white" }}
              id="intro-input"
              name="intro"
              label="intro"
              type="text"
              multiline
              maxRows={6}
              value={formValues.intro}
              onChange={handleInputChange}
            />

            <br></br>
            <p></p>
          </Grid>
          <Grid item xs={10}>
            <ThemeProvider theme={theme}>
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  type="submit"
                  color="buttonColor"
                  style={{ textTransform: "none" }}
                  sx={{
                    boxShadow: 0,
                    marginTop: 3,
                    marginBottom: 5,
                    marginLeft: "475px",
                    gap: 6,
                    padding: "16px 20px",
                    borderRadius: 10,
                    border: "1.5px solid #A1C4FD",
                    width: "235px",
                    height: 56,
                    fontSize: "14px",
                    lineHeight: 20,
                    letterSpacing: 0.4,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Submit{" "}
                </Button>
              </Link>
            </ThemeProvider>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Form;
