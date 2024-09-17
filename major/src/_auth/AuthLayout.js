import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayout = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
        <img
            src="/assets/images/side-img2.png"
            alt="logo"
            className="hidden xl:block w-100 object-cover bg-no-repeat"
          />

          <section className="flex flex-1 justify-center items-center flex-col ">
            <Outlet />
          </section>
        </InnerContainer>

      </MainContainer>
    </>
  );
};

export default AuthLayout;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #D9D9D9;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`


const InnerContainer = styled.div`
width: 80%;
height: 95%;
display: flex;
flex-direction: row;
background: #FFFFFF;
box-shadow: 3px 4px 8px 3px rgba(0, 0, 0, 0.25);
border-radius: 32px;
overflow: hidden;

section:{
  height: 80%;
}
`