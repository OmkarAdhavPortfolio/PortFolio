import React from 'react'
import styled from 'styled-components'
import Profilegenerator from './profileform/Profilegenerator'

const FromLayout = () => {
  return (
    <Conatiner className="flex flex-row min-h-fit gap-3">
        <SideBar>

        </SideBar>
        <InnerContainer className='px-8 py-8 text-dark-3 flex flex-col justify-center align-center'>
            <Profilegenerator />
        </InnerContainer>
    </Conatiner>
  )
}

export default FromLayout

const Conatiner = styled.div`
width: 100vw;
height: 100vh;
background-color: #fffff;
`

const SideBar = styled.div`
background-color: red;
width: 30%;
height: 100%;
`

const InnerContainer = styled.div`
width: 70%;
height: 100%;
background-color: white;
`