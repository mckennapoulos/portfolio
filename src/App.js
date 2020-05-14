import React from 'react';
import './App.css';
import { ProjectCard } from './components/ProjectCard'
import { Wrapper } from './styled/Styled'


function Welcome(props) {
    return (
        <Wrapper>
            <ProjectCard />
        </Wrapper>
    );
}

export default Welcome;
