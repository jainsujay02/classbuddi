import styled from 'styled-components';

const Container = styled.div`
  alignItems: center;
  justifyContent:center;
  fontFamily: "'Poppins', sans-serif";
`
const HeadStyle = {
  fontWeight: '600',
  fontSize: '48px',
  color: '#333333',
  marginLeft: '100px',
}

const SubStyle = {
  fontSize: '16px',
  color: '#8C8C8C',
  marginLeft: '100px',
}

function DashboardHeader(props) {
  if (!props.props?.name) return (<p>Loading...</p>);
  return(
    <Container>
      <div>
        <div style={HeadStyle}>Hi, {props.props.name}</div>
        <div style={SubStyle}>Let's take a look at your classes and contacts.</div>
     </div>
    </Container>
  );
}
export default DashboardHeader;