import GoogleIcon from '@mui/icons-material/Google';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SignupForm = () => {
  return (
      <div className="sm:w-420 flex-center flex-col">
      <Logo><img className="logo-form" src="/assets/images/logo2.png" alt="logo" /></Logo>

      <Header2 className="h3-bold md:h2-bold pt-2 sm:pt-12">Investor IQ</Header2>

      <form className="flex flex-col gap-3 w-full mt-3">
      
      <div>
      <label>NAME</label>
      <RowContent className="flex flex-row gap-3 w-full mt-3">
        
        <div>
            <TextField id="outlined-basic" className="w-full mt-1" label="FIRSTNAME ..." type='text' size='small' required variant="outlined" />
        </div>
  
        <div>
            <TextField id="outlined-basic" className="w-full mt-1" label="LASTNAME ..." type='text' size='small' required variant="outlined" />
        </div>
        </RowContent>
      </div>
      <div>
      <label>EMAIL</label>
          <TextField id="outlined-basic" className="w-full mt-1" label="Email ..." type='email' size='small' required variant="outlined" />
      </div>

      <RowContent className="flex flex-row justify-center items-center gap-3 w-full mt-3">
      <div className=''>
      <label>Number</label>
          <TextField id="outlined-basic" className="w-full mt-1" label="NUMBER ..." type='number' size='small' required variant="outlined" />
      </div>

      <div>
         <label>Location</label>
         <TextField id="outlined-basic" className="w-full mt-1" label="" type='email' size='small' required variant="outlined" />
      </div>
      </RowContent>

      <div>
      <label>Register as</label>
      <RadioGroup
          className='text-sm'
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel  size="small" value="startup" className='text-sm' control={<Radio />} label="Startup" />
            <FormControlLabel  size="small" value="investor" control={<Radio />} label="Investor" />
          </RadioGroup>
      </div>
      
      <Button variant="contained" className="shad-button_primary">Sign In</Button>
        <p className="text-small-regular text-dark-3 text-center mt-1">
          Already have an account?
          <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">
            Sign in
          </Link>
        </p>
        <Divider>or</Divider>
        <Button variant="outlined" className="shad-button_dark-1" startIcon={<GoogleIcon />}>Log In</Button>
      </form>

      
      </div>
  );
};

export default SignupForm;

const Logo = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0px;
img{
  width: 20%;
}
`
const RowContent = styled.div`
 
`

const Header2 = styled.h2`
padding-top: 10px;
`