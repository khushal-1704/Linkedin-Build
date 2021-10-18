import React, { Component, useState } from 'react'
import styled from 'styled-components'
import Posts from './Posts';
import PostModel from './Posts';

function Main() {
    const [showModel, setShowModel] = useState('close')


    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch (showModel) {
            case "open":
                setShowModel("close");
                break;
            case "close":
                setShowModel('open');
                break;
            default:
                setShowModel('close');
                break;
        }
    }
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src="/images/user.svg" alt="" />
                    <button onClick={handleClick}>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src="/images/photo-icon.svg" alt="" />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src="/images/video-icon.svg" alt="" />
                        <span>video</span>
                    </button>
                    <button>
                        <img src="/images/event-icon.svg" alt="" />
                        <span>event</span>
                    </button>
                    <button>
                        <img src="/images/article-icon.svg" alt="" />
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <Posts showModel={showModel} />
        </Container>
    )
}

export default Main;

const Container = styled.div`
grid-area: main;

`

const CommonCard = styled.div`
text-align:center ;
overflow: hidden;
margin-bottom: 8px ;
background-color: #fff;
border-radius: 5px ;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 rgb( 0 0 0 / 20%) ;

`

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b ;
margin: 0 0 8px ;
background: white;
div {
    button {
        outline: none;
        color: rgba(0 , 0  ,0  , 0.6) ;
        border: none ;
        font-size: 14px ;
        line-height:1.5 ;
        min-height:48px ;
        background: transparent; 
        display: flex ;
        align-items:center; 
        font-weight: 600 ;
        }
        &:first-child {
            display: flex ;
            align-items: center ; 
            padding: 8px 16px 0px 16px ;
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px ; 
            }
            button{
                margin: 4px 0 ;
                flex-grow: 1 ;
                border-radius: 35px ;
                padding-left: 16px ;
                border: 1px solid rgba(0 , 0 , 0 , 0.15) ;
                background-color: white ;
                text-align: left ;
                
            }
        }
    &:nth-child(2){
        display: flex;
        flex-wrap: wrap ;
        justify-content: space-around ;
        padding-bottom: 4px ;
        

        button{
            transition: all .5s;
            img{
                margin: 0 4px 0 -2px ;
            }
            span{
                color: #70b5f9 ;
            }
            &:hover{
                    background-color: lightgray;
                    border-radius: 8px;
                    padding: 10px 22px;
                }
        }
    }
}
`
