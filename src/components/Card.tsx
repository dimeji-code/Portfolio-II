import { useNavigate } from 'react-router-dom';



const Card = (props:any) => {
    const navigate = useNavigate()

  return (
    
    <div tabIndex={0} className="myCard" >
         <img style={{width:'auto',height:'auto'}} src={props.svg} loading='lazy' className='show' alt="alt" />
         <div style={{margin:'10px', textAlign:'left'}}>
             <h3 style={{zIndex:13,fontFamily: 'roboto',fontWeight:400, lineHeight: 1.21}}>{props.title}</h3> 
             <p style={{zIndex:13,fontFamily: 'Lato, sans-serif',fontWeight:300, lineHeight: 1.21}}>{props.subTitle}</p>
             <button id='viewProj' onClick={()=>{navigate("/projects", { state: { type: props.title } } )}} >View Projects</button>   
        </div>
    </div>
  )
}

export default Card