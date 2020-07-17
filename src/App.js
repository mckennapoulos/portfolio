import React from 'react';
import './App.css';
import {
    Switch,
    Route,
    Link,
    BrowserRouter,
    NavLink
  } from "react-router-dom";
import { CaseStudy } from './components/CaseStudy';
import Home from './components/Home';
import Nav, { NavContainer } from './components/Nav';
import LogoLettersWhite from './logo/LogoLettersWhite.svg'
import { LogoContainer, NavText, RouterLink } from './styled/Styled';
import { brandBlack } from './styled/Colors';
import ScrollToTop from './components/ScrollToTop';

function Welcome(props) {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div>
                <LogoContainer>
                    <NavLink to="/"><img src={LogoLettersWhite} width='35px'/></NavLink>
                </LogoContainer>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/casestudy/:name" component={CaseStudy} exact />
                    <Route component={Error}/>
                </Switch>
            </div> 
      </BrowserRouter>
           
    )
}

export default Welcome;
