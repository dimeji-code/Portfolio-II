import { useEffect } from 'react'
import { toggleCurrent } from '../reducers/windowReducer';
import { useDispatch } from 'react-redux';
import AnimatedList from '../components/AnimatedList';
import WorkCard from '../components/WorkCard';

const About = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(toggleCurrent({currentPage: 'about'}))

    },[])


  return (
     <div className='white' style={{padding:"8%", lineHeight: "40px",display:'flex',flexDirection:'column',alignItems: "center"}}>
        <AnimatedList/>

         <h4 id="myDescription">"Hi there, I am a developer with an eye for design."</h4>

        <div className="aboutContainer">
          <div className="aboutContainerHeader">
            <h3 className = "company">Profile</h3>
          </div>
          <div style={{textAlign: "left",paddingLeft: '10px'}}>
            <h5 className=''>Education: Carleton University Alumni </h5> 
            <h5 className=''>Degree: Bach. of Science (Computer)</h5> 
            <h5 className=''>Certification: AWS Cloud Practitioner </h5> 
          </div>
         <h4 style={{fontFamily: 'Roboto',fontSize:'20px',fontWeight: '500',color: '#222121', textAlign:'left',padding:'10px', lineHeight:'30px'}}>I am a Fullstack developer located in Ontario, Canada.
          I am very passionate about technology with relevant exposure and experience with tools like React, MongoDB and Typescript. 
          I am very observant and well organized.
          </h4>
        </div>




        <h2 className='heading'>Work Experience</h2>
       <WorkCard/>
       <h4 id="myDescription">"My main aim for the future is to  expand my knowledge in the tech industry and become a master at my craft. I am already learning a lot about web development, databases and automation tools. I can't wait to do more." <br/> - Dimeji
        </h4>
        </div> 
  )
}

export default About
