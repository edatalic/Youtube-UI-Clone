import React from 'react'
import styled from 'styled-components'
import EdaTube from "../img/EDATUBE LOGO.png"


const Container = styled.div`
    display:flex;
    gap:10px;
    margin:30px 0px;
`
const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`

const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px ;
    color: ${({theme}) => theme.text};
`

const Name = styled.span`
    font-size:13px;
    font-weight:500;
`

const Date = styled.span`
    font-size:12px;
    font-weight:400;
    color: ${({theme}) => theme.textSoft};
    margin-left:5px;
`

const Text = styled.p`
    font-size:14px;
`


const Comment = () => {
  return (
    <Container>
        <Avatar src={EdaTube} />
        <Details>
            <Name>John Deo<Date>1 day ago</Date></Name>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit asperiores eaque, possimus molestias, minus sit velit fuga veritatis aliquam rerum in ut dolorem quibusdam temporibus dolor veniam non quasi!</Text>
        </Details>
    </Container>
  )
}

export default Comment