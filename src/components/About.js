import AboutImage from './AboutImage.js';
import AboutHeader from './AboutHeader.js';
import AboutText from './AboutText.js';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';

const PageContain = styled(Box) ({
  backgroundColor: '#eeeeee',
  fontFamily: "'Poppins', sans-serif",
  paddingLeft:'165px',
  paddingRight:'165px',
  paddingBottom: '192px',
})

function About(){
  return (
    <PageContain>
      <Stack direction='row'
        spacing={10}>
            <Stack 
              direction='column'
              spacing={2}>
                <AboutHeader/>
                <AboutImage/>
            </Stack>
            <AboutText/>
      </Stack>

    </PageContain>
  );
}

export default About;