import React, { useEffect } from 'react'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid } from '@mui/material';
import { toggleCurrent } from '../reducers/windowReducer';
import { useDispatch } from 'react-redux';

const About = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(toggleCurrent({currentPage: 'about'}))

    },[])
  return (
     <div className='white' style={{padding:"8%", lineHeight: "40px",display:'flex',flexDirection:'column',alignItems: "center"}}>
        <h2>About Me</h2>
        <h4>"Hi there, I am a Carleton University Alumni with a Bach. Degree in Computer Science.
        I have short term work experience as a Jr. fullstack developer with exposure to tools like React, MongoDB and Typescript. 
        At my  previous job, I had the privilege of working with talented people from different time zones and I thrive on collaboration.
        C++ is also one of my core strengths for creating Desktop applications with QT creator.
        My main aim for the future is to achieve longevity in the tech industry by expanding my knowledge in the data field and web development. I am already learning a lot about databases and automation tools, I can't wait to do more."
        </h4>
        <h2>Work Experience</h2>
        <div className="aboutContainer">
            <div className="aboutContainerHeader">
                <h3>Ukemey Inc.</h3>
                <h3>Sept 2021 - March 2022</h3>
            </div>
            <div className="aboutHeader2">
                <h4 style={{display:'flex',justifyContent: 'center', alignItems: 'center',margin:'5px'}}><LocationOnIcon/> Remote</h4>
                <h4 style={{display:'flex',justifyContent: 'center', alignItems: 'center',margin:'5px'}}><WorkOutlineIcon />  Jr. Fullstack Developer</h4>
            </div>
            <div className="aboutContainerBody">
                <p>Component creation, management and documentation with modern tools. Developed mobile and web based applications for clients of the company.</p>
                <div className="toolslist">
                <Grid container  > 
                    <Grid item><h3 className="aboutToolItem">Javascript</h3></Grid>
                    <Grid item><h3 className="aboutToolItem">CSS</h3></Grid>
                    <Grid item><h3 className="aboutToolItem">MongoDB</h3></Grid>
                    <Grid item><h3 className="aboutToolItem">ReactJS</h3></Grid>
                    <Grid item><h3 className="aboutToolItem">React Native</h3></Grid>
                    <Grid item><h3 className="aboutToolItem">PuppeteerJS</h3></Grid>
                </Grid>
                </div>
            </div>
        </div>

        </div> 
  )
}

export default About