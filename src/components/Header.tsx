// import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import $ from 'jquery';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate()
  const currentPage = useSelector((state:any) => state.window.currentPage)

  const goToByScroll = (id:string) =>{
    console.log('scrolling...')
    $('html,body').animate({scrollTop: $("#"+id).offset()!.top},'slow');
}

  return (
    <div className="header">
      <div className="inner-header">
          <div className="logo" onClick = {() => navigate("/Portfolio-II")} >
            <Logo/>
          </div>
          {/* <div> */}
            <ul className="navRight">
                <li><a onClick={() => navigate('/about')}>About</a></li>
               {currentPage=="landing" && <li className='proj'><a onClick={() => goToByScroll('projects')}>Projects</a></li> }
                <li>
                    
                </li>
                <div className='iconButton' onClick={()=>{}}>
                <a className='resume' href = {process.env.PUBLIC_URL +"/resume.pdf"} target = "_blank">
                  <ArticleIcon />
                </a>
            </div>
            </ul>
           
          {/* </div> */}
      </div>
    </div>
  )
}

export default Header