import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color:#6767cb;
    width:100vw;
    height:100vh;
    padding:0;
    margin:0;
    margin:0;
}
`
export const Heading = styled.header`
text-align:center;
font-size:3em;
color:white;
font-family:sans-serif;
margin-bottom:5vh;
`
export const ChangeTeme = styled.div`
display:flex;
align-items:center;
cursor:pointer;
color:white;
font-size:18px;
font-family:sans-serif;
`
export const WrapperInput = styled.div`
width:100vw;
display:flex;
justify-content:center;
gap:20px;
@media(max-width:768px){
padding-left:20px;
}
`
interface PropsTeme{
    tema:boolean
}
export const InputToAdd = styled.input`
padding:5px;
border:none;
margin-right:4px;
`
export const SendButton = styled.button`
background-color:blue;
border:none;
padding:5px 10px;
color:white;
`
export const WrapperTask = styled.div<PropsTeme>`
margin-top:20px;
display:flex;
width:100vw;
height:80vh;

justify-content:center;
>div{
background-color:${({tema}) =>(tema ? "#50526f" : "#c1e2fd")};
white-space: normal;
overflow-y:auto;
overflow-x:hidden;
display:flex;
flex-direction:column;
gap:3px;
@media(max-width:768px){
    width:80vw;
    max-height:65vh;  
    max-width:80vw;  
}
width:70vw;
max-width:70vw;
max-height:80vh;
}
`
export const TaskItem = styled.div<PropsTeme>`
display:flex;
background-color:${({tema}) =>(tema ? "#5b5b65" : "white")};
color:${({tema}) =>(tema ? "white" : "black")};
padding:5px;
font-size:14px;
font-family:sans-serif;
justify-content: space-between;
@media(max-width:768px){
    max-width:77vw;
    width:77vw;  
    height:6vh;
}
max-width:69vw;  
width:69vw;
height:3vh;
`
interface Props  {
    isSucces:boolean
}
export const TaskText = styled.div<Props>`
text-decoration: ${({ isSucces }) => (isSucces ? "line-through" : "none")};
@media(max-width:768px){
max-width:42vw;
}
overflow-wrap: break-word;
`
export const DeleteButton = styled.div`
background-color:red;
display:flex;
align-items: center;
color:white;
padding:2px;
cursor:pointer;
border-radius:3px;
`
export const TaskSucces = styled(DeleteButton)`
background-color:green;
`