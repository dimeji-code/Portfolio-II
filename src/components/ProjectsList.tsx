import  { useEffect } from 'react'
import { Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { toggleCurrent } from '../reducers/windowReducer';
import { useDispatch } from 'react-redux';

const ProjectsList = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(toggleCurrent({currentPage: 'projects'}))
        console.log('5 - 3.5 => ', 5-3.5);
        console.log('5 - 3.5 floor => ', Math.floor(5-3.5));
        console.log("env =>" ,process.env.PUBLIC_URL );

    
    },[])
    
    const H2 = styled('h2')`
    color: #e2e2e9;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`

    const {state} = useLocation();
    const { type } = state; // Read values passed on state
    const webList = ( type == "Fullstack Development" ? [
        {image:"/ems.png",title:"Employee Management System",tools:"Typescript, React, MaterialUI, MySQL",description:"Manage employees of a fake company with MySQL and Express.",rating:4.5,link:"https://ems-production-f785.up.railway.app/",}, 
        {image:"/covidtracks.png",title:"Covid 19 Tracker",tools:"Typescript, React, Tailwind CSS, Redux, AWS",description:"Using free Covid-19 Api and React to serve statistics graphically.",rating:3.5,link:"https://www.covidtracks.com/",}, 
        {image:"/gaffer.png",title:"GAFFER (Task Management App)",tools:"MERN (MongoDB, Express, React,Node)",description:"Slack remake for group channels and collaboration.",rating:4,link:"https://projectmanager-gaffer.up.railway.app/",},       
        {image:"/slack.png",title:"Slack Clone",tools:"JS, React, Firebase, Redux",description:"Slack remake for group channels and collaboration.",rating:5,link:"https://github.com/dimeji-code/SlackDemo",},
        ] 
        
       : 
       [
        {image:"/Webscrape.png",title:"Soccer News Webscraper.",tools:"Python, Selenium, ElectronJS",description:"GUI that allows scraping of the latest news in the world of soccer.",rating:4.0,link:"https://github.com/dimeji-code/news-scraper",},
        {image:"/therapy.png",title:"Denas electrotherapy simulation.",tools:"C++ (Qt Creator)",description:"Simulation of special electro-therapy hardware that administers shocks to cure different ailments.",rating:3.5,link:"https://github.com/dimeji-code/Therapy-software-QT",},
        {image:"/city.png",title:"City_2 (Group project)",tools:"Processing 3",description:"An aerial-view shooter game in a city riddled with crime.",rating:3.5,link:"https://github.com/dimeji-code/City_2",},
        {image:"/quote.png",title:"Quote Tag",tools:"Swift (Xcode)",description:"Trivia game that tests knowledge on tv shows and movies by getting players to match famous quotes.",rating:4.5,link:"https://github.com/dimeji-code/Quote-Tag",},
    ]
    )

    const createRating = (num: number) => {
        var whole = Math.floor(num)
        var fraction = num % 1
        var last = Math.ceil(fraction)
        var stars = []

        for(var i = 0; i < whole;i++){
            stars.push(<StarIcon style={{color:'#877032c8'}}/>)                   
        }
        if (fraction > 0){
          stars.push(<StarHalfIcon style={{color:'#877032c8'}}/>);
        }
        for(var i = (whole+last); i < 5;i++){
            stars.push(<StarBorderIcon style={{color:'#877032c8'}}/>)                   
        }
        
        return (<span>{ stars }</span>);
      };
    

  return (
    <div style={{height:'100vh',display:'flex',flex:1,flexDirection:'column',  alignItems: 'center', overflow:'scroll', paddingTop:'5%'}}>
        <H2>{type}</H2>
        
        <Grid container spacing={6} sx={{paddingTop:'1%',paddingLeft:"8%",paddingRight:'8%',paddingBottom:'1%'}}>
            {webList.map((item:any) => { return(

                <Grid item xs={12} sm={12} md={6} sx={{textAlign:'center'}}>

                <div  style={{backgroundColor:'#fff', border:'0.4px solid #ccc', borderRadius:'5px', overflow:'hidden'}}>
                    <div  >
                        <img                           
                            loading='lazy'
                            src={process.env.PUBLIC_URL  +item.image}
                            alt="Card image cap"
                            style={{objectFit:'contain',maxWidth:'100%', maxHeight:'100%'}}
                        />
                        <div  style={{textAlign:'left', padding: '10px'}}>
                            <h3 className="card-title">{item.title}</h3>
                            {/* <h6 className="card-text">Collaboration simplified.</h6> */}
                            <a
                            href={item.link}
                            className="btn"
                            target = "_blank"
                            style={{color: "#a9aae6", border: "0.6px solid #7e7f9dba", padding: "10px", textDecoration:'none', borderRadius: "5px"}}
                            >See more</a>
                        </div>
                        <div  style={{textAlign:'left', padding: '10px'}}>
                            <p>Language: {item.tools}</p>
                            <p style={{textAlign:'left',display:'flex',justifyContent:'left',alignContent:'center',alignItems: 'center'}}>
                            Difficulty: {createRating(item.rating)}
                                
                            </p>
                            <p >
                            {item.description}
                            </p>
                        </div>
                    </div>
                </div>
                </Grid>
                )
            })}
          
        </Grid>


    </div>
  )
}

export default ProjectsList