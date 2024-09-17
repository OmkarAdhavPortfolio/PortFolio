import GoogleIcon from '@mui/icons-material/Google';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SigninForm = () => {
  return (
    <div className="sm:w-420 flex-center flex-col">
      <Logo><img className="logo-form" src="/assets/images/logo2.png" alt="logo" /></Logo>

      <Header2 className="h3-bold md:h2-bold pt-2 sm:pt-12">Log In to your Account</Header2>

      <p className="text-light-3 small-meduim md:base-regular mt-3 ">
        Please enter your details
      </p>

      <form className="flex flex-col gap-4 w-full mt-3">
        <div>
          <label>Email</label>
          <TextField id="outlined-basic" className="w-full mt-1" label="Email ..." type='email' required variant="outlined" />
        </div>

        <div>
          <label>Password</label>
          <TextField id="outlined-basic" className="w-full mt-1" label="Email ..." type='password' required variant="outlined" />
        </div>

        
        <Button variant="contained" className="shad-button_primary">Sign In</Button>
        <p className="text-small-regular text-dark-3 text-center mt-1">
          Do not have an Account?
          <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">
            Sign up
          </Link>
        </p>
        <Divider>or</Divider>
        <Button variant="outlined" className="shad-button_dark-1" startIcon={<GoogleIcon />}>Sign In</Button>
      </form>
    </div>
  );
};

export default SigninForm;

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

const Header2 = styled.h2`
padding-top: 13px;
`