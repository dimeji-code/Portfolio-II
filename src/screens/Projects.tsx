import React, { useEffect } from 'react'
import { Grid } from '@mui/material';
import Card from '../components/Card';
import { useDispatch } from 'react-redux';
import { toggleCurrent } from '../reducers/windowReducer';

const Projects = () => {

  return (
    <div className="body show" id="projects">

        

        <Grid container spacing={6} sx={{paddingTop:'2%',paddingLeft:"8%",paddingRight:'8%'}}>
          <Grid item xs={12} sm={6} sx={{textAlign:'center'}}>
            <Card 
            title="Software Development"
            subTitle="C++, QT creator, Desktop Applications, Mobile Applications and Games."
            svg="./software.svg"
            
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{textAlign:'center'}}>
            <Card 
            title="Fullstack Development"
            subTitle="Fullstack deployments. Relational & Non-Relational Databases"
            svg="./fullstack.svg"

            />
          </Grid>
         </Grid>

    </div>
  )
}

export default Projects