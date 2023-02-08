import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const Card = (props:any) => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    const Btn = styled('button')`

      background-color: transparent;
      color:  ${hover ? '#fff' : '#000'};
      font-family: roboto, cursive;
      font-size:16px;
      padding:8px;
      min-width: 80px;
      border-radius: 4px;
      border:  ${hover ? '1px solid #565b91c4' : '1px solid #101222c4'};
      :hover{
        cursor:pointer;
        border: 1px solid #444a84c4;
        box-shadow: 1px 1px 1.9px 1px rgba(138, 135, 140, 0.131);
        background-color: #cce7f528;
        transition: all .9s ease-in-out;
      }
   
   ` 



  return (
    
    <div tabIndex={0} className="myCard"  onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
         <img src={props.svg} loading='lazy' className='show' alt="alt" />
         <div style={{margin:'10px', textAlign:'left'}}>
             <h3 style={{zIndex:13,fontFamily: 'roboto, cursive',fontWeight:400, lineHeight: 1.21}}>{props.title}</h3> 
             <p style={{zIndex:13,fontFamily: 'Lato, sans-serif, italic',fontWeight:300, lineHeight: 1.21}}>{props.subTitle}</p>
             <Btn onClick={()=>{navigate("/projects", { state: { type: props.title } } )}} >View Projects</Btn>   
        </div>
    </div>
  )
}

export default Card