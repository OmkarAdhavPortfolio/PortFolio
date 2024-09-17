import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import styled from 'styled-components';

const Samruddhifeatures = () => {
  return (
    <Container>
        <WritedContent>
            <Upper>
            <Heading>Samruddhi App Features</Heading>
            <Description>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Tracking of all equipments (active, inactive and not in use) tested at your Site (multiple Site status can also be tracked) – at a single click view</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>View Equipment’s that are due for testing in the next 2, 7, 15, 30 days and request for testing right then and there</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>View Reports – Monthly or for custom period, of the Equipments tested so far.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Get a report of active, inactive and not in use equipments at your Site.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Reports generated and mailed to your registered email-id.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Reports can also be generated for equipments that are due for testing in a coming months.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Individual equipment testing report can also be generated which will give the testing history of the equipment.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Request for testing.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Scan QR code or enter Equipment ID fixed on your equipment to view current certificate.</Wraperdescription></Points>
            </Description>
            </Upper>
            <Lower>
            <Heading>Advantges</Heading>
            <Description>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Digital Record keeping of Equipments & Machinery with all past testing and certification records</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Ensure safety of Employee and Equipments</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Eliminate paperwork and go green.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Save time and reduce costs</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Increase efficiency.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Avoid accident by reminding of Testing and certification of equipments.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Improve data accuracy.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Bring Trust and confidence.</Wraperdescription></Points>
                <Points><Iconwrap><CheckCircleIcon /></Iconwrap><Wraperdescription>Anytime, anywhere information on Each Equipments at site.</Wraperdescription></Points>
            </Description>
            </Lower>
        </WritedContent>
        <Imgcontainer>
            <ImgFrame src='./img/scr1.png'/>
        </Imgcontainer>
    </Container>
  )
}

export default Samruddhifeatures

const Container = styled.div`
height: 150vh;
width: calc(100vw - 9%);
margin: 0 4%;
display: flex;
// background-color: #edc37b;
`

const WritedContent = styled.div`
width: 65%;
height: 100%;
margin: 0 1%;
display: flex;
flex-direction: column;
`

const Imgcontainer = styled.div`
width: 33%;
height: 100%;
margin: 0 1%;

display: flex;
justify-content: center;
`

const Upper = styled.div`
height: 50%;
width: 100%;
`
const Lower = styled.div`
height: 50%;
width: 100%;
`

const Heading = styled.section`
height: 13%;
width: 100%;
text-align: left;
font-weight: 500;
font-size: 25px;
padding-left : 10px;
`

const Description = styled.div`
width: 100%;
height: 85%;
text-align: left;
font-weight: 300;
font-size: 9px;
padding-left : 10px;
margin-top: 3px;

span{
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.7px;
    align-items: center;
}
`

const Points = styled.section`
width: 100%;
height: 40px;
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

const ImgFrame = styled.img`
    height: 90%;
    border: solid 13px #cccccc;
    margin-top: 40px;
`