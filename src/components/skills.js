import styled from "styled-components";
import Image from "next/image";
import html from '../../public/Images/html.svg';
import css from '../../public/Images/css.svg';
import js1 from '../../public/Images/js1.svg';
import github from '../../public/Images/github.svg';
import ubuntu from '../../public/Images/ubuntu.svg';
import linux from '../../public/Images/linux.svg';
import nextjs from '../../public/Images/nextjs.svg';
import mui from '../../public/Images/mui.svg';
import react from '../../public/Images/react.svg';
import sass1 from '../../public/Images/sass1.svg';
import vscode from '../../public/Images/vscode.svg';
import bootstrap from '../../public/Images/bootstrap.svg';
import terminal from '../../public/Images/terminal.svg';





const Skillcontainer=styled.div`

text-align:center;
gap:2em;

`
const Items=styled.div`
`



const Skills=()=>{
    return(
<Skillcontainer>
<h3>I have gained super unique technical skills in programming such as:</h3>
<Items style={{listStyleType:"none", lineHeight:"2",display:"flex",flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap"
  }}>
      
    <a style={{display:"flex",alignItems:"center"}}><Image src={html} width={"50px"} height={"30px"} />HTML5</a>
     <a style={{display:"flex",alignItems:"center"}}><Image src={css} width={"50px"} height={"30px"} />CSS3</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={js1} width={"50px"} height={"30px"} />JS(ES6)</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={sass1} width={"50px"} height={"30px"} />SASS</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={bootstrap} width={"50px"} height={"30px"} />Bootstrap</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={react} width={"50px"} height={"30px"} />React</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={mui} width={"50px"} height={"30px"} />Material ui</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={nextjs} width={"50px"} height={"30px"} />Next JS</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={vscode} width={"50px"} height={"30px"} />VScode</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={linux} width={"50px"} height={"30px"} />LINUX</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={ubuntu} width={"50px"} height={"30px"} />UBUNTU</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={terminal} width={"50px"} height={"30px"} />Terminal</a>
    <a style={{display:"flex",alignItems:"center"}}><Image src={github} width={"50px"} height={"30px"} />Git & GitHub</a>
</Items>
</Skillcontainer>
    )
}
export default Skills