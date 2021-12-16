import styled from "styled-components";



const Contactpage=styled.div`
display:flex;
flex-direction:colunm;
align-items:center;
background-color:#EFF5F9;
height:100vh;
justify-content:space-between;
width:100%;
padding:2em;
gap:1em;
margin:0 auto;

`

const Leftcontact=styled.div`
width:50%;

`

const Rightcontact=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:50%;
height:100vh;
background-color:white;
position:relative;
z-index:3;
`


const Contact=()=>{
    return(
        <Contactpage>
<Leftcontact>
    <h3>Get in touch</h3>
    <p>For business inquires or press related inquires please use the form or email me on:</p>
    <a style={{color:"#468FF9", cursor:"pointer"}}>stevemuasa26@gmail.com</a>
    <p>For support issues please use the support function in your admin panel or the contact form in The <a href="" style={{color:"#468FF9"}}>Learn Section</a></p>
</Leftcontact>
<Rightcontact>
    <h4>Contact me</h4>
    <input type="text" placeholder="name"  style={{width:"60%", height:"5vh", marginBottom:"1em", outline:"none",border:"1px solid #468FF9",borderRadius:".2em" }}/>
    <input type="text" placeholder="Email" style={{width:"60%", height:"5vh", marginBottom:"1em",outline:"none",border:"1px solid #468FF9",borderRadius:".2em"}}/>
    <textarea cols="54" rows="5" placeholder="Question?" style={{outline:"none",border:"1px solid #468FF9",borderRadius:".2em"}}></textarea>

    <p>By sending the message you agree to our <a href="#" style={{color:"#468FF9"}}>Privacy Policy</a></p>
    <button style={{textAlign:"center",cursor:"pointer",color:"white", width:"25%",height:"5vh", fontSize:"1rem",border:"1px solid #468FF9",borderRadius:".2em", backgroundColor:"#468FF9"}}>Send</button>
</Rightcontact>
</Contactpage>
    )
}
export default Contact