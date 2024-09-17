import EmailIcon from '@mui/icons-material/Email';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
        <Upper>
            <Right />
            <Left>

            <div className="auth-wrapper feedback">
              <div className="auth-inner feedback">    
            <form onSubmit={''}>
                <h3>Feedback</h3>
                
                <div className="mb-3">
                    <label>Name</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label>Message</label>
                    <input
                    type="textarea"
                    className="form-control"
                    placeholder="Enter password"
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
            </form>
            </div>
            </div>
            </Left>
        </Upper>
        <Lower>
          <ELE>
            <LeftLogo><EmailIcon /></LeftLogo>
            <RightDescription>
              <h3>Email</h3>
              <span>jatincp@samruddhiengineers.com</span>
            </RightDescription>
          </ELE>
          <ELE>
          <LeftLogo><SettingsPhoneIcon /></LeftLogo>
            <RightDescription>
              <h3>Contact Number</h3>
              <h6>+91 983 363 7246</h6>
              <h6>+91 932 117 8901</h6>
            </RightDescription>
          </ELE>
          <ELE>
          <LeftLogo><EmailIcon /></LeftLogo>
            <RightDescription>
              <h3>SAMRUDDHI ENGINEERS</h3>
              <p>Gala no-1 Bhanji Udhyog Nagar, Nr. Gupta Compound, Penkar Pada, Mira Road, Thane-401107</p>
            </RightDescription>
          </ELE>
        </Lower>
    </Container>
  )
}

export default Contact

const Container = styled.div`
height: 88vh;
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 20px;
`

const Upper = styled.div`
height: 80%;
width: 100%;
display: flex;
flex-direction: row;
`

const Right = styled.div`
height: 98%;
width: 39%;
background-image: url("./img/certi.jpg"); 
  background-color: #cccccc; 
  height: 90%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2%;
  margin-left: 2%;
`

const Left = styled.div`
height: 100%;
width: 65%;
display: flex;
flex-direction: column;
justify-content: center;
`

const Lower = styled.div`
height: 20%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`

const ELE = styled.div`
  height: 99%;
  width: 26%;
  background-color: #white;
    box-shadow: 0px 14px 80px #616161;
  padding: 16px 35px 16px 35px;
  border-radius: 3%;
  border-left: 2px blur #2d2e2e;
  display: flex;
  flex-direction: row;
`

const LeftLogo = styled.div`
height: 85%;
width: 25%;
display: flex;
flex-direction: column;
box-shadow: 0px 10px 30px #616161;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 13px;
`

const RightDescription = styled.div`
width: 75%;
height: 98%;
display: flex;
flex-direction: column;
border-left : 2px solid #c4c3c0;
padding: 9px;
float: top;

h3{
font-size: 17px;
}

p{
font-size: 14px;
font-weight: 500;
}
`