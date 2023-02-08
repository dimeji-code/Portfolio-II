import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const Card = (props:any) => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    const Btn = styled('button')`

    background-color: transparent;
    border: ${hover ? '1px solid #565b91c4' : 'none'};
    color:  ${hover ? '#fff' : '#000'};
    font-size:19px;
    padding:8px;
    min-width: 80px;
    border-radius: 4px;
    :hover{
      cursor:pointer;
      border: 1px solid #444a84c4;
      box-shadow: 1px 1px 1.9px 1px rgba(138, 135, 140, 0.131);
      background-color: #cce7f528;
      transition: all .9s ease-in-out;
    }
   
  
   ` 


    const Desc = styled('div')`

    h3, p{
        color: ${hover ? '#fff' : '#000'};
    }


    `

  return (
    
    <div className="myCard"  onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
         {/* {props.svg} */}
         <img src={props.svg} alt="alt" />
         <Desc style={{margin:'10px', textAlign:'left'}}>
             <h3 style={{zIndex:13,fontFamily: 'Unbounded, cursive',fontWeight:400, lineHeight: 1.21}}>{props.title}</h3> 
             <p style={{zIndex:13,fontFamily: 'Lato, sans-serif, italic',fontWeight:300, lineHeight: 1.21}}>{props.subTitle}</p>
             <Btn onClick={()=>{navigate("/projects", { state: { type: props.title } } )}} >view projects</Btn>
        </Desc>
        {/* <Btn>projects</Btn> */}
    </div>
  )
}

export default Card