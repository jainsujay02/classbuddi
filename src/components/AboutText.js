import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

const Container = styled(Box)({
  width: '485px',
  height: 'auto',
})

const AnswerStyle = {
  fontSize: '16px',
  padding: 0,
  margin: 0,
}

const QuestionStyle = {
  fontSize: '26px',
  fontWeight: '600',
  padding: 0,
  margin: 0,
}

function AboutText() { 
  return(
    <Container>
      <Stack 
      direction='column'
      gap={5}>
      <Stack
        direction='column'
        gap={2}>
        <p style={QuestionStyle}>Who are we?</p>
        <Stack
          direction='column'
          gap={2}>
          <p style={AnswerStyle}>We are a team of dedicated students who understand the struggles of finding 
          like-minded individuals in large classes at UCLA. It can be challenging to connect with people 
          who share similar interests and personalities in a sea of over 200 students. 
          </p>
          <p style={AnswerStyle}>That's why we created <strong>ClassBuddi</strong>, a web application designed to make 
          it easier for you to find friends in your CS classes.
          </p>
        </Stack>
      </Stack>

      <Stack
        direction='column'
        gap={2}>
        <p style={QuestionStyle}>What exactly is ClassBuddi?</p>
        <Stack
          direction='column'
          gap={2}>
          <p style={AnswerStyle}>College is more than just getting good grades &#8212; it's about building relationships and 
          creating a support system. Our goal is to make it easier for you to connect with people who share similar 
          interests and personalities, so you can thrive in your academic and personal life.   
          </p>
          <p style={AnswerStyle}>We're excited to help you make meaningful connections in your CS classes!
          </p>
        </Stack>
      </Stack>
      </Stack>
    </Container>
  )
}

export default AboutText;