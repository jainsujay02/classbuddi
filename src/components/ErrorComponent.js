import styled from "styled-components";

const ErrorPageDiv = styled.div`
  width: max-width;
  background: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: Poppins, sans-serif;
`;

const ErrorComponent = () => {
  return (
    <>
      <ErrorPageDiv>
        <h3>Oops! Looks like there's nothing here :/</h3>
      </ErrorPageDiv>
    </>
  );
};

export default ErrorComponent;
