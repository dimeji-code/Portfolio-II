import { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import SkillsPage from "../components/Skills";
import Projects from './Projects';
import {useSelector, useDispatch} from "react-redux"
import { toggleCurrent, toggleModal } from '../reducers/windowReducer';

const Landing = () => {
  const modalState = useSelector((state:any) => state.window.modalOpen)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(toggleCurrent({currentPage: 'landing'}))    
  },[])

  const Skills = styled('button')`

  background-color: transparent;
  border: 2px solid #565b91c4;
  color: white;
  font-size:19px;
  padding:8px;
  min-width: 80px;
  border-radius: 4px;
  :hover{
    cursor:pointer;
    border: 2px solid #603f7fd2;
    box-shadow: 1px 1px 1.9px 1px rgba(146, 131, 156, 0.131);
    background-color: #cce7f528;
    transition: all 0.7s ease-in-out;
  }
 ` 
const H4 = styled('h4')`
color: white;
font-weight: 200;
font-size: 28px;
`
const Name = styled('h2')`
color: white;
font-weight: 600;
font-size: 6.1rem;
color: #e2e9f0;

`



  return (


  <>
     {modalState && <SkillsPage /> } 

    <img src={process.env.PUBLIC_URL +"/topRight.svg"} loading='lazy' alt="alt" className=" show" style={{position:'absolute', right: '0', top:'0'}}/>
    {/* <img src={process.env.PUBLIC_URL + "/bottomLeft.svg"} loading='lazy' alt="alt" className="bottomImg show" style={{position:'absolute', left: '0', bottom:'0'}}/> */}
    <div className='landingTop' 
    >
        <div style={{textAlign:'center',flex:0.7}} className="show">
          <span>
            <Name className="">DIMEJI SITU</Name>
          </span>
          <H4 className="white">Fullstack, Mobile and Software Developer based in Ontario, Canada.</H4>
          <Skills onClick={()=>{dispatch(toggleModal({modalOpen: true}))}}> SKILLS</Skills>
        </div>
        
    </div>
      
    <Projects/>
  </>
)}

export default Landing