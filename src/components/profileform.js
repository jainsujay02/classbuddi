import Profiletitle from "./profiletitle.js"
import {useState} from "react"; 
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import {InputAdornment} from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel} from '@mui/material';
import { FormLabel } from '@mui/material';

import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TagIcon from '@mui/icons-material/Tag';
import styled from 'styled-components'
import {Autocomplete} from '@mui/material';


const compsciclasses = [
  {label: 'CS 1– Computer Science Seminar'},
  {label: 'CS 30 – Principles & Practices of Computing'},
  {label: 'CS 31 – Intro to Com Sci I.'},
  {label: 'CS 32 – Intro to Com Sci II.'},
  {label: 'CS 33 – Intro to Comp. Organization'},
  {label: 'CS 35L – Software Construction Lab'},
  {label: 'CS M51A – Logic Design of Digital Systems'},
  {label: 'CS M119 – Fundamentals of Embedded Network Systems'},
  {label: 'CS CM121 – Introduction to Bioinformatics'},
  {label: 'CS CM122 – Algorithms in Bioinformatics and Systems Biology'},
  {label: 'CS CM124 – Computational Genetics'},
  {label: 'CS 130 – Software Engineering'},
  {label: 'CS 131 – Programming Languages'},
  {label: 'CS 132 – Compiler Construction'},
  {label: 'CS 133 – Parallel and Distributed Computing'},
  {label: 'CS 136 – Introduction to Computer Security'},
  {label: 'CS 143 – Database Systems'},
  {label: 'CS 145 – Introduction to Data Mining'},
  {label: 'CS M146 – Introduction to Machine Learning'},
  {label: 'CS M148 – Data Science'},
  {label: 'CS M151B – Computer Systems Architecture'},
  {label: 'CS M152A – Intro to Digital Design Lab'},
  {label: 'CS 152B – Digital Design Project Lab'},
  {label: 'CS 161 – Fundamentals of Artificial Intelligence'},
  {label: 'CS 174A – Intro to Computer Graphics'},
  {label: 'CS C174C – Computer Animation'},
  {label: 'CS 180 – Intro to Algorithms and Complexity'},
  {label: 'CS 181 – Intro to Formal Languages and Automata'},
  {label: 'CS M182 – Systems Biomodeling and Simulation Basics'},
  {label: 'CS 183 – Introduction to Cryptography'},
  {label: 'CS M184 – Intro to Computational and Systems Biology'},
  {label: 'CS CM186 – Computational & Systems Biology: Modeling and Simulation/strong>'},
  {label: 'CS 188 – Special topics in Computer Science  '},
 ]

 const interests = [
  {label: 'Watching Movies'},
  {label: 'Watching TV Shows'},
  {label: 'Playing Badminton'},
  {label: 'Hiking'},
  {label: 'Running'},
  {label: 'Coffee Shop Exploring'},
  {label: 'Mindfulness'},
 ]



const Container = styled.div`
	background-color: #EEEEEE;  
	height: auto;
	color: #333333;
	padding: 30px 0 10px 0;
    text-align: center;
    h1{
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
    }
	
  /* margin-bottom: 60px; */
`
const defaultValues = {
  name: "",
  major: "",
  year: "",
  pronouns:"",
  instagram: "",
  reddit: "", 
  discord:"",
  courses: [], 
  interests: [], 
  intro:"",

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
    // console.log(courseText);
  };
  return (
    <Container>
        <Profiletitle></Profiletitle>
        <form onSubmit={handleSubmit}>
        <Grid container   justifyContent="space-around">        
        <Grid item xs={6} direction="column" align = "center" >
          <br></br>
          <TextField fullWidth
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            style = {{width: 300}}
          />
          <br></br>
          <br></br>
            <FormControl>
            <InputLabel>Year</InputLabel>
            <Select
              label="year"
              name="year"
              style = {{width: 300}}
              value={formValues.year}
              onChange={handleInputChange}
            >
              <MenuItem key="1st year" value="1st year">
                1st Year
              </MenuItem>
              <MenuItem key="2nd year" value="2nd year">
                2nd Year
              </MenuItem>
              <MenuItem key="3rd year " value="2rd year">
                3rd Year
              </MenuItem>
              <MenuItem key="4th year " value="2th year">
                4th Year
              </MenuItem>
              <MenuItem key="5th year " value="5th year">
                5th Year
              </MenuItem>
            </Select>
            </FormControl>
            <br></br>
          <br></br>
            <TextField
            style = {{width: 300}}
            id="major-input"
            name="major"
            label="Major"
            type="text"
            value={formValues.age}
            onChange={handleInputChange}
          />
           <br></br>
          <br></br>
          <FormControl>
          <InputLabel>Pronouns</InputLabel>
            <Select
              style = {{width: 300}}
              name="pronouns"
              label = "pronouns"
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
        <Grid item xs={6} direction="column"  align = "left">
        <p> Add a profile picture</p>
        <Button variant="outlined" component="label" size = "large" style = {{width: 300}} color = "primary" onClick={() => setButtonText("Uploading")}>
          {buttonText}
       <input hidden accept="image/*" multiple type="file" onChange={() => setButtonText("Uploaded")}/>
        </Button >
        <br></br>
        <p> How should people contact you?</p>
        <TextField
        value={formValues.instagram}
        onChange={handleInputChange}
        name="instagram"
        type="text"
        id="instagram-input"
        label="Instagram"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InstagramIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <br></br>
      <br></br>
      <TextField
      value={formValues.discord}
      onChange={handleInputChange}
      name="discord"
      type="text"
      id="discord-input"
      label="Discord"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TagIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
              <br></br>
              <br></br>

      <TextField
        value={formValues.reddit}
        onChange={handleInputChange}
        name="reddit"
        type="text"
        id="reddit-input"
        label="Reddit"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RedditIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

      </Grid>
      <Grid item direction="column"  align = "center"  xs={10} > 
        <p>Select your courses</p>
        <Autocomplete
          multiple
          id="courses-input"
          name="courses"
          label="courses"
          type="text"
        
          onChange={(event, value) => {
            let coursesList = [];
            value.forEach((course) => {
            coursesList.push(course.label)
          })

        setFormValues({
          ...formValues,
          courses: coursesList,
         });
     }
     } //** on every input change hitting my api**
  
        options={compsciclasses}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="courses"
            placeholder="Courses"
          />
        )}

      />
      <br></br>
      <br></br>
<p> Select a few hobbies or interests (max. 3)</p>
<Autocomplete
          multiple
          id="interests-input"
          name="interests"
          label="interests"
          type="text"
        
          onChange={(event, value) => {
            let interestList = [];
            value.forEach((interests) => {
              interestList.push(interests.label)
          })

        setFormValues({
          ...formValues,
          interests: interestList,
         });
     }
     } //** on every input change hitting my api**
  
        options={interests}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="interests"
            placeholder="interests"
          />
        )}
      />
      <br></br>
      <br></br>

      <p> Help similar buddi’s find you</p>
        <TextField
          id="intro-input"
          name="intro"
          label="intro"
          type="text"
          multiline
          maxRows={4}
          variant="standard"
          value={formValues.intro}
          onChange={handleInputChange}
        />

      
        </Grid>
        <Grid item xs={10}> 
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        </Grid>
      </Grid>
    </form>
    </Container>
    
  );
};
export default Form;