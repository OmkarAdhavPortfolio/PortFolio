import VerifiedIcon from '@mui/icons-material/Verified';
import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <Container>
        <Writable>
            <Subheading>Know More</Subheading>
            <Heading>Services</Heading>
            <Description>
                <Points><Iconwrap><VerifiedIcon /></Iconwrap><Wraperdescription>Safety Audits</Wraperdescription></Points>
                <Points><Iconwrap><VerifiedIcon /></Iconwrap><Wraperdescription>Safety Reports</Wraperdescription></Points>
                <Points><Iconwrap><VerifiedIcon /></Iconwrap><Wraperdescription>On Site Emergency Plan/ Emergency Response Plan/ Disaster Management Plan</Wraperdescription></Points>
                <Points><Iconwrap><VerifiedIcon /></Iconwrap><Wraperdescription>Inspection, Testing & Stability Certification.</Wraperdescription></Points>
                <Points><Iconwrap><VerifiedIcon /></Iconwrap><Wraperdescription>Chartered Engineer Certifications</Wraperdescription></Points>
                <Points><Iconwrap><VerifiedIcon /></Iconwrap><Wraperdescription>JSA, HAZOP Study</Wraperdescription></Points>
            </Description>
        </Writable>
        <Imgcontent>
        
        </Imgcontent>
    </Container>
  )
}

export default Services

const Container = styled.div`
height: 75vh;
width: calc(100% - 9%);
margin:3%  4%;
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 0px;
`

const Writable = styled.div`
height: 100%;
width: 54%;
display: flex;
flex-direction: row;
flex-direction: column;
justify-content: center;
align-items: center;
color: #151515;
`

const Imgcontent = styled.div`
height: 100%;
width: 44%;
background-color: red;
background-image: url("./img/lifting-equipment-inspector.webp"); 
  background-color: #cccccc; 
  height: 500px; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`

const Subheading = styled.section`
height: 3%;
width: 100%;
text-align: left;
font-weight: 600;
font-size: 17px;
padding-left : 10px;
`

const Heading = styled.section`
height: 10%;
width: 100%;
text-align: left;
font-weight: 800;
font-size: 35px;
padding-left : 10px;
`

const Description = styled.div`
width: 100%;
height: 55%;
text-align: left;
font-weight: 500;
font-size: 14px;
padding-left : 10px;
background-color: white;

span{
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.7px;
    align-items: center;
}
`

const Points = styled.section`
width: 100%;
height: 35px;
display: flex;
flex-direction: row;
margin: 10px 0;
`

const Iconwrap = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 30px;
    margin-top: 2px;
`

const Wraperdescription = styled.span`
    display: flex;
    height: 20px;
    width: 80%;
    margin: 0 3px;
    color: #333;

`