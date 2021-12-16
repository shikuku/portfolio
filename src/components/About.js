import styled from "styled-components";
import styles from "./About.module.css";

const Aboutpage=styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:1.3em;
height:50vh;
color:white;
font-size:1.5rem;
`


const Sectionleft=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:30%;`




const Sectioncenter=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:30%;`


const Sectionright=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:30%;`


const About=()=>{
    return(
<Aboutpage className={styles.img}>

<Sectionleft>
    <h3>2021</h3>
    <p>Was the year everything started and began the journey of Being frontend Developer.</p>
</Sectionleft>

<Sectioncenter>
    <h3>4000+</h3>
    <p>Number of hours coding Projects. Since the process is not easy, have tried to come up with suitable designed website</p>
</Sectioncenter>

<Sectionright>
    <h3>150+</h3>
    <p>With paying customers in 150 countries</p>
    <p>My aim is to be the best website builder in
         the world for creatives.</p>
</Sectionright>

</Aboutpage>
    )
}
export default About