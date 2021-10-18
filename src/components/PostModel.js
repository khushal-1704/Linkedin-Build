import React, { useState } from 'react'
import styled from 'styled-components'

function PostModel(props) {


    return (
        <>
            {props.showModel === 'open' &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button >
                                <img src="/images/close-icon.svg" alt="" />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                <img src="/images/user.svg" alt="" />
                                <span>Name</span>
                            </UserInfo>
                            <textarea placeholder='what do you want to talk?'></textarea>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton>
                                    <img src="/images/share-image.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/share-video.svg" alt="" />
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src="/images/share-comment.svg" alt="" />
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton>
                                Post
                            </PostButton>
                        </SharedCreation>
                    </Content>
                </Container>
            }
        </>
    )
}

export default PostModel


const Container = styled.div`
position: fixed;
top: 0 ; 
left: 0 ; 
bottom: 0;
right: 0 ; 
z-index : 9999 ;
background-color: rgba(0 , 0 , 0 , 0.3);
`

const Content = styled.div`
width: 100% ;
max-width: 552px ;
background-color: white;
max-height: 90%;
overflow: initial;
border-radius: 5px ;
position: relative;
display: flex ;
flex-direction : column ;
touch-action: 32px;
margin: 0 auto ;

`

const Header = styled.div`
display: block ;
padding: 16px 28px;
border-bottom: 1px solid rgba(0 , 0 , 0 , 0.15);
font-size: 16px;
line-height: 1.5 ;
color: rgba(0 , 0 , 0 , 0.6) ;
font-weight: 400 ;
display: flex;
justify-content: space-between;
align-items: center;

button{
    height:40px ;
    width: 40px;
    min-width: auto;
    color: rgba( 0 , 0 , 0 , 0.15)
    svg{
        pointer-events: none;
    }
}

`

const SharedContent = styled.div`
display: flex ;
flex-direction: column;
flex-grow: 1;
overflow-y: auto ;
vertical-align: baseline ;
background: transparent;
padding: 8px 12px ;


`

const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px ;

 svg , img {
    width: 48px ;
    height: 48px ;
    background-clip: content-box;
    border: 2px solid transparent ; 
    border-radius: 50%;
}

span {
    font-weight: 600 ;
    font-size: 16px ;
    line-height: 1.5;
    margin-left: 5px ;
}


`

const SharedCreation = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 24px 12px 16px ;

`

const AssetButton = styled.div`
display: flex;
align-items: center;
height: 40px;
min-width: auto ;
color: rgba(0,0 ,0, 0.5)

`


const AttachAssets = styled.div`
align-items: center ;
display: flex;
padding-right: 8px;
${AssetButton}{
    width: 40px ;
    
}

`


const ShareComment = styled.div`
padding-left: 8px;
margin-right: auto ;
border-left: 1px solid rgba(0 , 0 , 0 , 0.15) ;
${AssetButton}{
    svg{
        margin-right: 5px;

    }
}
`

const PostButton = styled.button`
min-width: 60px;
border-radius: 20px;
padding-left: 16px;
padding-right: 16px;
background-color: #0a66c2 ;
color: white;  
&:hover{
    background-color: #004182;
}
`