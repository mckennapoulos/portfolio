import React, { useState } from 'react'
import { TertiaryText, FlexRow, Title, Line } from '../styled/Styled'
import { brandColor } from '../styled/Colors'
import styled from 'styled-components'
import '../styled/styles.css'

const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
`
const IntroContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`


function Intro () {

    return (
        <IntroContainer>
            <IntroContent>
                <Title style={{ fontSize: '35px'}}>mckenna poulos</Title>
                <Line width={'150px'}></Line>
                <Title style={{ fontSize: '35px'}}>a <mark className="intro" style={{color: brandColor}}>web developer</mark> based in Boston, Ma</Title>
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro

