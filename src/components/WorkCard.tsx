import React, { useState } from 'react'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Grid } from '@mui/material';

const WorkCard = () => {

    const [openInfo, setOpenInfo] = useState(false)


    const dropdown = () => {
      setOpenInfo(!openInfo)
    }
    
  return (
    <div className="aboutContainer">
    <div className="aboutContainerHeader">
        <h3 className = "company">Ukemey Inc.</h3>
        <div className='dropdown' onClick={dropdown}>
        {openInfo == true?<KeyboardDoubleArrowUpIcon/>:<KeyboardDoubleArrowDownIcon/> }
        </div>
    </div>
  { openInfo && <div className="aboutHeader2">
  
        <h4 style={{display:'flex',justifyContent: 'center', alignItems: 'center',margin:'5px'}}><LocationOnIcon/> Remote</h4>
        <h4 style={{display:'flex',justifyContent: 'center', alignItems: 'center',margin:'5px'}}><WorkOutlineIcon />  Jr. Fullstack Developer</h4>
        <h4 style={{display:'flex',justifyContent: 'center', alignItems: 'center',margin:'5px'}}>Sept 2021 - March 2022</h4>
    </div> }
    <div className="aboutContainerBody">
        <p className="description">Component creation, management and documentation with modern tools. Developed mobile and web based applications for clients of the company.</p>
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
  )
}

export default WorkCard