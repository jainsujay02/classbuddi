import Profiletitle from "./profiletitle.js"
import ProfileFormEdit from "./profileformedit.js"
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRef } from 'react';


//firebase imports
import { updateUser, firebase, auth, getUserData} from "./utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";


const compsciclasses = [
  {label: 'CS 1 – Computer Science Seminar'},
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
  {label: 'CS CM186 – Computational & Systems Biology: Modeling and Simulation'},
  {label: 'CS 188 – Special topics in Computer Science'},
 ]

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

 const theme = createTheme({
  palette: {
    buttonColor: {
      main: '#A1C4FD',
      contrastText: '#616161',
    },
  },
});

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

const ProfileFormEditDisplay = () => {

  // state variable to hold student's profile object
  const [student, setStudent] = useState(null);


  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("running use effect from profile");
          const studentPromise = getUserData();
          studentPromise.then((value) => {
              console.log(value);
              setStudent(value);
          });
        }
        else {
          console.log("Dashboard Err!!")
        }

      });

    }, []);


  console.log("Checking nullity", student);

  if (!student) return (<p>Loading...</p>);

  return (
    <ProfileFormEdit props = {student} />
  )


};
export default ProfileFormEditDisplay;