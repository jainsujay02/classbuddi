import ClassesStacked from "./ClassesStacked";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';

const Bg = styled.div`
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-width;
`

const Text1 = {
    marginTop: '-20px',
    marginBottom: '0px',
    width: '716px',
    height: '120px',
    
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '72px',
    
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.25px',
    
    color: "#333333",
}

const Text2 = {
    marginTop: '38px',
    height: '36px',
    
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '72px',
    
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.25px',
    
    color: "#333333",
}

const CSClasses = [
    {label: 'CS 1 - Computer Science Seminar', name: 'CS 1', title: 'Computer Science Seminar'},
    {label: 'CS 30 - Principles & Practices of Computing', name: 'CS 30', title: 'Principles & Practices of Computing'},
    {label: 'CS 31 - Intro to Com Sci I', name: 'CS 31', title: 'Intro to Com Sci I'},
    {label: 'CS 32 - Intro to Com Sci II', name: 'CS 32', title: 'Intro to Com Sci II'},
    {label: 'CS 33 - Intro to Comp. Organization', name: 'CS 33', title: 'Intro to Comp. Organization'},
    {label: 'CS 35L - Software Construction Lab', name: 'CS 35L', title: 'Software Construction Lab'},
    {label: 'CS M51A - Logic Design of Digital Systems', name: 'CS M51A', title: 'Logic Design of Digital Systems'},
    {label: 'CS M119 - Fundamentals of Embedded Network Systems', name: 'CS M119', title: 'Fundamentals of Embedded Network Systems'},
    {label: 'CS CM121 - Introduction to Bioinformatics', name: 'CS CM121', title: 'Introduction to Bioinformatics'},
    {label: 'CS CM122 - Algorithms in Bioinformatics and Systems Biology', name: 'CS CM122', title: 'Algorithms in Bioinformatics and Systems Biology'},
    {label: 'CS CM124 - Computational Genetics', name: 'CS CM124', title: 'Computational Genetics'},
    {label: 'CS 130 - Software Engineering', name: 'CS 130', title: 'Software Engineering'},
    {label: 'CS 131 - Programming Languages', name: 'CS 131', title: 'Programming Languages'},
    {label: 'CS 132 - Compiler Construction', name: 'CS 132', title: 'Compiler Construction'},
    {label: 'CS 133 - Parallel and Distributed Computing', name: 'CS 133', title: 'Parallel and Distributed Computing'},
    {label: 'CS 136 - Introduction to Computer Security', name: 'CS 136', title: 'Introduction to Computer Security'},
    {label: 'CS 143 - Database Systems', name: 'CS 143', title: 'Database Systems'},
    {label: 'CS 145 - Introduction to Data Mining', name: 'CS 145', title: 'Introduction to Data Mining'},
    {label: 'CS M146 - Introduction to Machine Learning', name: 'CS M146', title: 'Introduction to Machine Learning'},
    {label: 'CS M148 - Data Science', name: 'CS M148', title: 'Data Science'},
    {label: 'CS M151B - Computer Systems Architecture', name: 'CS M151B', title: 'Computer Systems Architecture'},
    {label: 'CS M152A - Intro to Digital Design Lab', name: 'CS M152A', title: 'Intro to Digital Design Lab'},
    {label: 'CS 152B - Digital Design Project Lab', name: 'CS 152B', title: 'Digital Design Project Lab'},
    {label: 'CS 161 - Fundamentals of Artificial Intelligence', name: 'CS 174A', title: 'Fundamentals of Artificial Intelligence'},
    {label: 'CS 174A - Intro to Computer Graphics', name: 'CS 174A', title: 'Intro to Computer Graphics'},
    {label: 'CS C174C - Computer Animation', name: 'CS C174C', title: 'Computer Animation'},
    {label: 'CS 180 - Intro to Algorithms and Complexity', name: 'CS 180', title: 'Intro to Algorithms and Complexity'},
    {label: 'CS 181 - Intro to Formal Languages and Automata', name: 'CS 181', title: 'Intro to Formal Languages and Automata'},
    {label: 'CS M182 - Systems Biomodeling and Simulation Basics', name: 'CS M182', title: 'Systems Biomodeling and Simulation Basics'},
    {label: 'CS 183 - Introduction to Cryptography', name: 'CS 183', title: 'Introduction to Cryptography'},
    {label: 'CS M184 - Intro to Computational and Systems Biology', name: 'CS M184', title: 'Intro to Computational and Systems Biology'},
    {label: 'CS CM186 - Computational & Systems Bio: Modeling & Simulation', name: 'CS CM186', title: 'Computational & Systems Biology: Modeling and Simulation'},
    {label: 'CS 188 - Special topics in Computer Science', name: 'CS 188', title: 'Special topics in Computer Science'},
   ]

function checkNull({value}) {
    var myArray = [];
    if (value !== null) {
        myArray[0] = (
            <div>
                {ClassesStacked({value})}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
    else if (value == null) {
        myArray[0] = (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
    return myArray[0];
}

const SearchFinding = () => {
    const [value, setValue] = React.useState(CSClasses[0]); //dummy value for now, will need to feed in data as props from the backend
    return (
        <Bg>
            <Container fixed sx={{marginBottom: '50px', display: 'flex', marginLeft: '20%'}}>
                    <Stack>
                        <p style={Text1}> Find a class </p>
                        <Autocomplete
                        disablePortal
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        id="combo-box-demo"
                        options={CSClasses}
                        ListboxProps={{
                            sx: {fontFamily: 'Poppins', fontStyle: 'normal'},
                          }}
                        sx={{
                            '& .MuiAutocomplete-input': {
                            fontFamily: 'Poppins', fontStyle: 'normal'}, 
                            width: 812
                        }}
                        renderInput={(params) => 
                        <TextField 
                        {...params} 
                        sx= {{backgroundColor: 'white'}}
                        label="Search for a course and find a classbuddi!" />}
                        />
                        <p style={Text2}> {`Result for ${(value !== null) ? `'${value.label}'` : '...'}`} </p>
                        {checkNull({value})}
                    </Stack>
            </Container>
        </Bg>
    )
}
export default SearchFinding;