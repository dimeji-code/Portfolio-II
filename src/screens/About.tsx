import { useEffect } from 'react'
import { toggleCurrent } from '../reducers/windowReducer';
import { useDispatch } from 'react-redux';
import AnimatedList from '../components/AnimatedList';
import WorkCard from '../components/WorkCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(toggleCurrent({currentPage: 'about'}))

    },[])


  return (
     <div className='white' style={{padding:"8%", lineHeight: "40px",display:'flex',flexDirection:'column',alignItems: "center"}}>
        <AnimatedList/>

         {/* <h4 id="myDescription">"Hi there, I am a developer with an eye for design."</h4> */}

        <div className="aboutContainer">
          <div className="aboutContainerHeader">
            <h3 className = "company">Profile</h3>
            <img src={process.env.PUBLIC_URL +"/me.jpg"} style={{
              width:'50px',height:'50px', borderRadius:'50%',objectFit:'cover',display:'flex',justifyContent: 'center',alignContent: 'center',alignItems: 'center',margin:'15px'
              }} />
          </div>
          <div style={{textAlign: "left",paddingLeft: '15px'}}>
            <h5 className=''>Education: Carleton University, (BSc) </h5> 
            {/* <h5 className=''>Degree: Bach. of Science (Computer)</h5>  */}
            {/* <h5 className=''>Certification: AWS Cloud Practitioner </h5>  */}
          </div>
          <h4 className='h4Description'>
            I am a Fullstack developer located in Ontario, Canada with a passion for creating responsive, scalable and efficient websites.
            </h4>
         <h4 className='h4Description'>
          I love learning about new technologies with my experience ranging from <span className='spanText'>Web Development</span> to <span className='spanText'>Automation</span>.
          From my work experience, I have had the opportunity to collaborate with talented people from different timezones. 
          </h4>
          <div className='wrapper'>
            <ul className='qaz'>
              <li className='qazItem spanText'>Frontend Development</li>
              <li className='qazItem border'></li>
              <li className='qazItem spanText'>Backend Development</li>
              <li className='qazItem border'></li>
              <li className='qazItem spanText'>Automation</li>
              <li className='qazItem border'></li>
              <li className='qazItem spanText'>Software Development</li>
              <li className='qazItem border'></li>
            </ul>
          </div>
          <h4 className='h4Description'>I am currently looking for a new role. Feel free to reach out.</h4>
          <div className="buttoncontainer">
            <a target = "_blank" className='button darkbutton' href='https://www.linkedin.com/in/dimejisitu-4ba2b1211/'>Linkedin <LinkedInIcon/></a>
            <a target = "_blank" className='button lightbutton' href='https://github.com/dimeji-code'>Github <GitHubIcon/></a>
          </div>
        </div>




        <h2 className='heading'>Work Experience</h2>
       <WorkCard/>
       <h4 id="myDescription">"My main aim for the future is to become a master at my craft and achieve longevity in the tech industry. I can't wait to learn more." <br/> - Dimeji
        </h4>
        </div> 
  )
}

export default About
