import React from 'react'
import styled from 'styled-components'
import SimpleSlider from './SimpleSlider'

const Slidercontainer = () => {
  return (
    <SliderContainer>
        <SimpleSlider />
    </SliderContainer>
  )
}

export default Slidercontainer

const SliderContainer = styled.div`
 height: auto;
width: calc(100% - 9%);
margin:0px  4.2%;
`