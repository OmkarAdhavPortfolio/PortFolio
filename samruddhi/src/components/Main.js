import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <MainContainer>
        <Content>
            <Subheading>Know More</Subheading>
            <Heading>About Samruddhi Engineers</Heading>
            <Description>
                <section>
                    <p>
                    SAMRUDDHI ENGINEERS is ISO 9001:2015 Certified company in the field of third party Inspection, testing & certification of equipments. Presently we are providing services to Engineering & Construction industry. It is managed by a group of highly qualified, trained and experienced Professionals with versatile skills and experience.
                    </p>
                    <p>
                    Our aim is to deliver world class service, by meeting the expectation of customers. Experienced professionals ensure that the quality and performance of the installations meet the statutory requirements and assure safe working conditions to employees.
                    </p>
                    <p>
                    We assist our clients to maintain systems in compliance with defined standards of quality and safety. Our mission is to deliver first class services and at a high quality level.
                    </p>
                </section>
            </Description>
        </Content>
        <ImgContainer>
            <Img src='./img/eng.png'/>
        </ImgContainer>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
height: 100vh;
width: calc(100% - 9%);
display: flex;
margin: 0 4.2%;
`

const Content = styled.div`
height: 100%;
width: 60%;
margin: 0 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #151515;
`

const Img = styled.img`
width: 100%;
height: 80%;
`
const ImgContainer = styled.div`
width: 37%;
height: 100%;
display: flex;
`

const Subheading = styled.section`
height: 4%;
width: 100%;
text-align: left;
font-weight: 600;
font-size: 20px;
padding-left : 10px;
`

const Heading = styled.section`
height: 10%;
width: 100%;
text-align: left;
font-weight: 800;
font-size: 50px;
padding-left : 10px;
`

const Description = styled.div`
width: 100%;
height: 55%;
text-align: left;
font-weight: 500;
font-size: 16px;
padding-left : 10px;

`