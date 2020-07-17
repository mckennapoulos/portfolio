import React, { useState, useEffect } from 'react'
import { NavText, Link } from '../styled/Styled'
import styled from 'styled-components'
import { brandBlack, brandColor } from '../styled/Colors'
import '../styled/styles.css';


export const NavContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    position: fixed;
    z-index: 100;
    right: 0;
    max-width: 1160px;
    @media (max-width: 1650px) {
        margin: 50px 140px 0 140px;
      }
    margin: 50px 300px 0 300px;
`

function Nav () {

    const [activeTab, setActiveTab] = useState('')

    const currentTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <NavContainer>
            <Link href='#featured0'><NavText 
                id='featuredNav'
                onClick={() => {
                    currentTab('featured')
                }}
                active={activeTab === 'featured'}
                ><span>&ensp;featured&ensp;</span></NavText></Link>
            <Link href='#portfolio'><NavText 
                id='portfolioNav' 
                onClick={() => {
                    currentTab('portfolio')
                }}
                active={activeTab === 'portfolio'}

                ><span>&ensp;portfolio&ensp;</span></NavText></Link>
            <Link href='#about'><NavText 
                id='aboutNav' 
                onClick={() => {
                    currentTab('about')
                }}
                active={activeTab === 'about'}
                ><span>&ensp;about&ensp;</span></NavText></Link>
        </NavContainer>
    )
}

export default Nav

