import React from 'react'
import styled from 'styled-components'
import Post from './Post';

function Posts({ handleClick }) {
    return (
        <Container>
            <Post handleClick={handleClick} title='Google' info='40,000' date='3d' postImg='1.jfif' />
            <Post handleClick={handleClick} title='Amazon' info='80,000' date='1d' postImg='2.jfif' />
            <Post handleClick={handleClick} title='XYZ' info='5,000' date='1w' postImg='3.jfif' />
            <Post handleClick={handleClick} title='LOREM' info='800' date='1m' postImg='4.jfif' />
        </Container>
    )
}

export default Posts;


const Container = styled.div`

`