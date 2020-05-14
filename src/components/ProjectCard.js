import React from 'react'
import { 
    Card,
    CardTitle,
    CardPreview
 } from '../styled/Styled'

export const ProjectCard = (props) => {

    return (
        <Card color={'blue'}>
            <CardTitle color={'white'}>This is the title</CardTitle>
            <CardPreview />
        </Card>
    )
}

