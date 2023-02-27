import Profiletitle from "./profiletitle.js"
import {useState} from "react"; 
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
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
  };
  return (
    <div>
        <Profiletitle></Profiletitle>
        <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item padding={2}>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              name="os"
              value={formValues.os}
              onChange={handleInputChange}
            >
              <MenuItem key="mac" value="mac">
                Mac
              </MenuItem>
              <MenuItem key="windows" value="windows">
                Windows
              </MenuItem>
              <MenuItem key="linux " value="linux">
                Linux
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <div style={{ width: "400px" }}>
            Favorite Number
            <Slider
              value={formValues.favoriteNumber}
              onChange={handleSliderChange("favoriteNumber")}
              defaultValue={1}
              step={1}
              min={1}
              max={3}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
              ]}
              valueLabelDisplay="off"
            />
          </div>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
    </div>
    
  );
};
export default Form;


// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 100})} />
//       <select {...register("Year", { required: true })}>
//         <option value="1st year, 2nd year, 3rd year, 4th year, 5th year">1st year, 2nd year, 3rd year, 4th year, 5th year</option>
//       </select>
//       <input type="text" placeholder="Major" {...register("Major", {required: true, maxLength: 12})} />
//       <input type="text" placeholder="Pronouns" {...register("Pronouns", {required: true})} />
//       <input type="url" placeholder="Add profile picture" {...register("Add profile picture", {required: true})} />
//       <input type="url" placeholder="Link to your social media handle" {...register("Link to your social media handle", {})} />

//       <input type="submit" />
//     </form>
//   );
// }