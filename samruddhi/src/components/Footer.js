import {
    MDBContainer,
    MDBFooter
} from 'mdb-react-ui-kit';
import React from 'react';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#edc37b' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color:'black' }}>
        © 2020 Copyright:
        <a className='text-black' href='https://mdbootstrap.com/'>
          Samruddhi Engineers
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
