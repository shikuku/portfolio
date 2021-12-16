import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    
    width:100%;


`

const Navigation=styled.div`

    background-color:black;
    color:white;
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:center;
    font-size:1.5rem;
padding:1em;
`



const Navigationleft=styled.div`
    display:flex;
    align-items:center;
    gap:1em;
    width:40%;
`


const Navigationright=styled.div`
    display:flex;
    justify-content:space-between;

    width:60%;
`

const Nav=()=>{
    return(
<Container>
<Navigation>
        <Navigationleft>
        <span>Stephen</span> 
        <span style={{color:"red" }}>Muasa</span>
    </Navigationleft>

    <Navigationright>
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Contact</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
    </Navigationright>

</Navigation>


</Container>
    )
}
export default Nav