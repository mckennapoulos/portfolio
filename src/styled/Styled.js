import styled, { css } from 'styled-components'

export const Card = styled.div`
  background-color: ${props => props.color};
  width: 300px;
  height: 250px;
`
export const CardTitle = styled.h3`
    font-family: "franklin-gothic-urw", sans-serif;
    font-weight: 700;
    padding: 50px 0 0 25px;
    postion: relative;
    color: ${props => props.color};
`
export const CardPreview = styled.div`
  background-color: #4d4d4d;
  border-outline: 1px;
  border-color: red;
  width: 200px;
  height: 150px;
`

export const Wrapper = styled.div`
  margin: 0 150px 0 150px;
`