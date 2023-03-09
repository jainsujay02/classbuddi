
import {useState} from "react"; 
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel} from '@mui/material';
import { Button } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import styled from 'styled-components'
import {Autocomplete} from '@mui/material';
import { Dashboard } from "@material-ui/icons";
import  DashboardList from "./DashboardList.js";
import Stack from '@mui/material/Stack';


 const interests = [
  { label: 'Art and Art History' },
  { label: 'Board Games' },
  { label: 'Blogging' },
  { label: 'Cooking and Baking' },
  { label: 'Dancing' },
  { label: 'DIY and Crafts' },
  { label: 'Fashion and Beauty' },
  { label: 'Gardening' },
  { label: 'Hiking' },
  { label: 'Horseback Riding' },
  { label: 'Journaling' },
  { label: 'Music and Music Production' },
  { label: 'Photography' },
  { label: 'Playing Badminton' },
  { label: 'Reading' },
  { label: 'Running' },
  { label: 'Singing' },
  { label: 'Soccer' },
  { label: 'Swimming' },
  { label: 'Tabletop Roleplaying Games' },
  { label: 'Traveling and Exploring New Places' },
  { label: 'Volleyball' },
  { label: 'Volunteering' },
  { label: 'Watching Live Sports' },
  { label: 'Watching Movies' },
  { label: 'Watching Stand-up Comedy' },
  { label: 'Watching TV Shows' },
  { label: 'Writing (e.g. poetry, short stories, screenplays, etc.)' }
  ];


  const years = [
    { label: '1st year' },
    { label: '2nd year' },
    { label: '3rd year' },
    { label: '4th year' },
    { label: '5th year' },
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
`

const defaultValues = {
    years: [],
    interests: [], 
  
  };


const CourseForm = () => {

  const [checkValues, setcheckValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkValues);
  };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setcheckValues({
        ...checkValues,
        [name]: value,
      });
  
    };

    return (
    <Container>
        <h1> CS 33 - Introduction to Computer Organisation</h1>
        <br></br>
        <h4 align = "left"> Filter your search</h4>
        <form onSubmit={handleSubmit}>
        <Grid container columnSpacing = "75">  
        <Grid item xs={2} direction="column" align={"right"}>
        <Autocomplete
          multiple
          sx= {{backgroundColor: 'white'}}
          id="matching-year"
          name="matching-year"
          label="matching-year"
          type="text"
        
          onChange={(event, value) => {
            let yearList = [];
            value.forEach((year) => {
              yearList.push(year.label)
          })

        setcheckValues({
          ...checkValues,
          years: yearList,
         });
     }
     } //** on every input change hitting my api**
  
        options={years}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params} 
            label="year"
            placeholder="year"
          />
        )}
      />
            </Grid>
        <Grid item xs={4} direction="column" align={"left"}>
        <Autocomplete
          multiple
          sx= {{backgroundColor: 'white'}}
          id="matching-interests-input"
          name="matching-interests"
          label="matching-interests"
          type="text"
        
          onChange={(event, value) => {
            let interestList = [];
            value.forEach((interests) => {
              interestList.push(interests.label)
          })

        setcheckValues({
          ...checkValues,
          interests: interestList,
         });
     }
     } //** on every input change hitting my api**
  
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
        <Button type="submit" size = "large" style = {{height: 60, width: 200}}   sx= {{backgroundColor: 'white'}} >
          Filter
        </Button>
        </Grid>
            </Grid>
            </form>

            <Stack 
          direction="row"
          spacing={8}
          sx={{ margin: 4 }} 
          align = "center"

        >
          <DashboardList/>
          <DashboardList/>
        </Stack>


       

    </Container>
    )
  }

  export default CourseForm;
