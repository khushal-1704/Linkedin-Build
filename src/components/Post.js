import React from 'react'
import styled from 'styled-components'
import PostModel from './PostModel'

function Post({ handleClick, title, info, date, postImg }) {
    return (
        <div>
            <Article>
                <SharedActor>
                    <a>
                        <img src="/images/user.svg" alt="" />
                        <div>
                            <span>{title}</span>
                            <span>{info}</span>
                            <span>{date}</span>
                        </div>
                    </a>
                    <button>
                        <img src="/images/ellipses.svg" alt="" />
                    </button>
                </SharedActor>
                <Description>
                    Lorem ipsum dolor sit amet.
                </Description>
                <SharedImg>
                    <a>
                        <img src={`/images/post-${postImg}`} alt="" />
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb
" alt="" />
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                            <span>75</span>
                        </button>
                    </li>
                    <li><a>2 comments</a></li>
                </SocialCounts>
                <SocialActions>
                    <button>
                        <img src="/images/like-icon.svg" alt="" />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src="/images/comment-icon.svg" alt="" />
                        <span>Comment</span>
                    </button>
                    <button>
                        <img src="/images/share-icon.svg" alt="" />
                        <span>Share</span>
                    </button>
                    <button>
                        <img src="/images/send-icon.svg" alt="" />
                        <span>Send</span>
                    </button>
                </SocialActions>
            </Article>
            <PostModel handleClick={handleClick} />
        </div>

    )
}

export default Post



const Article = styled.div`
margin-top: 5px;
text-align:center ;
overflow: hidden;
margin-bottom: 8px ;
background-color: #fff;
border-radius: 5px ;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 rgb( 0 0 0 / 20%) ;
padding: 0 ;
margin: 0 ;
overflow: visible; 

`

const SharedActor = styled.div`
padding-right: 40px ;
display: flex ;
flex-wrap: no-wrap ;
padding: 12px 16px 0 ;
margin-bottom: 8px ;
align-items: center;
a {
    margin-right: 12px; 
    flex-grow: 1 ;
    overflow: hidden ;
    display: flex; 
    text-decoration: none ;

    img{
        width: 48px ;
        height: 48px;

    }

    & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px ;
        overflow: hidden ;
        span{
            text-align: left ;
            &:first-child{
                font-size: 14px ;
                font-weight: 800 ;
                color: rgba(0 , 0 , 0 , 1)
            }
            &:nth-child(n+ 1){
                font-size: 12px ;
                color: rgba(0 , 0 , 0 ,0.6)
            }
        }
    }
}

button {
    position: absolute ;
    right: 12px ;
    top: 0 ;
    background: transparent ;
    border: none;
    outline: none ;
    }


`

const Description = styled.div`
padding: 0 16px ;
overflow: hidden;
color: rgba(0 , 0 , 0 , 0.9) ;
font-size: 14px ;
text-align :left; 

`



const SharedImg = styled.div`
margin-top: 8px ;
width: 100% ;
display:block ;
position: relative;
background-color: #f9fafb;
img{
    object-fit: contain;
    width: 100%; 
    height: 100%;
}

`

const SocialCounts = styled.div`
line-height: 1.3;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9efdf;
	color: rgba(0, 0, 0, 0.6);
	list-style: none;
	li {
		margin-right: 5px;
		font-size: 12px;
		button {
			display: flex;
			border: none;
			color: rgba(0, 0, 0, 0.6);
			background: transparent;
			span {
				padding-left: 5px;
			}
		}
	}
`

const SocialActions = styled.div`
align-items: center ;
display: flex;
justify-content: space-between;
margin: 0;
min-height: 40px ;
padding: 4px 8px ;
button{
    display: inline-flex;
    align-items: center;
    padding:8px;
    color: #0a66c2 ;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        
    }


    @media(min-height: 768px){
span{
    margin-left: 8px;
    &:hover{
color: red;
    }
}
    }
}

`

