import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../reducers/windowReducer';

const Skills = (props:any) => {
    const dispatch = useDispatch()
    
    const H2 = styled('h2')`
    color: #1d1d1f;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`
    const Body = styled('div')`
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    background-color: #0a384736;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s ease-in-out;


    `

    const Header = styled('h3')`
    color: #373539;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 20px;
    padding: 8px;
    border-bottom: 0.4px solid #ccc;
    border-top: 0.4px solid #ccc;

   ` 

  return (
    <Body >
       <div className="modal">
        <div className="closeIconContainer" onClick={()=>{dispatch(toggleModal({modalOpen:false}))}}>
            <CloseIcon/>
        </div>
        <H2> Skills</H2>
        <Header>Web Development</Header>
         <Grid container spacing={3} className='skillsGrid'>
         <Grid item xs={12} sm={4} >
                <p>Html</p>
                <p>
                <span >
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color: '#3b0f3b7b' }}/>
                <StarIcon sx={{ color:  '#3b0f3b7b' }}/>
                <StarIcon sx={{ color:  '#3b0f3b7b' }}/>
                <StarHalfIcon sx={{ color:  '#3b0f3b7b' }}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} >
                <p>Javascript</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarHalfIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>CSS</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>ReactJS</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>React Native</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>Tailwind</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>MaterialUI</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>Typescript</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            
         </Grid>
        
          
         <Header>Database</Header>
         <Grid container spacing={3}>
         <Grid item xs={12} sm={4} className="">
                <p>MongoDB</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>MySQL</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>Firebase</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            </Grid>
         <Header>Software Development</Header>
         <Grid container spacing={3}>
         <Grid item xs={12} sm={4} className="">
                <p>C++</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>QT Creator</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            <Grid item xs={12} sm={4} className="">
                <p>Python</p>
                <p>
                <span>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                <StarBorderIcon sx={{ color:  '#3b0f3b7b'}}/>
                </span>
                </p>
            </Grid>
            </Grid>

       </div>
    </Body>
  )
}

export default Skills