import Image from "next/image";
import styled from "styled-components";
import img from "../../public/Images/profile.png";


const Herocontainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:#F1F6FA;
width:100%;
padding-bottom:1em;`



const Heroleft=styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`



const Heroright=styled.div`
width:50%;
border-radius:2px solid #F1F6FA;
display:flex;
justify-content:center;
align-items:center;`

const Hero=()=>{
    return(
        <Herocontainer>
           <Heroleft>
               <h1>Introduction</h1>
               <p>Hello, My name is Stephen Muasa.</p>
               <p>Aged 22years old now,</p>
               <p>Being a frontend Developer</p>
               <button style={{backgroundColor:"#8AFEC7",color:"white",fontSize:"1.3em",borderRadius:".2em", border:"none", cursor:"pointer"}}>learn more</button>
           </Heroleft>
           <Heroright>
<Image src={img} width={"180px"} height={"210px"} />
           </Heroright>
        </Herocontainer>
    )
}
export default Hero;